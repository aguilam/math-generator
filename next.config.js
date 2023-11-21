/** @type {import('next').NextConfig} */
const nextConfig = {
  
}
module.exports = {
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'all',
          },
        ],
        source: '/:path*',
      });
    }
    return headers;
  },
};
module.exports = nextConfig
