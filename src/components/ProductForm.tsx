// ============================================
// ARCHIVO: /src/components/ProductForm.tsx
// ============================================
import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';

interface ProductFormProps {
  product?: Product; // Si viene, es edición; si no, es creación
  onSubmit: (product: Omit<Product, 'id'>) => void;
  onCancel: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ 
  product, 
  onSubmit, 
  onCancel 
}) => {
  // TODO: Crear un solo estado para el formulario (objeto)
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // TODO: Hacer focus en el input del título cuando se monta
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Validar y llamar onSubmit
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Inputs para título, precio, descripción, categoría */}
      {/* TODO: Usar ref en el input del título */}
      <button type="submit">
        {product ? 'Actualizar' : 'Crear'}
      </button>
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
};