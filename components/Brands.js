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
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 px-8 gap-6 max-w-[1400px] mx-auto">
      {brands.map((brand, index) => (
        <div className="brand group" key={index}>
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
      ))}
    </section>
  );
};

export default Brands;
