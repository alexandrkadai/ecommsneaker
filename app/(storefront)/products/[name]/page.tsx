import FeaturedCard from '@/app/components/storefront/FeaturedCard';
import prisma from '@/app/lib/db';
import { notFound } from 'next/navigation';
import {unstable_noStore as noStore} from 'next/cache';
async function getData(productcategory: string) {
  switch (productcategory) {
    case 'all': {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          description: true,
          id: true,
          price: true,
        },
       
      });
      return {
        title: 'All Products',
        data,
      };
    }
    case 'men': {
      const data = await prisma.product.findMany({
        where: {
          category: 'men',
        },
        select: {
          name: true,
          images: true,
          description: true,
          id: true,
          price: true,
        },
      });
      return {
        title: 'Men',
        data,
      };
    }
    case 'women': {
      const data = await prisma.product.findMany({
        where: {
          category: 'women',
        },
        select: {
          name: true,
          images: true,
          description: true,
          id: true,
          price: true,
        },
      });
      return {
        title: 'Women',
        data,
      };
    }
    default: {
      return notFound();
    }
  }
}

export default async function CategoryPage({ params }: { params: { name: string } }) {
    noStore();
  const data = await getData(params.name);

  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight my-5">{data.title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data.data.map((item) => (
          <FeaturedCard item={item} key={item.id}/>
        ))}
      </div>
    </section>
  );
}
