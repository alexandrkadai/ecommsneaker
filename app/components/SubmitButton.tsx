'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CreditCard, Loader2, ShoppingBag } from 'lucide-react';
import { useFormStatus } from 'react-dom';

interface buttonProps {
  text: string;
  textPending: string;
  className?: string;
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

export function SubmitButton({
  text,
  variant,
  textPending,
  className,
}: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className={cn(className, 'mr-2 h-2 w-2 animate-spin')} />
          {textPending}
        </Button>
      ) : (
        <Button variant={variant} type="submit">
          {text}
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
          <Loader2 className="mr-4 h-5 w-5 animate-spin" /> Deleting from Cart
          ...
        </button>
      ) : (
        <button className={className}>Delete</button>
      )}
    </>
  );
}
