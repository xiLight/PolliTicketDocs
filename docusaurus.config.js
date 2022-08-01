// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PolliTicket Docs',
    tagline: 'TicketBot for discord server',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'xiLight', // Usually your GitHub org/user name.
    projectName: 'PolliTicketDocs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/xiLight/PolliTicketDocs/tree/master/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            navbar: {
                title: 'PolliTicket',
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    //{type: 'doc', docId: 'intro', position: 'left', label: 'Tutorial',},
                    //{to: '/blog', label: 'Blog', position: 'left'},
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                    },
                    {
                        href: '#',
                        label: 'Join our discord',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Quick links',
                        items: [
                            {
                                label: 'Vote on top.gg',
                                href: 'https://top.gg/',
                            },
                            {
                                label: 'Panel',
                                href: 'https://panel.polliticket.eu',
                            },
                            {
                                label: 'Website',
                                href: 'https://polliticket.eu',
                            },
                        ],
                    },
                    {
                        title: 'Other',
                        items: [
                            {
                                label: 'Join our discord',
                                href: 'https://discord.polliticket.eu/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/xiLight/PolliTicketDocs',
                            },
                        ],
                    },
                    {
                        title: 'My partner',
                        items: [
                            {
                                label: '#',
                                href: '#',
                            },
                            {
                                label: '#',
                                href: '#',
                            },
                            {
                                label: '#',
                                href: '#',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} PolliTicket, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
