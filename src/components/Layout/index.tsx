import layout from '@/theme/layout.module.scss';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Unofficial from '@/components/Unofficial';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Unofficial />
      <Header />
      <main className={layout.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
