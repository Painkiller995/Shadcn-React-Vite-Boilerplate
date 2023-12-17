import { Link } from 'react-router-dom';

import { sitePaths } from '@/configurations/paths';

import { Icons } from '../icons';

export const HeaderLogo = () => (
  <Link className="hidden items-center md:flex" to={sitePaths.home}>
    <Icons.Logo className="h-6 w-6" />
  </Link>
);
