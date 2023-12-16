import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';

import { buttonVariants } from '../ui/button';

interface MainNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: NavItem[];
}

export function MainNav({ items, ...other }: MainNavProps) {
  const location = useLocation();

  return (
    <div {...other}>
      {items?.length ? (
        <nav className="flex gap-6">
          {items.map((item, index) => {
            const isActive = item.href === location.pathname;
            return (
              item.href && (
                <Link
                  key={index}
                  to={item.href}
                  target={item.external ? '_blank' : '_self'}
                  style={item.disabled ? { pointerEvents: 'none' } : undefined}
                >
                  <div
                    className={cn(
                      buttonVariants({
                        size: 'sm',
                        variant: 'ghost',
                      }),
                      isActive && !item.disabled && 'bg-gray-100 dark:bg-gray-800',
                      item.disabled && 'opacity-80'
                    )}
                  >
                    {item.title}
                  </div>
                </Link>
              )
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
