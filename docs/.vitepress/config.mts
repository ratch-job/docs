import { defineConfig } from 'vitepress'

const VITE_BASE_URL = "/docs/"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ratch-job docs",
  description: "ratch-job docs",
  base: VITE_BASE_URL,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'open api', link: '/open-api' }
      //{ text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'ratch-job docs',
        items: [
          //{ text: 'Markdown Examples', link: '/markdown-examples' },
          //{ text: 'Runtime API Examples', link: '/api-examples' }
          { text: 'open api', link: '/open-api' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
