module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          helpers: './src/helpers',
          hooks: './src/hooks',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          types: './src/types',
          utils: './src/utils',
          src: './src',
        },
      },
    ],
  ],
};
