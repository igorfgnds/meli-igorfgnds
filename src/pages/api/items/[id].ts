import type { NextApiRequest, NextApiResponse } from 'next';

import { api } from '@/utils/config';
import { author } from '@/utils/constants';

import { CategoryAPI } from '@/interfaces/category';
import { Item, ItemAPI, ItemDescriptionAPI } from '@/interfaces/item';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const itemResponse = await fetch(`${api}/items/${req.query.id}`);
  const itemData: ItemAPI = await itemResponse.json();

  const itemDescResponse = await fetch(`${api}/items/${req.query.id}/description`);
  const itemDescData: ItemDescriptionAPI = await itemDescResponse.json();

  const itemCategoriesResponse = await fetch(`${api}/categories/${itemData.category_id}`);
  const itemCategoriesData: CategoryAPI = await itemCategoriesResponse.json();

  const getCategories = () => {
    let categories: string[] = [];
    itemCategoriesData.path_from_root.forEach((category) => {
      categories.push(category.name);
    });
    return categories;
  };

  const getPictures = () => {
    let pictures: string[] = [];
    itemData.pictures.forEach((picture) => {
      pictures.push(picture.url);
    });
    return pictures;
  };

  if (!itemData.error) {
    const item: Item = {
      author: author,
      categories: getCategories(),
      item: {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: itemData.price,
          decimals: 2,
        },
        picture: getPictures(),
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity,
        description: itemDescData.plain_text,
      },
    };
    res.status(200).json(item);
  } else {
    res.status(404).json({});
  }
}
