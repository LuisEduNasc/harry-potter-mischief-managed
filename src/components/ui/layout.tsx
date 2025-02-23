import { MainNav } from '../main-nav';
import Container from './container';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <>
      <MainNav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
