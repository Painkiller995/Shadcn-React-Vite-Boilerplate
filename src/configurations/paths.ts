import { NavItem } from '@/types/nav';

export const sitePaths = {
  home: '/',
  about: '/about',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  needHelp: '/',
};

export const pathsArr: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: '403',
    href: '/403',
  },
  {
    title: '404',
    href: '/404',
  },
  {
    title: '500',
    href: '/500',
  },
  {
    title: 'Google New Tab',
    href: 'https://www.google.com/',
    external: true,
  },
  {
    title: 'Disabled',
    href: '/disabled',
    disabled: true,
  },
];

export const links = {
  twitter: 'https://twitter.com/fahddaher',
  github: 'https://github.com/Painkiller995',
  docs: 'https://ui.shadcn.com',
};
