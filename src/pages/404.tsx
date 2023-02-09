import Head from 'next/head';
import { NextPage } from 'next';

import layout from '@/theme/layout.module.scss';

import Layout from '@/components/Layout';
import Empty from '@/components/Empty';

import { title } from '@/utils/constants';

const NotFound: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`404 | ${title}`}</title>
      </Head>
      <Layout>
        <div className={layout.container}>
          <Empty is404 />
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
