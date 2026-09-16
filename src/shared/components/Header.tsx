import { AnnouncementBar, type AnnouncementItem } from './AnnouncementBar'

export const Header = () => {
  // Estos datos podrían venir perfectamente de una base de datos o un JSON en el futuro
  const promotions: AnnouncementItem[] = [
    { id: 1, text: 'Descuentos Tech (-20%)', to: '/discounts' },
    { id: 2, text: 'Kit Camping Outdoor', to: '/camping' },
    { id: 3, text: 'Envíos Gratis a Todo el País', to: '/Shipping' },
  ];

  return (
    <header>
      {/* Navbar Principal */}
      <nav className='navbar-main'>
        <div className='navbar-brand'>Curated Store</div>
        <div className='search-box'>
          <input type='text' placeholder='Buscar tecnología, herramientas...' />
          <span style={{ color: 'var(--color-charcoal)', fontSize: '0.85rem' }}>🔍</span>
        </div>
      </nav>

      {/* Sub-barra de Anuncios */}
      <AnnouncementBar items={ promotions }/>
    </header>
  )
}