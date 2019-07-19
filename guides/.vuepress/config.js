module.exports = {
    title: 'Building hypermedia apps',
    description: 'Guides to using Hydra on back end and front end',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Hydrofoil', link: '/hydrofoil/' },
            { text: 'Argolis', link: '/argolis/' },
            { text: 'hydra-box', link: '/hydra-box/' },
        ],
        sidebar: {
            '/hydrofoil': [
                '/hydrofoil/',
                '/hydrofoil/getting-started'
            ]
        },
        repo: 'hypermedia-app/building.hypermedia.app',
        docsDir: 'guides',
        editLinks: true,
        editLinkText: 'Edit Page',
        lastUpdated: 'Last Updated',
    }
};
