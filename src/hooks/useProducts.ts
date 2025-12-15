  // ============================================
  // ARCHIVO: /src/hooks/useProducts.ts
  // ============================================
  import { useState, useEffect } from 'react';
  import { Product } from '../types';
  import { getProducts } from '../services/api';
  
  export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
  
    // TODO: Implementar la lógica de fetch, filtrado y paginación
    // Recuerda que este hook debe encapsular TODA la lógica
  
    useEffect(() => {
      // TODO: Fetch products
    }, []);
  
    return {
      products,
      loading,
      error,
      searchQuery,
      setSearchQuery,
      currentPage,
      setCurrentPage
    };
  };