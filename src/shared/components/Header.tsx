import { AnnouncementBar, type AnnouncementItem } from './AnnouncementBar'
import '../styles/components/Header.css';
import { Navbar } from './Navbar';


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
      <Navbar />

      {/* Sub-barra de Anuncios */}
      <AnnouncementBar items={ promotions }/>
    </header>
  )
}