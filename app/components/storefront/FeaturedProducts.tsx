import prisma from '@/app/lib/db';
import FeaturedCard from './FeaturedCard';

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

async function FeaturedProducts() {
  const data = await getData();
  return (
    <>
      <h2 className="text-4xl uppercase font-bold">Featured Products</h2>
      <div className="mt-5 sm:grid sm:grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item) => (
        <FeaturedCard key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;
