import { Link } from 'react-router-dom';

// Definimos la estructura de cada anuncio individual
export interface AnnouncementItem {
  id: string | number;
  text: string;
  to: string;
}

// Definimos las props que recibirá el componente completo
interface AnnouncementBarProps {
  title?: string; // Opcional, por si quieres cambiar el texto "⚡ Ofertas de Temporada"
  items: AnnouncementItem[];
}

export const AnnouncementBar = ({ title = "⚡ Ofertas de Temporada", items }: AnnouncementBarProps) => {
  return (
    <nav className="announcement-bar">
      <span>{title}</span>
      {items.map((item) => (
        <Link key={item.id} to={item.to}>
          {item.text}
        </Link>
      ))}
    </nav>
  );
};