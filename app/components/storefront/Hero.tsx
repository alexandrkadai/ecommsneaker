import prisma from '@/app/lib/db';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

async function getData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <Carousel>
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative h-[80vh] lg:h-[60vh]">
              <Image
                src={item.image}
                alt="Product Banner"
                fill
                className="h-full w-full rounded-xl object-cover"
              />
              <div className="absolute bottom-6 left-6 rounded-xl bg-white p-1 shadow-lg transition-transform hover:scale-105">
                <h1 className="text-4xl font-bold uppercase text-purple-700">
                  {item.title}
                </h1>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-16" />
      <CarouselNext className="mr-16" />
    </Carousel>
  );
}
