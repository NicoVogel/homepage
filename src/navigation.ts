import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
    { text: 'Portfolio', href: getPermalink('/portfolio') },
    { text: 'Services', href: getPermalink('/services') },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'Legal Notice', href: getPermalink('/legal') }],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/nico-vogel-49a196196/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/nicovogel' },
  ],
  footNote: `
    © Vogel Tec AB 2024. All rights reserved.
  `,
};
