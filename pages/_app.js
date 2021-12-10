import { Provider } from 'next-auth/client';
import 'tailwindcss/tailwind.css';
import '../style.css';

const MyApp = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
