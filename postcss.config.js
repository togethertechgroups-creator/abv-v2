module.exports = {
  plugins: [
    process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ].filter(Boolean),
};
