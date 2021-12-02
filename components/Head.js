import Head from "next/head";

const HeadComponent = props => (
  <Head>
    <title>{props.title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default HeadComponent;
