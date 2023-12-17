import { useState } from 'react';
import { Link } from 'react-router-dom';

import { links, pathsArr, sitePaths } from '@/configurations/paths';

import { Icons } from '../icons';
import { NavDesktop, Squash } from '../navigation';
import { ModeToggle } from '../theme-provider';
import { buttonVariants } from '../ui/button';

interface SiteHeaderProps {
  useNav?: boolean;
  useHelp?: boolean;
}

export default function SiteHeader({ useNav = true, useHelp = false }: SiteHeaderProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-6 space-x-4 overflow-hidden px-6 sm:justify-between sm:space-x-0">
        {useNav ? <Squash toggled={isOpen} size={20} toggle={setOpen} /> : null}
        <Link className="flex items-center gap-6 md:gap-10" to={sitePaths.home}>
          <Icons.Logo className="h-6 w-6" />
        </Link>

        {useNav ? (
          <NavDesktop
            className="flex items-center gap-6 overflow-auto scrollbar-hide md:gap-10"
            items={pathsArr}
          />
        ) : null}

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
