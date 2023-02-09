import type { NextApiRequest, NextApiResponse } from 'next';

import { api } from '@/utils/config';
import { author } from '@/utils/constants';

import { CategoryAPI } from '@/interfaces/category';
import { Search, SearchAPI, AvailableFilterValue } from '@/interfaces/search';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const searchResponse = await fetch(`${api}/sites/MLB/search?q=${req.query.q}&limit=4`);

  const searchData: SearchAPI = await searchResponse.json();

  const getCategoriesFromFilters = () => {
    let categories: string[] = [];
    searchData.filters.forEach((filter) => {
      if (filter.id === 'category') {
        filter.values[0].path_from_root?.forEach((category) => {
          categories.push(category.name);
        });
      }
    });
    return categories;
  };

  const getCategoriesFromAvailableFilters = async () => {
    let categories: string[] = [];
    let mostResults: AvailableFilterValue = { id: '', name: '', results: 0 };
    searchData.available_filters.forEach((filter) => {
      if (filter.id === 'category') {
        filter.values.forEach((value) => {
          if (value.results > mostResults.results) {
            mostResults = value;
          }
        });
      }
    });
    const categoryPathResponse = await fetch(`${api}/categories/${mostResults.id}`);
    const categoryPathData: CategoryAPI = await categoryPathResponse.json();
    categoryPathData.path_from_root.forEach((category) => {
      categories.push(category.name);
    });
    return categories;
  };

  const getCategories = async () => {
    let categories: string[] = [];
    if (searchData.filters.find((item) => item.id === 'category')) {
      categories = getCategoriesFromFilters();
    } else {
      categories = await getCategoriesFromAvailableFilters();
    }
    return categories;
  };

  if (searchData.results.length) {
    const search: Search = {
      author: author,
      categories: await getCategories(),
      items: searchData.results.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 2,
        },
        picture: [item.thumbnail],
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      })),
    };
    res.status(200).json(search);
  } else {
    res.status(404).json({ items: [] });
  }
}
