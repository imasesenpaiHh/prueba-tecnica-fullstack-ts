  // ============================================
  // ARCHIVO: /src/context/CartContext.tsx
  // ============================================
  import { createContext, useContext, useState, ReactNode } from 'react';
  import { Product, CartItem } from '../types';
  
  interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    totalItems: number;
  }
  
  const CartContext = createContext<CartContextType | undefined>(undefined);
  
  export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
  
    const addToCart = (product: Product) => {
      // TODO: Implementar lógica para agregar al carrito
      // Si ya existe, aumentar cantidad
      // Si no existe, agregarlo con cantidad 1
    };
  
    const removeFromCart = (productId: number) => {
      // TODO: Implementar lógica para remover del carrito
    };
  
    const clearCart = () => {
      setItems([]);
    };
  
    const totalItems = 0; // TODO: Calcular total de items
  
    return (
      <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalItems }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart debe usarse dentro de CartProvider');
    }
    return context;
  };
  
  
 