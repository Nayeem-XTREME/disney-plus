import Image from 'next/image';
import { signIn } from 'next-auth/react';
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid';

const menu = [
  {
    icon: <HomeIcon className="h-4" />,
    name: 'Home',
  },
  {
    icon: <SearchIcon className="h-4" />,
    name: 'Search',
  },
  {
    icon: <PlusIcon className="h-4" />,
    name: 'Watchlist',
  },
  {
    icon: <StarIcon className="h-4" />,
    name: 'Originals',
  },
  {
    icon: <img src="/images/movie-icon.svg" alt="" className="h-5" />,
    name: 'Movies',
  },
  {
    icon: <img src="/images/series-icon.svg" alt="" className="h-5" />,
    name: 'Series',
  },
];

const Header = () => {
  return (
    <div className="flex items-center sticky bg-[#040714] top-0 z-[1000] h-[72px] px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
      />
      <div className="hidden ml-10 md:flex items-center space-x-6">
        {menu.map((item, index) => (
          <a className="header-link group" key={index}>
            {item.icon}
            <span className="span">{item.name}</span>
          </a>
        ))}
      </div>

      <button
        className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-200"
        onClick={signIn}
      >
        Login
      </button>
    </div>
  );
};

export default Header;
