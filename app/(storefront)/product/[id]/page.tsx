import FeaturedProducts from '@/app/components/storefront/FeaturedProducts';
import ImageSlider from '@/app/components/storefront/ImageSlider';
import prisma from '@/app/lib/db';
import { Button } from '@/components/ui/button';
import {  ShoppingBagIcon, StarIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

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
  const data = await getData(params.id);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
        <ImageSlider images={data.images} />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary uppercase">{data.name}</h1>
          <p className="text-3xl mt-2 text-gray-900">${data.price}</p>
          <div className="mt-3 flex items-center gap-1">
            <StarIcon size={24} className='text-yellow-500 fill-yellow-500'/>
            <StarIcon size={24} className='text-yellow-500 fill-yellow-500'/>
            <StarIcon size={24} className='text-yellow-500 fill-yellow-500'/>
            <StarIcon size={24} className='text-yellow-500 fill-yellow-500'/>
            <StarIcon size={24} className='text-yellow-500 fill-yellow-500'/>
          </div>
          <p className="text-base text-gray-700 mt-6">{data.description}</p>
          <Button size='lg' className='mt-10 w-full' >
            <ShoppingBagIcon size={24}/>
            <span className="ml-5 uppercase font-bold">Add to Cart</span>
          </Button>
        </div>
      </div>
      <div className="mt-16">
        <FeaturedProducts />
      </div>
    </>
  );
}

export default ProductPage;
