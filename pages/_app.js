import '@/styles/globals.css';

import Layout from '@/components/layout/layout';

import MainTheme from '@/context/Theme/main-theme';
import { AuthProvider } from '@/context/auth/useAuth';

const defaultLayout = (page) => <Layout>{page}</Layout>;

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultLayout;
  return (
    <AuthProvider>
      {getLayout(
        <MainTheme>
          <Component {...pageProps} />
        </MainTheme>
      )}
    </AuthProvider>
  );
}
