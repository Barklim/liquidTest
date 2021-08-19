module.exports = {
  locales: ['en', 'ru', 'kk'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['index'],
    '/employees': ['employees'],
    'rgx:^/blog(/.+)*': ['blog'],
  },
};
