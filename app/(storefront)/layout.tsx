import { type ReactNode } from 'react';
import { NavbarFR } from '../components/storefront/NavbarFR';
import Footer from '../components/storefront/Footer';

export default function StoreFrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <NavbarFR />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
