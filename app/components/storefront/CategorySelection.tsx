import Image from 'next/image';
import Link from 'next/link';
import men from '@/public/MenCat.jpg';
import women from '@/public/WomenCaT.jpg';
import all from '@/public/allCat.webp';
function CategorySelection() {
  return (
    <div className="py-24 sm:py-32 ">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight justify-center uppercase ">
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
      <div className="mt-6 grid gap-y-6 ">
        <Link href="/products/all">
          <div className="group aspect-w-1 h-[350px] rounded-xl overflow-hidden transition-transform hover:scale-105">
            <Image className="objec-cover" src={all} alt="all category" width={200} height={150} />
            <div className="p-6 flex items-end">
              <h3 className="text-4xl font-bold uppercase text-purple-700 bg-white rounded-xl p-4">
                All
              </h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-6  sm:grid-cols-1  grid md:grid-cols-2 grid-rows-1gap-y-6 sm:gap-6 lg:gap-8">
        <Link href="/products/women">
          <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2 transition-transform hover:scale-105">
            <Image
              className="object-cover"
              src={women}
              alt="category image"
              width={200}
              height={200}
            />
            <div className="p-6 flex items-end">
              <h3 className="text-4xl font-bold uppercase text-purple-700 bg-white rounded-xl p-4">
                Women
              </h3>
            </div>
          </div>
        </Link>
        <Link href="/products/men">
          <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2 transition-transform hover:scale-105">
            <Image
              className="object-cover"
              src={men}
              alt="category image"
              width={200}
              height={200}
            />
            <div className="p-6 flex items-end">
              <h3 className="text-4xl font-bold uppercase text-purple-700 bg-white rounded-xl p-4">
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
