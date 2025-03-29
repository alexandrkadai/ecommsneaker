import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function SuccessRoute() {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="flex w-full justify-center">
            <CheckCircle
              size={42}
              className="rounded-full bg-green-500/30 p-2 text-green-500"
            />
          </div>
          <div className="mt-5 w-full text-center">
            <h3 className="text-lg font-medium leading-6">Payment Succussed</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your Payment Successfull. Congratiluation to you purchase, enjoy
              your shoes.
            </p>
            <Button asChild className="mt-5 w-full font-medium uppercase">
              <Link href="/">Back Home</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
