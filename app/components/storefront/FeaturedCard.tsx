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
                  className="object-cover object-center w-full h-full rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
      <div className=" flex justify-between items-center mb-2">
        <h1 className="font-semibold text-3xl text-purple-500 uppercase tracking-tighter">
          {item.name}
        </h1>
        <h3 className="font-bold bg-primary/20 p-2 rounded-md text-primary ring-1 ring-primary mt-0.5">
          ${item.price}
        </h3>
      </div>
      <Button asChild className="w-full mt-5">
        <Link href={`/product/${item.id}`} className="uppercase font-bold tracking-wide">
          Learn More
        </Link>
      </Button>
    </div>
  );
}

export default FeaturedCard;

export function LoadingFeatureCard(){
    return(
        <div className="flex flex-col">
            <Skeleton className='w-full h-[320px]'/>
            <div className="flex flex-col mt-2 gap-y-2">
                <Skeleton className='h-4 w-full'/>
                <Skeleton className='h-6 w-full'/>
            </div>
            <Skeleton className='w-full h-10 mt-5' />
        </div>
    )
}