// ============================================
// ARCHIVO: /src/components/ProductForm.tsx
// ============================================
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductFormProps {
  onSubmit: (product: Omit<Product, 'id'>) => void;
  onCancel: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ 
  onSubmit, 
  onCancel 
}) => {
  // TODO: Crear un solo estado para el formulario
  // Ejemplo: const [formData, setFormData] = useState({ title: '', price: 0 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Validar que título no esté vacío y precio sea mayor a 0
    // TODO: Llamar a onSubmit con los datos del formulario
  };

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Crear Producto</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título *</label>
            <input 
              type="text"
              // TODO: Conectar con el estado del formulario
            />
          </div>

          <div className="form-group">
            <label>Precio *</label>
            <input 
              type="number"
              step="0.01"
              // TODO: Conectar con el estado del formulario
            />
          </div>

          <div className="form-actions">
            <button type="submit">Crear</button>
            <button type="button" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

