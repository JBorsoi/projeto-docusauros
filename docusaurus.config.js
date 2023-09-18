// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line no-undef
const lightCodeTheme = require('prism-react-renderer/themes/github');
// eslint-disable-next-line no-undef
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Condo-Link',
  tagline: 'Gestão Virtual de Condomínios',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://condo-link.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JBorsoi', // Usually your GitHub org/user name.
  projectName: 'projeto-docusauros', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // eslint-disable-next-line no-undef
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          // eslint-disable-next-line no-undef
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Condo-Link',
        logo: {
          alt: 'My Site Logo',
          src: 'img/aguia-Bolinha.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Portfólio',
          },
          {
            href: '/quem-somos/quem-somos',
            position: 'left',
            label: 'Quem Somos',
          },
          {
            href: 'https://github.com/RenataPortoGransoti/Condo-Link',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Portfólio',
                to: '/docs/category/1º-bimestre',
              },
            ],
          },
          {
            title: 'Equipe',
            items: [
              {
                label: 'Quem somos',
                to: '/quem-somos/quem-somos',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/RenataPortoGransoti/Condo-Link',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Condo-Link, Inc. Site construido com Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

// eslint-disable-next-line no-undef
module.exports = config;
