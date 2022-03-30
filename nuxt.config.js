// Sitemap
const createSitemapRoutes = async () => {
  let routes = [];
  const { $content } = require('@nuxt/content')
  // if (reviews === null || reviews.length === 0)
  const reviews = await $content("reviews").fetch();
  for (const post of reviews) {
    routes.push(`reviews/${post.slug}`);
  }
  return routes;
}
import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - coffeealternative.com',
    title: 'Coffee Alternative',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],

  // Google Analytics
  // googleAnalytics: {
  //   id: 'G-C9NENGJZX4',
  //   checkDuplicatedScript: true
  // },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Sitemap
  sitemap: {
    hostname: 'https://coffeealternative.com',
    gzip: true,
    routes: createSitemapRoutes
  },
  tailwindcss: {
    jit: true,
    config: {
      plugins: [tailwindTypography, tailwindForms],
      variants: {
        width: ["responsive", "hover"]
      },
      theme: {
        extend: {
          transitionProperty: {
            'width': 'width'
          },
        }
      },
      // purge: {
      //   content: [
      //     `components/**/*.{vue,js}`,
      //     `layouts/**/*.vue`,
      //     `pages/**/*.vue`,
      //     `plugins/**/*.{js,ts}`,
      //     `nuxt.config.{js,ts}`,
      //     'content/**/*.md'
      //   ]
      // }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
