  // ============================================
  // ARCHIVO: /src/hooks/useDebounce.ts
  // ============================================
  import { useEffect, useState } from 'react';
  
  export const useDebounce = <T,>(value: T, delay: number = 500): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
    useEffect(() => {
      // TODO: Implementar lógica de debounce
      // Pista: usa setTimeout y no olvides el cleanup
    }, [value, delay]);
  
    return debouncedValue;
  };
  
  
