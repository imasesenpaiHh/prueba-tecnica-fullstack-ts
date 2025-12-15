
  // ============================================
  // ARCHIVO: /src/components/SearchBar.tsx
  // ============================================
  import React from 'react';
  
  interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    // TODO: Implementar el input con debounce
    return (
      <div>
        <input 
          type="text"
          placeholder="Buscar productos..."
          // Completa el onChange
        />
      </div>
    );
  };
  
  

  
  