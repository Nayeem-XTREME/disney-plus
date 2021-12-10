import { getSession } from 'next-auth/client';
import { Head, Header, Hero, Slider, Brands } from '../components';

const Home = ({ session }) => {
  return (
    <div className="">
      <Head title="Disney+" />
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main>
          <Slider />
          <Brands />
        </main>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Home;
