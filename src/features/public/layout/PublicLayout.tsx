import { Outlet } from 'react-router-dom';
import { CustomerHeader } from '@/features/public/components/CustomerHeader';
import { CustomerFooter } from '@/features/public/components/CustomerFooter';
import { CartProvider } from '@/shared/context/CartContext';

export const PublicLayout = () => {
  return (
    <CartProvider>
      <div className='layout-container'>
        <CustomerHeader />
        
        <main className='main-content'>
          <Outlet />
        </main>

        <CustomerFooter />
      </div>
    </CartProvider>
  );
};