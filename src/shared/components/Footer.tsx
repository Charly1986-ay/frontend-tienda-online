export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p>© {anioActual} Curated Store. Todos los derechos reservados.</p>
    </footer>
  );
};