import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'LUKSO Support Cemter',
  tagline: 'Support center for LUKSO products.',
  url: 'https://support.lukso.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'lukso-network', // Usually your GitHub org/user name.
  projectName: 'website-support-center', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    announcementBar: {
      id: 'incident',
      content:
        '🚧 &nbsp; Due to a recently discovered controller malfunction, a large amount of people are experiencing issues with the extension. Please check out the latest <a href="/extension/incidents">Extension Incidents and Fixes</a> &nbsp; 🚧',
      backgroundColor: '#FEF8E6',
      textColor: 'black',
      isCloseable: false,
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
