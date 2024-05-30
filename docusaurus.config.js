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
          // {
          //   from: '/extension',
          //   to: '/general/getting-started/Extension/introduction',
          // },
          {
            from: '/migration',
            to: '/general/l14-and-lyxe/migration/introduction',
          },
          {
            from: '/migration/incidents/may-2024',
            to: '/general/l14-and-lyxe/migration/incidents/may',
          },
          {
            from: '/general',
            to: '/general/introduction',
          },

          // Outdated and updated pages
          // {
          //   from: '/extension/feature-requests',
          //   to: '/general/introduction',
          // },
          {
            from: '/general/common-errors',
            to: '/general/getting-started/Extension/common-errors',
          },
          {
            from: '/migration/incidents/delay-incident',
            to: '/general/l14-and-lyxe/migration/incidents/january',
          },

          // {
          //   from: '/extension/guides/fund-controller/',
          //   to: '/general/getting-started/Extension/guides/fund-controller',
          // },
          // {
          //   from: '/extension/guides/docs/general/check-2fa-recovery',
          //   to: '/general/getting-started/Extension/guides/check-2fa-recovery',
          // },
          // {
          //   from: '/extension/guides/check-extension-version',
          //   to: '/general/getting-started/Extension/guides/check-extension-version',
          // },
          // {
          //   from: '/extension/guides/create-backup',
          //   to: '/general/getting-started/Extension/guides/create-backup',
          // },
          // {
          //   from: '/extension/guides/get-controller-funds',
          //   to: '/general/getting-started/Extension/guides/get-controller-funds',
          // },
          // {
          //   from: '/extension/guides/set-wallet-recovery',
          //   to: '/general/getting-started/Extension/guides/set-wallet-recovery',
          // },
          // {
          //   from: '/extension/guides/wallet-recovery',
          //   to: '/general/getting-started/Extension/guides/wallet-recovery',
          // },
          // {
          //   from: '/extension/incidents/controller-recovery/',
          //   to: '/general/getting-started/Extension/incidents/controller-recovery',
          // },
          // {
          //   from: '/extension/universal-profiles',
          //   to: '/general/getting-started/universal-profiles',
          // },
          // {
          //   from: '/extension/using-exchanges',
          //   to: '/general/getting-started/using-exchanges',
          // },
        ],
        createRedirects(existingPath) {
          if (existingPath.startsWith('/general/getting-started/Extension/')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace(
                '/general/getting-started/Extension',
                '/extension',
              ),
              existingPath,
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
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
    announcementBar: {
      id: 'may_migration_incident',
      content:
        'Ongoing incident on LYXe -> LYX migration service. <a href="https://support.lukso.network/general/l14-and-lyxe/migration/incidents/may">More information.</a>',
      backgroundColor: '#fff8e6',
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
          docId: 'general/l14-and-lyxe/migration/introduction',
          position: 'left',
          label: 'LYXe Migration',
        },
        {
          type: 'doc',
          docId: 'contact-us/contact-us',
          position: 'right',
          label: 'Contact Us',
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
