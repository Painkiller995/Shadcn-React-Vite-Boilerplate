import React from 'react';

import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';

interface NavMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: NavItem[];
  open: boolean;
}

export function NavMobile({ items, open }: NavMobileProps) {
  return (
    <div
      className={cn(
        'fixed left-0 top-16 h-screen w-screen border-b bg-background/95 pt-1 backdrop-blur supports-[backdrop-filter]:bg-background/80',
        {
          'translate-y-0': open,
          'translate-y-full': !open,
        }
      )}
    >
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {items
          ? items.map((item) => (
              <ListItem key={item.title} title={item.title} href={item.href}>
                {item.description}
              </ListItem>
            ))
          : null}
      </ul>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
      </a>
    </li>
  )
);
ListItem.displayName = 'ListItem';
