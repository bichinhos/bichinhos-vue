module.exports = {
  css: [
    'node_modules/the-grid-flexbox/css/the-grid.min.css'
  ],
  head: {
    title: 'Bichinhos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bichinhos intro' },
      { name: 'author', content: 'gustavoquinalha' },
      { name: 'robots', content: 'index/follow' },
      { name: 'googlebot', content: 'index/follow' },
      // google+
      { itemprop: 'name', content: 'Bichinhos' },
      { itemprop: 'description', content: 'Description Bichinhos' },
      { itemprop: 'image', content: 'https://bichinhos.herokuapp.com/intro.png' },
      // facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Bichinhos' },
      { property: 'og:url', content: 'https://bichinhos.herokuapp.com/' },
      { property: 'og:site_name', content: 'Bichinhos' },
      { property: 'og:image', content: 'https://bichinhos.herokuapp.com/intro.png' },
      { property: 'og:description', content: 'Description Bichinhos' },
      { property: 'og:locale', content: 'pt_Br' },
      { property: 'fb:app_id', content: '122670998365518' },
      { property: 'fb:admins', content: '111111' },
      // twitter
      { name: 'twitter:card', content: 'Summary' },
      { name: 'twitter:title', content: 'Bichinhos' },
      { name: 'twitter:description', content: 'Bichinhos' },
      { name: 'twitter:creator', content: 'gustavoquinalha' },
      { name: 'twitter:image', content: 'https://bichinhos.herokuapp.com/intro.png' },
      // android
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'sitemap', type: 'application/xml', content: 'https://bichinhos.herokuapp.com/sitemap.xml' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'base', href: 'https://bichinhos.herokuapp.com/' },
      { rel: 'canonical', href: 'https://bichinhos.herokuapp.com//' }
    ],
    script: [{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js'
    }]
  },

  loading: { color: '#00ce8c', height: '5px' },

  plugins: [
    { src: '~plugins/highlights.js', ssr: false }
  ],

  build: {

  }
}
