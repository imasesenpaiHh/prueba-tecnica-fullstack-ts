 // ============================================
  // ARCHIVO: /src/services/api.ts
  // ============================================
  import { Product } from '../types';
  
  const BASE_URL = 'https://fakestoreapi.com';
  
  export const getProducts = async (): Promise<Product[]> => {
    // TODO: Implementar GET
    // Maneja errores con try/catch
    return [];
  };
  
  export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
    // TODO: Implementar POST
    return {} as Product;
  };
  
  export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
    // TODO: Implementar PUT
    return {} as Product;
  };
  
  export const deleteProduct = async (id: number): Promise<void> => {
    // TODO: Implementar DELETE
  };
  