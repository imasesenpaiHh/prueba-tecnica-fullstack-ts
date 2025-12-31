// ============================================
// ARCHIVO: /src/components/ProductList.tsx
// ============================================
import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
  loading: boolean;
  error?: string | null;
}

export const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  loading,
  error 
}) => {
  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No se encontraron productos</div>;
  }

  return (
    <div className="product-grid">
      {/* TODO: Mapear products y renderizar ProductCard para cada uno */}
    </div>
  );
};

