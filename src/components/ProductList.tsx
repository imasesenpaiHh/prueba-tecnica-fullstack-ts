// ============================================
  // ARCHIVO: /src/components/ProductList.tsx
  // ============================================
  import React from 'react';
  import { Product } from '../types';
  import { ProductCard } from './ProductCard';
  
  interface ProductListProps {
    products: Product[];
    loading: boolean;
    onEdit?: (product: Product) => void;
    onDelete?: (id: number) => void;
  }
  
  export const ProductList: React.FC<ProductListProps> = ({ 
    products, 
    loading,
    onEdit,
    onDelete 
  }) => {
    if (loading) {
      return <div>Cargando productos...</div>;
    }
  
    if (products.length === 0) {
      return <div>No se encontraron productos</div>;
    }
  
    return (
      <div className="product-grid">
        {/* TODO: Mapear products y renderizar ProductCard */}
      </div>
    );
  };