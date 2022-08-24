//Alterações aqui tem que reiniciar a aplicação

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.traction.one"],
    deviceSizes:[320, 640, 768, 1024],
  }    
}

module.exports = nextConfig
