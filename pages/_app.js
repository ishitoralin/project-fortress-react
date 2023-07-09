import '@/styles/globals.css';

import Layout from '@/components/layout/layout';
import { AuthProvider } from '@/utils/useAuth';
const defaultLayout = (page) => <Layout>{page}</Layout>;

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultLayout;

  return getLayout(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
