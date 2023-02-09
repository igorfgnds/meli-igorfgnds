import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';

import layout from '@/theme/layout.module.scss';

import Paper from '@/components/Paper';
import Layout from '@/components/Layout';
import Details from '@/components/Details';
import Breadcrumb from '@/components/Breadcrumb';

import { server } from '@/utils/config';
import { title } from '@/utils/constants';

import { Item } from '@/interfaces/item';

const Items: NextPage<Item> = (props: Item): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`${props.item.title} | ${title}`}</title>
      </Head>
      <Layout>
        <div className={layout.container}>
          <Breadcrumb categories={props.categories} />
          <Paper>
            <Details item={props.item} />
          </Paper>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await fetch(`${server}/items/${query.id}`);
  const data = await response.json();

  if (Object.keys(data).length > 0) {
    return {
      props: data,
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }
};

export default Items;
