module.exports = {
    title: 'Effective combine',
    base: '/effective-combine/',
    port: 8081,
    markdown: {
        extendMarkdown: md => {
            md
                .use(require('markdown-it-plantuml'))
        }
    },
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
      ['link', { rel: "manifest", href: "/site.webmanifest"}],
      ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#3a0839"}],
      ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
      ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
      ['meta', { name: "msapplication-config", content: "/browserconfig.xml"}],
      ['meta', { name: "theme-color", content: "#ffffff"}],
    ],
    themeConfig: {
		logo: 'logo.svg',
        lastUpdated: 'Last Updated',
        sidebar: {
            '/funkcjonalnosci/': [
                {
                    title: 'Aplikacja',
                    children: [
                      'aplikacja/aktorzy',
                      'aplikacja/uzytkownik',
                      'aplikacja/projekt',
                      'aplikacja/task',
                    ]
                },
            ]
        },
        nav: [
            { text: 'Funkcjonalności', link: '/funkcjonalnosci/' },
            { text: 'Rozwój', items: [
                { text: 'Dokumentacja', link: '/rozwoj/dokumentacja/' },
                { text: 'Rozpoczęcie pracy', link: '/rozwoj/rozpoczecie-pracy/' },
                { text: 'Wypracowane standardy', link: '/rozwoj/wypracowane-standardy/' }
              ]
            },
            { text: 'GitHub', link: 'https://github.com/BurdalskiBartosz/effective-train' },
        ]
    }
}
