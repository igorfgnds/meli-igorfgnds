import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';

import layout from '@/theme/layout.module.scss';

import Item from '@/components/Item';
import Paper from '@/components/Paper';
import Layout from '@/components/Layout';
import NotFound from '@/components/Empty';
import Breadcrumb from '@/components/Breadcrumb';

import { server } from '@/utils/config';
import { title } from '@/utils/constants';

import { Search } from '@/interfaces/search';

const Items: NextPage<Search> = (props: Search): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${router.query.search} | ${title}`}</title>
      </Head>
      <Layout>
        <div className={layout.container}>
          {props.items.length > 0 ? (
            <>
              <Breadcrumb categories={props.categories} />
              <Paper>
                {props.items.map((item) => {
                  return <Item key={item.id} item={item} />;
                })}
              </Paper>
            </>
          ) : (
            <NotFound />
          )}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await fetch(`${server}/items?q=${query.search}`);
  const data = await response.json();

  return {
    props: data,
  };
};

export default Items;
