import { addItem } from '@/app/actions';
import FeaturedProducts from '@/app/components/storefront/FeaturedProducts';
import ImageSlider from '@/app/components/storefront/ImageSlider';
import { SubmitButton } from '@/app/components/SubmitButton';
import prisma from '@/app/lib/db';
import { StarIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      name: true,
      price: true,
      images: true,
      description: true,
      id: true,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}

async function ProductPage({ params }: { params: { id: string } }) {
  noStore();
  const data = await getData(params.id);

  const addItemToShoppingCart = addItem.bind(null, data.id);

  return (
    <>
      <div className="grid grid-cols-1 items-start gap-6 py-6 md:grid-cols-2 lg:gap-x-24">
        <ImageSlider images={data.images} />
        <div>
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-primary">
            {data.name}
          </h1>
          <p className="mt-2 text-3xl text-gray-900">${data.price}</p>
          <div className="mt-3 flex items-center gap-1">
            <StarIcon size={24} className="fill-yellow-500 text-yellow-500" />
            <StarIcon size={24} className="fill-yellow-500 text-yellow-500" />
            <StarIcon size={24} className="fill-yellow-500 text-yellow-500" />
            <StarIcon size={24} className="fill-yellow-500 text-yellow-500" />
            <StarIcon size={24} className="fill-yellow-500 text-yellow-500" />
          </div>
          <p className="mt-6 text-base text-gray-700">{data.description}</p>

          <form action={addItemToShoppingCart} className="">
            <SubmitButton
              text="Add to Cart"
              textPending="Adding to cart"
              variant="default"
              className="mt-2 w-full"
            />
          </form>
        </div>
      </div>
      <div className="mt-16">
        <FeaturedProducts />
      </div>
    </>
  );
}

export default ProductPage;
