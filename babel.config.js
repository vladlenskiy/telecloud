module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src',
          '@ud-ui': './src/modules/ud-ui/components',
          '@styles': './src/styles',
        },
      },
    ],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    'react-native-reanimated/plugin',
  ],
};
