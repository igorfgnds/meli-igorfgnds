import { GetServerSideProps, NextPage } from 'next';

import layout from '@/theme/layout.module.scss';

import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Payment from '@/components/Payment';
import CardList from '@/components/CardList';

import { server } from '@/utils/config';

import { Search } from '@/interfaces/search';

interface Home {
  products: Search[];
}

const Home: NextPage<Home> = (props: Home): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <div className={layout.container}>
        <Payment />
        <CardList items={props.products[0].items} />
        <CardList items={props.products[1].items} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const resFirsList = await fetch(`${server}/items?q=iphone`);
  const dataFirstList = await resFirsList.json();

  const resSecondList = await fetch(`${server}/items?q=macbook`);
  const dataSecondList = await resSecondList.json();

  return {
    props: {
      products: [dataFirstList, dataSecondList],
    },
  };
};

export default Home;
