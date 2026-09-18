import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const PublicLayout = () => {
  return (
    <div className='layout-container'>
      <Header />
      
      <main className='main-content'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};