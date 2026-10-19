import { Outlet } from 'react-router-dom';
import { CustomerHeader } from '@/features/store/components/CustomerHeader';
import { CustomerFooter } from '@/features/store/components/CustomerFooter';
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