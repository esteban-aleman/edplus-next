import type { AppProps } from 'next/app';
import 'styles/global.scss';
import { NextPageWithLayout } from './page';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<AppProps>;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
