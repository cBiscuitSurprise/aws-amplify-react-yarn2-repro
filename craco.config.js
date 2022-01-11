
module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          buffer: require.resolve('buffer'),
          url: require.resolve('url'),
          // buffer: false,
          // url: false,
        }
      }
    }
  }
};
