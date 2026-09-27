import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CartProvider } from '../context/CartContext';

export const PublicLayout = () => {
  return (
    <CartProvider>
      <div className='layout-container'>
        <Header />
        
        <main className='main-content'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};