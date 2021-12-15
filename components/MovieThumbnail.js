import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { tmdbBaseUrl } from '../variables';

const MovieThumbnail = ({ data }) => {
  const router = useRouter();
  return (
    <div className="thumbnail" onClick={() => router.push(`/movie/${data.id}`)}>
      <Image
        src={`${tmdbBaseUrl}${data.backdrop_path || data.poster_path}`}
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieThumbnail;
