import layout from '@/theme/layout.module.scss';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      <main className={layout.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
