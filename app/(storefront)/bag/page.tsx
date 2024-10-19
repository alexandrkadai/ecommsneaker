import { checkOut, deleteItem } from '@/app/actions';
import { CheckOutButton, DeleteButton } from '@/app/components/SubmitButton';
import { TCart } from '@/app/lib/interfaces';
import { redis } from '@/app/lib/redis';
import { Button } from '@/components/ui/button';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ArrowRightCircle, ShoppingBagIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function BagRoute() {
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
    <div className="max-w-2xl mx-auto mt-10 min-h-[55vh] ">
      {!cart || !cart.items ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-primary p-8 text-center mt-20">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <ShoppingBagIcon size={40} />
          </div>
          <span className="mt-6 text-xl font-bold ">Your Cart is Empty </span>
          <Link
            href="/products/all"
            className="mt-20 flex flex-row items-center justify-center gap-2 uppercase bg-primary text-white p-2 rounded-md transition-transform hover:scale-105">
            Go Shopping <ArrowRightCircle size={20} />
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-10 ">
          {cart?.items.map((item) => (
            <div className="flex border-2 border-primary rounded-xl p-4" key={item.id}>
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
                <Image
                  src={item.imageString}
                  alt="product image"
                  className="object-contain rounded-md"
                  fill
                />
              </div>
              <div className="ml-5 flex justify-between w-full font-medium items-center relative">
                <p className="uppercase">{item.name}</p>
                <div className="flex flex-col h-full justify-center ">
                  <div className="flex items-center justify-center gap-x-2">
                    <p>{item.quantity} x </p>
                    <p>${item.price}</p>
                  </div>
                  <form action={deleteItem}>
                    <input type="hidden" name="productId" value={item.id} />
                    <DeleteButton className="font-medium text-red-400 text-end absolute bottom-0 right-1" />
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
            <CheckOutButton />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
