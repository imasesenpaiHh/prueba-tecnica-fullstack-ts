// ============================================
// ARCHIVO: /src/App.tsx
// ============================================
import React, { useState, useEffect } from 'react';
import { Product } from './types';
import { ProductList } from './components/ProductList';
import { ProductForm } from './components/ProductForm';
import './App.css';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  // TODO: NIVEL 1 - Fetch inicial de productos
  useEffect(() => {
    // Implementar fetch de https://fakestoreapi.com/products
    // Manejar loading y error states
  }, []);

  // TODO: NIVEL 2 - Debounce para búsqueda
  // Implementar useEffect con setTimeout y cleanup
  // Este useEffect debe depender de searchQuery

  // TODO: NIVEL 2 - Función para crear producto
  const handleCreateProduct = async (productData: Omit<Product, 'id'>) => {
    // Hacer POST a https://fakestoreapi.com/products
    // Agregar el producto a la lista existente
    // Cerrar el modal
  };

  // TODO: NIVEL 3 (BONUS) - Lógica de paginación
  // Puedes usar estos estados si decides implementar paginación:
  // const [currentPage, setCurrentPage] = useState(1);
  // const PRODUCTS_PER_PAGE = 6;

  // Filtrado de productos (NIVEL 2)
  const filteredProducts = products; // TODO: Implementar filtro basado en searchQuery

  return (
    <div className="App">
      <header>
        <h1>🛍️ Catálogo de Productos</h1>
      </header>

      <div className="controls">
        {/* TODO: NIVEL 2 - Input de búsqueda */}
        <input
          type="text"
          placeholder="Buscar productos..."
          className="search-input"
          // Conectar con searchQuery
        />

        <button onClick={() => setShowForm(true)} className="btn-create">
          ➕ Crear Producto
        </button>
      </div>

      <main>
        <ProductList
          products={filteredProducts}
          loading={loading}
          error={error}
        />

        {/* TODO: NIVEL 3 (BONUS) - Componente de paginación */}
      </main>

      {showForm && (
        <ProductForm
          onSubmit={handleCreateProduct}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default App;

