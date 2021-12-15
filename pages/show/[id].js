import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import router from 'next/router';
import { getSession } from 'next-auth/client';
import { PlusIcon, XIcon } from '@heroicons/react/solid';
import { Head, Header, Hero } from '../../components';
import { tmdbBaseUrl, youtubePrefix } from '../../variables';

const Show = ({ session, result }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const videoIndex = result.videos?.results?.findIndex(
    (item) => item.type === 'Trailer'
  );

  useEffect(() => {
    if (!session) router.push('/');
  }, []);

  return (
    <div>
      <Head title={result.title || result.original_name} />
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-72px)]">
            <Image
              src={`${tmdbBaseUrl}${
                result.backdrop_path || result.poster_path
              }`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="absolute inset-y-28 md:inset-y-auto md:bottom-10 
            inset-x-4 md:inset-x-12 space-y-6 z-50"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {result.title || result.original_name}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button
                className="text-xs md:text-base bg-[#f9f9f9] text-black 
                flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              >
                <img
                  src="/images/play-icon-black.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>
              <button
                className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border 
                border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded 
                hover:bg-[#c6c6c6]"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>
              <div
                className="rounded-full border-2 cursor-pointer border-white
                flex items-center justify-center w-11 h-11 bg-black/60"
              >
                <PlusIcon className="h-6" />
              </div>
              <div
                className="rounded-full border-2 cursor-pointer border-white
                flex items-center justify-center w-11 h-11 bg-black/60"
              >
                <img src="/images/group-icon.svg" alt="" className="h-8" />
              </div>
            </div>

            <p className="text-xs md:text-sm">
              {`${result.release_date || result.first_air_date} | ${Math.floor(
                result.runtime / 60
              )}h ${result.runtime % 60}m | ${result.genres.map(
                (genre) => genre.name
              )}`}
            </p>

            <h4 className="text-sm md:text-lg max-w-4xl">{result.overview}</h4>
          </div>

          {showPlayer && (
            <div className="absolute inset-0 bg-black/50 h-full w-full z-50" />
          )}

          <div
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden
            transition duration-500 ${
              showPlayer ? 'opacity-100 z-50' : 'opacity-0'
            }`}
          >
            <div
              className="flex items-center justify-between bg-black text-[#f9f9f9]
              p-3.5"
            >
              <span className="font-semibold">Play Trailer</span>
              <div
                className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg
                opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]"
                onClick={() => setShowPlayer(false)}
              >
                <XIcon className="h-5" />
              </div>
            </div>

            <div className="relative pt-[56.25%]">
              <ReactPlayer
                className="absolute top-0 left-0"
                url={`${youtubePrefix}${result.videos?.results[videoIndex]?.key}`}
                width="100%"
                height="100%"
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const { id } = context.query;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());

  return {
    props: {
      session,
      result: response,
    },
  };
};

export default Show;
