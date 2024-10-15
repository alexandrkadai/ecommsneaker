import { type ReactNode } from 'react';
import { NavbarFR } from '../components/storefront/NavbarFR';

export default function StoreFrontLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarFR />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
    </>
  );
}
