import Image from 'next/image';
import Link from 'next/link';
import men from '@/public/MenCat.jpg';
import women from '@/public/WomenCaT.jpg';
import all from '@/public/allCat.webp';
function CategorySelection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="flex flex-row items-center justify-between">
        <h2 className="justify-center text-2xl font-extrabold uppercase tracking-tight">
          Shop by Category
        </h2>
        {/* <Link className="text-sm font-semibold  hover:text-primary" href="/products/all">
          Browse All Products&rarr;
        </Link>
        <Link className="text-sm font-semibold  hover:text-primary" href="/products/all">
          Men&rarr;
        </Link>
        <Link className="text-sm font-semibold  hover:text-primary" href="/products/all">
          Women&rarr;
        </Link> */}
      </div>
      <div className="mt-6 grid gap-y-6">
        <Link href="/products/all">
          <div className="group aspect-w-1 h-[350px] overflow-hidden rounded-xl transition-transform hover:scale-105">
            <Image
              className="objec-cover"
              src={all}
              alt="all category"
              width={200}
              height={150}
            />
            <div className="flex items-end p-6">
              <h3 className="rounded-xl bg-white p-4 text-4xl font-bold uppercase text-purple-700">
                All
              </h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="grid-rows-1gap-y-6 mt-6 grid sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:gap-8">
        <Link href="/products/women">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-xl transition-transform sm:aspect-w-1 hover:scale-105 sm:row-span-2">
            <Image
              className="object-cover"
              src={women}
              alt="category image"
              width={200}
              height={200}
            />
            <div className="flex items-end p-6">
              <h3 className="rounded-xl bg-white p-4 text-4xl font-bold uppercase text-purple-700">
                Women
              </h3>
            </div>
          </div>
        </Link>
        <Link href="/products/men">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-xl transition-transform sm:aspect-w-1 hover:scale-105 sm:row-span-2">
            <Image
              className="object-cover"
              src={men}
              alt="category image"
              width={200}
              height={200}
            />
            <div className="flex items-end p-6">
              <h3 className="rounded-xl bg-white p-4 text-4xl font-bold uppercase text-purple-700">
                Men
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CategorySelection;
