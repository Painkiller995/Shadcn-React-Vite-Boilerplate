import { Link } from 'react-router-dom';

import { links, pathsArr, sitePaths } from '@/configurations/paths';
import { siteConfig } from '@/configurations/site';

import { Icons } from '../icons';
import { ModeToggle } from '../theme-provider';
import { Button, buttonVariants } from '../ui/button';
import { MainNav } from './main-nav';

interface SiteHeaderProps {
  useNav?: boolean;
  useHelp?: boolean;
}

export default function SiteHeader({ useNav = true, useHelp = false }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center space-x-4 px-6 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to={sitePaths.home}>
            <div className="flex items-center gap-6 md:gap-10">
              <Button className="block lg:hidden" variant="outline" size="icon" />
              <Icons.Logo className="h-6 w-6" />
              <span className="inline-block font-bold">{siteConfig.name}</span>
            </div>
          </Link>

          {useNav ? <MainNav className="hidden lg:block" items={pathsArr} /> : null}
        </div>

        <div className="flex flex-1 justify-end space-x-4  ">
          {useHelp ? (
            <nav className="flex space-x-1">
              <Link to={sitePaths.needHelp} target="_blank">
                <span className="inline-block font-bold">Need help?</span>
              </Link>
            </nav>
          ) : (
            <>
              <nav className="flex space-x-1">
                <div
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                  })}
                >
                  <Link to={links.github} target="_blank">
                    <Icons.GitHub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>

                <div
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                  })}
                >
                  <Link to={links.twitter} target="_blank">
                    <Icons.Twitter className="h-5 w-5 fill-current" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </nav>
              <ModeToggle />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
