import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function SuccessRoute() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <CheckCircle size={42} className="rounded-full bg-green-500/30 text-green-500 p-2" />
          </div>
          <div className="text-center mt-5 w-full">
            <h3 className="text-lg leading-6 font-medium">Payment Succussed</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your Payment Successfull. Congratiluation to you purchase, enjoy your shoes.
            </p>
            <Button asChild className="w-full mt-5 uppercase font-medium">
              <Link href="/">Back Home</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
