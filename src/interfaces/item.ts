import { Author } from '@/interfaces/author';

export interface Item {
  author: Author;
  categories: string[];
  item: ItemInfo & ItemDetails;
}

export interface ItemInfo {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string[];
  condition: string;
  free_shipping: boolean;
}

export interface ItemDetails {
  sold_quantity: number;
  description: string;
}

export interface ItemAPI {
  id: string;
  site_id: string;
  title: string;
  subtitle: null;
  seller_id: number;
  category_id: string;
  official_store_id: null;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: Attribute[];
  buying_mode: string;
  listing_type_id: string;
  start_time: Date;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: Picture[];
  video_id: null;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: SellerAddress;
  seller_contact: null;
  location: {};
  coverage_areas: any[];
  attributes: Attribute[];
  warnings: any[];
  listing_source: string;
  variations: any[];
  status: string;
  sub_status: any[];
  tags: string[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: null;
  differential_pricing: null;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: Date;
  last_updated: Date;
  health: null;
  catalog_listing: boolean;
  channels: string[];
  error?: string;
  message?: string;
}

export interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  value_struct: Struct | null;
  values: Value[];
  attribute_group_id?: string;
  attribute_group_name?: string;
  value_type: ValueType;
}

export interface Struct {
  number: number;
  unit: string;
}

export enum ValueType {
  Boolean = 'boolean',
  List = 'list',
  Number = 'number',
  NumberUnit = 'number_unit',
  String = 'string',
}

export interface Value {
  id: null | string;
  name: string;
  struct: Struct | null;
}

export interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface SellerAddress {
  city: Sort;
  state: Sort;
  country: Sort;
  search_location: SearchLocation;
  id: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface SearchLocation {
  city: Sort;
  state: Sort;
}

export interface Shipping {
  mode: string;
  methods: any[];
  tags: string[];
  dimensions: null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface ItemDescriptionAPI {
  text: string;
  plain_text: string;
  last_updated: Date;
  date_created: Date;
  snapshot: Snapshot;
}

export interface Snapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}
