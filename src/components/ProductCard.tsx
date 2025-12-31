// ============================================
// ARCHIVO: /src/components/ProductCard.tsx
// ============================================
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      {/* TODO: Mostrar imagen, título y precio del producto */}
    </div>
  );
};

