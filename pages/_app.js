import '@/styles/globals.css';

import Layout from '@/components/layout/layout';
import { AuthProvider } from '@/utils/useAuth';

import MainTheme from '@/context/Theme/main-theme';

const defaultLayout = (page) => <Layout>{page}</Layout>;

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultLayout;

  return getLayout(
    <AuthProvider>
      <MainTheme>
        <Component {...pageProps} />
      </MainTheme>
    </AuthProvider>
  );
}
