/** @type {import('next').NextConfig} */
module.exports = {
    // ...
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // ...
      
      if (!isServer) {
        config.resolve.alias['@next/swc-linux-x64-gnu'] = false;
        config.resolve.alias['@next/swc-linux-x64-musl'] = false;
      }
  
      // ...
      return config;
    },
    // ...
  };
  