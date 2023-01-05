/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.codingreflections.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'http',
        hostname: 'wordpress.local',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-1.codingreflections.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'next.codingreflections.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'codingreflections.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/parse-xml-php',
        destination: '/blog/parse-xml-php',
        permanent: true
      },
      {
        source: '/php-data-types',
        destination: '/blog/php-data-types',
        permanent: true
      },
      {
        source: '/php-superglobals',
        destination: '/blog/php-superglobals',
        permanent: true
      },
      {
        source: '/php-variables-constants',
        destination: '/blog/php-variables-constants',
        permanent: true
      },
      {
        source: '/php-basic-syntax',
        destination: '/blog/php-basic-syntax',
        permanent: true
      },
      {
        source: '/what-are-websockets',
        destination: '/blog/what-are-websockets',
        permanent: true
      },
      {
        source: '/php-redirects',
        destination: '/blog/php-redirects',
        permanent: true
      },
      {
        source: '/php-form-handling',
        destination: '/blog/php-form-handling',
        permanent: true
      },
      {
        source: '/php-development-environment-docker',
        destination: '/blog/php-development-environment-docker',
        permanent: true
      },
      {
        source: '/nginx-reverse-proxy-nodejs',
        destination: '/blog/nginx-reverse-proxy-nodejs',
        permanent: true
      },
      {
        source: '/hugo-table-of-contents',
        destination: '/blog/hugo-table-of-contents',
        permanent: true
      },
      {
        source: '/what-is-markdown',
        destination: '/blog/what-is-markdown',
        permanent: true
      },
      {
        source: '/js-functions',
        destination: '/blog/js-functions',
        permanent: true
      },
      {
        source: '/browsersync-reload-localhost',
        destination: '/blog/browsersync-reload-localhost',
        permanent: true
      },
      {
        source: '/wordpress-programming-languages',
        destination: '/blog/wordpress-programming-languages',
        permanent: true
      },
      {
        source: '/should-i-learn-jquery',
        destination: '/blog/should-i-learn-jquery',
        permanent: true
      },
      {
        source: '/how-to-create-svg-image-blur-mouseover-effect',
        destination: '/blog/how-to-create-svg-image-blur-mouseover-effect',
        permanent: true
      },
      {
        source: '/hide-header-on-scroll-down',
        destination: '/blog/hide-header-on-scroll-down',
        permanent: true
      },
      {
        source: '/php-parse-html',
        destination: '/blog/php-parse-html',
        permanent: true
      },
      {
        source: '/go/linode',
        destination: 'https://linode.gvw92c.net/mD2re',
        permanent: true
      },
      {
        source: '/go/digitalocean',
        destination: 'https://m.do.co/c/4269e9a8d8a4',
        permanent: true
      },
    ]
  }
}

module.exports = nextConfig
