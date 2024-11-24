import prisma from '@/app/lib/db';
import FeaturedCard, { LoadingFeatureCard } from './FeaturedCard';
import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';

async function getData() {
  const data = await prisma.product.findMany({
    where: {
      status: 'published',
      isFeatured: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
}

function FeaturedProducts() {
  return (
    <>
      <h2 className="text-4xl font-bold uppercase">Featured Products</h2>
      <Suspense fallback={<LoadingRows />}>
        <LoadFeturedProducts />
      </Suspense>
    </>
  );
}

export default FeaturedProducts;

async function LoadFeturedProducts() {
  noStore();
  const data = await getData();
  return (
    <div className="mt-5 gap-5 sm:grid sm:grid-cols-1 md:grid-cols-3">
      {data.map((item) => (
        <FeaturedCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function LoadingRows() {
  return (
    <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <LoadingFeatureCard />
      <LoadingFeatureCard />
      <LoadingFeatureCard />
    </div>
  );
}
