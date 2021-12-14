import React from 'react';
import Image from 'next/image';

const brands = [
  {
    image: {
      src: '/images/disnep.png',
      alt: '',
    },
    video: {
      src: '/videos/disney.mp4',
      type: 'video/mp4',
    },
  },
  {
    image: {
      src: '/images/marvel.png',
      alt: '',
    },
    video: {
      src: '/videos/marvel.mp4',
      type: 'video/mp4',
    },
  },
  {
    image: {
      src: '/images/national-geographic.png',
      alt: '',
    },
    video: {
      src: '/videos/national-geographic.mp4',
      type: 'video/mp4',
    },
  },
  {
    image: {
      src: '/images/pixar.png',
      alt: '',
    },
    video: {
      src: '/videos/pixar.mp4',
      type: 'video/mp4',
    },
  },
  {
    image: {
      src: '/images/starwars.png',
      alt: '',
    },
    video: {
      src: '/videos/star-wars.mp4',
      type: 'video/mp4',
    },
  },
];

const Brands = () => {
  return (
    <section className="flex flex-col sm:flex-row flex-wrap justify-center items-center mx-auto max-w-[1400px] mt-10">
      {brands.map((brand, index) => (
        <div className="w-1/5 min-w-[224px]" key={index}>
          <div className="brand group">
            <Image src={brand.image.src} layout="fill" objectFit="cover" />
            <video
              autoPlay
              loop
              playsInline
              className="hidden group-hover:inline rounded-lg object-cover"
            >
              <source src={brand.video.src} type={brand.video.type} />
            </video>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Brands;
