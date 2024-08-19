/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.microlink.io"],
  },
};

import withVercelToolbar from '@vercel/toolbar/plugins/next';

// Aplicando o withVercelToolbar e exportando a configuração
const config = withVercelToolbar()(nextConfig);

export default config;