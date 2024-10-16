import ImageSlider from '@/app/components/storefront/ImageSlider';
import prisma from '@/app/lib/db';
import { notFound } from 'next/navigation';

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
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
  return <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6'>
        <ImageSlider images={data.images} />
    </div>
  </>
}

export default ProductPage;
