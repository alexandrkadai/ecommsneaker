import { checkOut, deleteItem } from '@/app/actions';
import { DeleteButton, SubmitButton } from '@/app/components/SubmitButton';
import { TCart } from '@/app/lib/interfaces';
import { redis } from '@/app/lib/redis';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ArrowRightCircle, ShoppingBagIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';

export default async function BagRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect('/');
  }
  const cart: TCart | null = await redis.get(`cart-${user.id}`);
  let totalPrice = 0;

  cart?.items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="mx-auto mt-10 min-h-[55vh] max-w-2xl">
      {!cart || !cart.items ? (
        <div className="mt-20 flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-primary p-8 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <ShoppingBagIcon size={40} />
          </div>
          <span className="mt-6 text-xl font-bold">Your Cart is Empty </span>
          <Link
            href="/products/all"
            className="mt-20 flex flex-row items-center justify-center gap-2 rounded-md bg-primary p-2 uppercase text-white transition-transform hover:scale-105"
          >
            Go Shopping <ArrowRightCircle size={20} />
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {cart?.items.map((item) => (
            <div
              className="flex rounded-xl border-2 border-primary p-4"
              key={item.id}
            >
              <div className="relative h-24 w-24 sm:h-32 sm:w-32">
                <Image
                  src={item.imageString}
                  alt="product image"
                  className="rounded-md object-contain"
                  fill
                />
              </div>
              <div className="relative ml-5 flex w-full items-center justify-between font-medium">
                <p className="uppercase">{item.name}</p>
                <div className="flex h-full flex-col justify-center">
                  <div className="flex items-center justify-center gap-x-2">
                    <p>{item.quantity} x </p>
                    <p>${item.price}</p>
                  </div>
                  <form action={deleteItem}>
                    <input type="hidden" name="productId" value={item.id} />
                    <DeleteButton className="absolute bottom-0 right-1 text-end font-medium text-red-400" />
                  </form>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-10">
            <div className="flex items-center justify-between font-medium">
              <p>Subtotal</p>
              <p>${new Intl.NumberFormat('en-US').format(totalPrice)}</p>
            </div>
            <form action={checkOut}>
              <SubmitButton
                text="ChekOut"
                textPending="Processing Checkout..."
                variant="default"
                className="w-full"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
