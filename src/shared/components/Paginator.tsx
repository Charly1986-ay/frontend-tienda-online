interface Props {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
}

export const Paginator = ({ page, pages, onPageChange }: Props) => {
  return (
    <div className='pagination-controls'>
        <button
          disabled={page === 1}
          onClick={() => onPageChange((page || 1) - 1)}
        >
          Anterior
        </button>
        <span>Página {page} de {pages}</span>
        <button
          disabled={page === pages}
          onClick={() => onPageChange((page || 1) + 1)}
        >
          Siguiente
        </button>
      </div>
  );
}