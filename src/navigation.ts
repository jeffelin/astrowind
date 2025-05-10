import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Features',
    //   href: getPermalink('/#features'),
    // }
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Solutions', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Documentation', href: '#' },
        { text: 'API Reference', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Tutorials', href: '#' },
        { text: 'Case Studies', href: '#' },
        { text: 'Community', href: '#' },
        { text: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Security', href: '#' },
        { text: 'Compliance', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://artemis.com/favicon/favicon-32x32.png" alt="Artemis logo" loading="lazy"></span>
    Made with ❤️ by <a class="text-blue-600 underline dark:text-muted" href="https://artemis.com">Artemis</a> · All rights reserved.
  `,
};
