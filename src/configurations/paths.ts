import { NavItem } from '@/types/nav';

export const sitePaths = {
  home: '/',
  pageOne: 'PageOne',
  about: '/about',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  needHelp: '/',
};

export const pathsArr: NavItem[] = [
  {
    title: 'Home',
    href: sitePaths.home,
  },
  {
    title: 'Page One',
    href: sitePaths.pageOne,
  },
  {
    title: 'About',
    href: sitePaths.about,
  },
  {
    title: '403',
    href: sitePaths.page403,
  },
  {
    title: '404',
    href: sitePaths.page404,
  },
  {
    title: '500',
    href: sitePaths.page500,
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
