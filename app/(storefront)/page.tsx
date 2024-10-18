import CategorySelection from '../components/storefront/CategorySelection';
import FeaturedProducts from '../components/storefront/FeaturedProducts';

import Hero from '../components/storefront/Hero';

export default function IndexPage() {
  return (
    <>
      <Hero />
      <CategorySelection />
      <FeaturedProducts />
    </>
  );
}
