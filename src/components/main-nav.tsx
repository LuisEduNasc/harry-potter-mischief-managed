import { allowedRoutes } from '@/config/routes';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        'flex items-center space-x-4 lg:space-x-6 p-4 border-b-2',
        className
      )}
    >
      {allowedRoutes.map((route) => (
        <Link
          key={route.id}
          to={{
            pathname: route.path,
          }}
          className='text-sm font-medium transition-colors hover:text-primary'
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
