import Link from 'next/link';
import NavbarFRLinks from './NavbarFRLinks';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ShoppingBag } from 'lucide-react';
import { UserDropdown } from './UserDropDown';
import { Button } from '@/components/ui/button';
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { redis } from '@/app/lib/redis';
import { TCart } from '@/app/lib/interfaces';

export async function NavbarFR() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const cart: TCart | null = await redis.get(`cart-${user?.id}`);
  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-xl font-bold uppercase text-black lg:text-6xl">
            Chinnoto <span className="text-purple-600">Sneaker</span>
          </h1>
        </Link>
        <NavbarFRLinks />
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <Link
              href="/bag"
              className="group mr-2 flex items-center rounded-md border-2 border-purple-500 p-2"
            >
              <ShoppingBag
                size={30}
                className="text-gray-400 group-hover:text-gray-700"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                {total}
              </span>
            </Link>
            <UserDropdown
              email={user.email as string}
              name={user.given_name as string}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          </>
        ) : (
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
            <Button variant="ghost" className="uppercase" asChild>
              <LoginLink>Sign IN</LoginLink>
            </Button>
            <Button variant="ghost" className="uppercase" asChild>
              <RegisterLink>Sign UP</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
