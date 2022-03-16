// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '10up - Gutenberg Best Practices',
  tagline: 'The central hub for everything Gutenberg related at 10up',
  url: 'https://gutenberg.10up.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '10up', // Usually your GitHub org/user name.
  projectName: 'gutenberg-best-practices', // Usually your repo name.
  customFields: {
    tenupSSOProxy: 'https://ssoproxy.10uplabs.com/wp-login.php',
    googleSSOClientId: '633588772255-vbpba3ca5254j0n6d9pf3a552pcbkr8q',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        editUrl: 'https://github.com/10up/gutenberg-best-practices/tree/main/',
        sidebarCollapsed: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'training',
        path: 'training',
        routeBasePath: 'training',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        editUrl: 'https://github.com/10up/gutenberg-best-practices/tree/main/',
        sidebarCollapsed: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'reference',
        routeBasePath: 'reference',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        editUrl: 'https://github.com/10up/gutenberg-best-practices/tree/main/',
        sidebarCollapsed: false,
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Gutenberg Best Practices',
        logo: {
          src: 'img/10up-logo-full.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'right',
            label: 'Reference',
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'right',
            label: 'Training',
            docsPluginId: 'training'
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'right',
            label: 'Guides',
            docsPluginId: 'guides'
          },
          {
            label: 'Logout 🔓',
            position: 'right',
            to: 'logout',
          }
        ],
      },
      announcementBar: {
        id: 'support_us',
        content:
          'Have any questions or suggestions? Just open a discussion in <a target="_blank" rel="noopener noreferrer" href="https://github.com/10up/gutenberg-best-practices/discussions/new">this GitHub Repository</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Reference',
                to: '/reference',
              },
              {
                label: 'Training',
                to: '/training',
              },
              {
                label: 'Guides',
                to: '/guides',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack Channel',
                href: 'https://10up.slack.com/archives/C8Z3WMN1K',
              }
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Block Components',
                href: 'https://github.com/10up/block-components',
              },
              {
                label: 'Block Library',
                href: 'https://github.com/10up/block-library',
              },
              {
                label: 'Block Examples',
                href: 'https://github.com/10up/block-examples',
              },
              {
                label: 'WP Scaffold',
                href: 'https://github.com/10up/wp-scaffold',
              },
            ],
          },
        ],
        logo: {
          src: "img/10up-logo-full.svg",
          height: 50,
          width: 50,
          href: 'https://10up.com',
        },
        copyright:`🚀 10up Gutenberg Best Practices`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'bash'],
      },
    }),
};

module.exports = config;
