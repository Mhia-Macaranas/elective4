/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a GitHub Pages subdirectory, uncomment and set basePath
  // basePath: '/repository-name',
};

export default nextConfig;

