import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AudioNova Docs',
  tagline: 'Mix with Your Mind',
  favicon: 'img/AudioNovaLogo_bgRemoved.png',

  url: 'https://audionova.vercel.app',
  baseUrl: '/',

  organizationName: 'audionova',
  projectName: 'app',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Removed editUrl to disable "Edit this page" links
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Removed editUrl to disable "Edit this page" links
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/AudioNovaLogo.png',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'AudioNova Docs',
      logo: {
        alt: 'AudioNova Logo',
        src: 'img/AudioNovaLogo_bgRemoved.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/audionova/app',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Prompt Cheat Sheet', to: '/docs/prompt-cheat-sheet' },
            { label: 'Mixing Basics', to: '/docs/mixing-basics' },
            { label: 'Developer Notes', to: '/docs/developer-notes' },
            { label: 'Creating a Track', to: '/docs/creating-and-a-track' },
            { label: 'Session Management', to: '/docs/session-management' },
            { label: 'Prompt Examples', to: '/docs/prompt-examples' },
            { label: 'File Requirements', to: '/docs/file-requirements' },
            { label: 'AI Prompt Tips', to: '/docs/ai-prompt-tips' },
            { label: 'Language Model Behavior', to: '/docs/language-model-behavior' },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'audionova/app',
              href: 'https://github.com/audionova/app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AudioNova. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
