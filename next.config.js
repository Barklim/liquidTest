const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const nextTranslate = require('next-translate')

module.exports = withPlugins(
  [
    [
      withSass,
      {
        cssModules: true,
      },
    ],
    [
      withCss,
      {
        cssModules: false,
      },
    ],
    [nextTranslate],
  ],
  {
    target: 'serverless',
  }
)
