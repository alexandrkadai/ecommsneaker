import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
interface iAppProps {
  item: {
    id: string;
    name: string;
    images: string[];
    price: number;
  };
}

function FeaturedCard({ item }: iAppProps) {
  return (
    <div className="roounded-xl mb-2">
      <Carousel>
        <CarouselContent>
          {item.images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[320px]">
                <Image
                  src={item}
                  alt="featured images"
                  fill
                  className="h-full w-full rounded-lg object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-tighter text-purple-500">
          {item.name}
        </h1>
        <h3 className="mt-0.5 rounded-md bg-primary/20 p-2 font-bold text-primary ring-1 ring-primary">
          ${item.price}
        </h3>
      </div>
      <Link
        href={`/product/${item.id}`}
        className="font-bold uppercase tracking-wide"
      >
        <Button className="mt-5 w-full">Learn More</Button>
      </Link>
    </div>
  );
}

export default FeaturedCard;

export function LoadingFeatureCard() {
  return (
    <div className="flex flex-col">
      <Skeleton className="h-[320px] w-full" />
      <div className="mt-2 flex flex-col gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
      <Skeleton className="mt-5 h-10 w-full" />
    </div>
  );
}
