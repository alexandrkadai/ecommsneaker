import { LoadingFeatureCard } from '@/app/components/storefront/FeaturedCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function loadingFile() {
  return (
    <div className="">
      <Skeleton className="h-10 w-56 my-5" />
      <div className="grid md:drid-cols-2 lg:grid-cols-3 gap-4">
        <LoadingFeatureCard />
        <LoadingFeatureCard />
        <LoadingFeatureCard />
      </div>
    </div>
  );
}
