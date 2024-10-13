'use server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { productSchema } from './lib/zodSchemas';
import prisma from './lib/db';

export async function createProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    return redirect('/');
  }

  const submisson = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submisson.status !== 'success') {
    return submisson.reply();
  }

  const flattenUrls = submisson.value.images.flatMap((urlString) =>
    urlString.split(',').map((url) => url.trim()),
  );
  await prisma.product.create({
    data: {
      name: submisson.value.name,
      description: submisson.value.description,
      status: submisson.value.status,
      price: submisson.value.price,
      images: flattenUrls,
      category: submisson.value.category,
      isFeatured: submisson.value.isFeatured,
    },
  });

  redirect('/dashboard/products');
}
