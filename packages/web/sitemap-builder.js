require('babel-register')

const router = require('./src/components/RoutingSitemap').default
const Sitemap = require('react-router-sitemap').default

(
  new Sitemap(router)
    .build('http://localhost:3000')
    .save('./sitemap.xml')
)
