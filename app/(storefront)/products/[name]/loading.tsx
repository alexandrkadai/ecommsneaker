import { LoadingFeatureCard } from '@/app/components/storefront/FeaturedCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function loadingFile() {
  return (
    <div className="">
      <Skeleton className="my-5 h-10 w-56" />
      <div className="md:drid-cols-2 grid gap-4 lg:grid-cols-3">
        <LoadingFeatureCard />
        <LoadingFeatureCard />
        <LoadingFeatureCard />
      </div>
    </div>
  );
}
