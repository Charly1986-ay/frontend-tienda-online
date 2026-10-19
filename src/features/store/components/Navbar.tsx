import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import '@/features/store/styles/Navbar.css';
import { useCart } from '@/shared/hooks/useCart';


export const Navbar = () => {
  const { counter } = useCart();
  const navigate = useNavigate();

  return (
    <nav className='navbar-main'>
      <Link to='/' className='navbar-brand'>
        Curated Store
      </Link>

      <div className='search-box'>
        <input type='text' placeholder='Buscar tecnología, herramientas...' />
        <i className='fa-solid fa-magnifying-glass search-icon'></i>
      </div>

      <div className='navbar-actions'>
        <Button
          variant='outline'
          onClick={() => console.log('Abrir carrito')}
          className='cart-btn'
        >
          <i className='fa-solid fa-cart-shopping'></i>
          {counter > 0 && <span className='cart-badge'>{counter}</span>}
        </Button>

        {/* Opción 1: Navegar en el onClick del Button sin <Link> exterior */}
        <Button variant='outline' onClick={() => navigate('/auth/login')}>
          <i className='fa-solid fa-user'></i> Iniciar sesión
        </Button>

        <Button variant='outline' onClick={() => navigate('/auth/register')}>
          <i className='fa-solid fa-user-plus'></i> Crear cuenta
        </Button>
      </div>
    </nav>
  );
};