import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function Banner() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex gap-2">
          <Link href="/dashboard/banner/create">
          <PlusCircle className='h-5 w-5'/>
            </Link>
        </Button>
      </div>
    </>
  );
}
