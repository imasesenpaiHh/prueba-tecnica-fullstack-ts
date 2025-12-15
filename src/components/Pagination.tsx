// ============================================
// ARCHIVO: /src/components/Pagination.tsx
// ============================================
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  return (
    <div className="pagination">
      {/* TODO: Implementar botones Anterior/Siguiente */}
      {/* TODO: Mostrar "Página X de Y" */}
    </div>
  );
};