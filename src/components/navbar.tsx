import { useEffect, useState } from 'react';

import { MainNav } from '@/components/main-nav';
import { MobileMainNav } from '@/components/mobile-main-nav';

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Initialize as `null` to avoid mismatch

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Avoid rendering until we have determined the screen size
  if (isMobile === null) return null;

  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <div className='flex md:hidden w-full'>
          <MobileMainNav />
        </div>
        <div className='hidden md:flex w-full items-center'>
          <MainNav className='mx-6' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
