import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import '../styles/ui/Navbar.css';
import { useCart } from '../hooks/useCart';


export const Navbar = () => {
  const { counter } = useCart();

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

        <Button
          variant='outline'
          onClick={() => console.log('Login')}
        >
          <i className='fa-solid fa-user'></i> Iniciar sesión
        </Button>

        <Button
          variant='outline'
          onClick={() => console.log('Register')}
        >
          <i className='fa-solid fa-user-plus'></i> Crear cuenta
        </Button>
      </div>
    </nav>
  );
};