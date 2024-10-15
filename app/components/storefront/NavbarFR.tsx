import Link from 'next/link';
import NavbarFRLinks from './NavbarFRLinks';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ShoppingBag } from 'lucide-react';
import { UserDropdown } from './UserDropDown';
import { Button } from '@/components/ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';

export async function NavbarFR() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-6xl uppercase">
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
              className="group p-2 flex  items-center mr-2 border-2 border-purple-500 rounded-md">
              <ShoppingBag size={30} className="text-gray-400 group-hover:text-gray-700" />
              <span className="ml-2 text-sm font-medium text-gray-700">5</span>
            </Link>
            <UserDropdown
              email={user.email as string}
              name={user.given_name as string}
              userImage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`}
            />
          </>
        ) : (
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
            <Button variant="ghost" className='uppercase' asChild>
              <LoginLink>Sign IN</LoginLink>
            </Button>
            <Button variant="ghost" className='uppercase' asChild>
              <RegisterLink>Sign UP</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
