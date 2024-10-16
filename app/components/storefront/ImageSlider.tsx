'use client';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface iAppProps {
  images: string[];
}
const ImageSlider = ({ images }: iAppProps) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  function handlePreviousClick() {
    setMainImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  function handleNextClick() {
    setMainImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }

  function handleImageClick(index: number) {
    setMainImageIndex(index);
  }

  return (
    <div className="grid gap-6 md:gap-3 items-start">
      <div className="relative overflow-hidden rounded-lg ">
        <Image
          src={images[mainImageIndex]}
          alt="Product Image"
          width={600}
          height={600}
          className="object-cover w-[600px] h-[600px]"
        />
        <div className="absolute inset-0 h-[600px] flex items-center justify-between px-4">
          <Button onClick={handlePreviousClick} size="icon">
            <ChevronLeft size={16} />
          </Button>
          <Button onClick={handleNextClick} size="icon">
            <ChevronRight size={16} />
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {images.map((item, index) => (
            <div
              className="rounded-lg cursor-pointer"
              key={index}
              onClick={() => handleImageClick(index)} >
              <Image
                src={item}
                alt="Product Image"
                width={150}
                height={150}
                className="object-cover w-[150px] h-[150px] "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
