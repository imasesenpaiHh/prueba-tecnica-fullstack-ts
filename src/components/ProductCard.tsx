  // ============================================
  // ARCHIVO: /src/components/ProductCard.tsx
  // ============================================
  import React from 'react';
  import { Product } from '../types';
  import { useCart } from '../context/CartContext';
  
  interface ProductCardProps {
    product: Product;
    onEdit?: (product: Product) => void;
    onDelete?: (id: number) => void;
  }
  
  export const ProductCard: React.FC<ProductCardProps> = ({ 
    product, 
    onEdit, 
    onDelete 
  }) => {
    const { addToCart } = useCart();
  
    return (
      <div className="product-card">
        {/* TODO: Mostrar imagen, título, precio */}
        {/* TODO: Botón "Agregar al carrito" */}
        {/* TODO: Botones "Editar" y "Eliminar" si se proporcionan los handlers */}
      </div>
    );
  };
  