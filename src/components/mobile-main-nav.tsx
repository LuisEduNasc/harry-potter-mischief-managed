import * as React from 'react';
import { AlignLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Link } from 'react-router-dom';
import { allowedRoutes } from '@/config/routes';

export function MobileMainNav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <div onClick={toggleDrawer}>
          <AlignLeft />
          <span className='sr-only'>Toggle Menu</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className='max-h-[60svh] p-0'>
        <div className='overflow-auto p-6'>
          <DrawerTitle className='text-stone-400 mb-6'>Menu</DrawerTitle>

          <div className='flex flex-col space-y-3'>
            {allowedRoutes.map((route) => (
              <MobileLink
                key={route.id}
                href={route.path}
                onOpenChange={setOpen}
              >
                {route.label}
              </MobileLink>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface MobileLinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  href: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      to={{
        pathname: href,
      }}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={cn('text-base mb-2', className)}
      {...props}
    >
      {children}
    </Link>
  );
}
