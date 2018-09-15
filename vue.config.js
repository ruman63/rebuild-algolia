module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/rebuild-algolia/' : '/',
    css: {
        loaderOptions: {
            css: {
            // options here will be passed to css-loader
            },
            postcss: {
                "plugins": [
                    require('tailwindcss')('./tailwind.js'),
                    require('autoprefixer'),
                ]
            }
        }
    }
  }