import Link from "next/link";

export const NavbarLinksFR = [
  {
    id: 0,
    name: 'Home',
    href: '/',
  },
  {
    id: 1,
    name: 'All Products',
    href: '/products/all',
  },
  {
    id: 2,
    name: 'Men',
    href: '/products/men',
  },
  {
    id: 3,
    name: 'Women',
    href: '/products/women',
  }
];

export default function NavbarFRLinks() {
  return <div className="hidden md:flex justify-center items-center gap-x-5 ml-8">
    {NavbarLinksFR.map((item) => (
        <Link href={item.href} key={item.id} className="font-medium uppercase transition-transform hover:scale-110">{item.name}</Link>
    ))}
  </div>;
}
