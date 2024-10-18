'use server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { bannerSchema, productSchema } from './lib/zodSchemas';
import prisma from './lib/db';
import { redis } from './lib/redis';
import { TCart } from './lib/interfaces';

export async function createProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    return redirect('/');
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(',').map((url) => url.trim()),
  );
  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      price: submission.value.price,
      isFeatured: submission.value.isFeatured === true ? true : false,
      status: submission.value.status,
      images: flattenUrls,
    },
  });

  redirect('/dashboard/products');
}

export async function editProduct(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    return redirect('/');
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });
  if (submission.status !== 'success') {
    return submission.reply;
  }
  const productId = formData.get('productId') as string;

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(',').map((url) => url.trim()),
  );

  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      price: submission.value.price,
      isFeatured: submission.value.isFeatured === true ? true : false,
      status: submission.value.status,
      images: flattenUrls,
    },
  });
  redirect('/dashboard/products');
}

export async function deleteProduct(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    return redirect('/');
  }
  await prisma.product.delete({
    where: {
      id: formData.get('productId') as string,
    },
  });
  redirect('/dashboard/products');
}

export async function createBanner(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    return redirect('/');
  }
  const submission = parseWithZod(formData, {
    schema: bannerSchema,
  });
  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.banner.create({
    data: {
      title: submission.value.title,
      image: submission.value.image,
    },
  });

  redirect('/dashboard/banner');
}

export async function deleteBanner(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    return redirect('/');
  }

  await prisma.banner.delete({
    where: {
      id: formData.get('bannerId') as string,
    },
  });

  redirect('/dashboard/banner');
}

export async function addItem(productId: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    console.log('you`re not logged in');
  }

  let cart: TCart | null = await redis.get(`cart-${user.id}`);

  const selectedProduct = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      name: true,
      id: true,
      price: true,
      images: true,
    },
  });

  if (!selectedProduct) {
    throw new Error('There is no such Product, id doesnt match');
  }

  let myCart = {} as TCart;

  if (!cart || !cart.items) {
    myCart = {
      userId: user.id,
      items: [
        {
          name: selectedProduct.name,
          price: selectedProduct.price,
          id: selectedProduct.id,
          imageString: selectedProduct.images[0],
          quantity: 1,
        },
      ],
    };
  } else {
    let itemFound = false;
    myCart.items = cart.items.map((item) => {
      if (item.id === productId) {
        itemFound = true;
        item.quantity += 1;
      }
      return item;
    });
    if (!itemFound) {
      myCart.items.push({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1,
        imageString: selectedProduct.images[0],
      });
    }
  }
  
  await redis.set(`cart-${user.id}`, myCart);
}
