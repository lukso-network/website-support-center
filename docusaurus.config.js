import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'LUKSO Support Center',
  tagline: 'Support center for LUKSO products.',
  url: 'https://support.lukso.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'lukso-network', // Usually your GitHub org/user name.
  projectName: 'website-support-center', // Usually your repo name.
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // General links to products page
          {
            from: '/extension/',
            to: '/extension/introduction',
          },
          {
            from: '/migration/',
            to: '/migration/introduction',
          },
          {
            from: '/general/',
            to: '/general/introduction',
          },

          // Outdated and updated pages
          {
            from: '/extension/feature-requests',
            to: '/general/feature-requests',
          },
          {
            from: '/migration/incidents/january-2024',
            to: '/migration/incidents/delay-incident',
          },
          {
            from: '/general/common-errors',
            to: '/extension/common-errors',
          },
          {
            from: '/migration/incidents/delay-incident',
            to: '/migration/incidents/january',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    algolia: {
      appId: '3CF67NQPKT',
      apiKey: 'ef0674e3be4fd52a84b6f37fba3dc333',
      indexName: 'lukso_support_center',
      // container: '<YOUR_CSS_CONTAINER_SELECTOR>',
      // transformItems: function (items) {},
      // searchParameters: {},
    },
    navbar: {
      title: 'LUKSO Support',
      logo: {
        alt: 'LUKSO Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'general/introduction',
          position: 'left',
          label: 'General',
        },
        {
          type: 'doc',
          docId: 'extension/introduction',
          position: 'left',
          label: 'Extension',
        },
        {
          type: 'doc',
          docId: 'migration/introduction',
          position: 'left',
          label: 'LYXe Migration',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Developers',
          items: [
            {
              label: 'Docs',
              href: 'https://docs.lukso.tech/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/lukso',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lukso_io',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/lukso',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@LUKSOBlockchain',
            },
            {
              label: 'Common Ground',
              href: 'https://app.cg/c/LUKSO/',
            },
          ],
        },
        {
          title: 'About',
          items: [
            { label: 'LUKSO', href: 'https://lukso.network/' },
            { label: 'Team', href: 'https://lukso.network/people' },
            { label: 'Careers', href: 'https://jobs.lukso.network/jobs' },
            {
              label: 'Privacy Policy',
              href: 'https://lukso.network/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LUKSO Blockchain GmbH &mdash; support@lukso.network`,
    },
    prism: {
      additionalLanguages: ['solidity', 'json'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/lukso-network/website-support-center/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
};
