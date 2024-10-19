'use client';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2, ShoppingBag } from 'lucide-react';
import { useFormStatus } from 'react-dom';

interface buttonProps {
  text: string;
  variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
}

export function SubmitButton({ text, variant }: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className="mr-2 h-2 w-2 animate-spin" />
          Please Wait ...
        </Button>
      ) : (
        <Button variant={variant} type="submit">
          {text}
        </Button>
      )}
    </>
  );
}

export function ShoppingBagButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled size="lg" className="w-full mt-5 uppercase">
          <Loader2 className="mr-4 h-5 w-5 animate-spin" /> Adding to Cart ...
        </Button>
      ) : (
        <Button size="lg" className="w-full mt-5">
          <ShoppingBag className="mr-4 h-5 w-5 " /> Add to Cart
        </Button>
      )}
    </>
  );
}

export function DeleteButton({ className }: { className: string }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button disabled className={className}>
          <Loader2 className="mr-4 h-5 w-5 animate-spin" /> Deleting from Cart ...
        </button>
      ) : (
        <button className={className}>Delete</button>
      )}
    </>
  );
}

export function CheckOutButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size="lg" className="w-full mt-5 uppercase">
          <Loader2 className="mr-4 h-5 w-5 animate-spin" /> Processing Checkout...
        </Button>
      ) : (
        <Button size="lg" className="w-full mt-5 uppercase">
          <CreditCard className="mr-4 h-5 w-5 " /> ChekOut
        </Button>
      )}
    </>
  );
}
