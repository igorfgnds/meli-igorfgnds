// API
export const api = 'https://api.mercadolibre.com';

// BFF
const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'http://localhost:3000/api' : 'https://meli-igorfgnds.vercel.app/api';
