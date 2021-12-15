import { getSession } from 'next-auth/client';
import {
  Head,
  Header,
  Hero,
  Slider,
  Brands,
  MoviesCollection,
  ShowsCollection,
} from '../components';

const Home = ({
  session,
  popularMovies,
  topRatedMovies,
  popularShows,
  topRatedShows,
}) => {
  return (
    <div className="">
      <Head title="Disney+" />
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main
          className="relative min-h-screen after:bg-home after:bg-center 
          after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute 
          after:inset-0 after:-z-10 "
        >
          <Slider />
          <Brands />
          <MoviesCollection data={popularMovies} title="Popular Movies" />
          <ShowsCollection data={popularShows} title="Popular Shows" />
          <MoviesCollection data={topRatedMovies} title="Top Rated Movies" />
          <ShowsCollection data={topRatedShows} title="Top Rated Shows" />
        </main>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const [popularMovies, topRatedMovies, popularShows, topRatedShows] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
      ).then((res) => res.json()),
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
      ).then((res) => res.json()),
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
      ).then((res) => res.json()),
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
      ).then((res) => res.json()),
    ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      topRatedMovies: topRatedMovies.results,
      popularShows: popularShows.results,
      topRatedShows: topRatedShows.results,
    },
  };
};

export default Home;
