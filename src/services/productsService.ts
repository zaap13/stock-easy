import { Product } from "@prisma/client";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../repositories/productsRepository";

export async function getAllProductsService(): Promise<Product[]> {
  return getAllProducts();
}

export async function getProductByIdService(
  id: number
): Promise<Product | null> {
  return getProductById(id);
}

export async function createProductService(product: Product): Promise<void> {
  return createProduct(product);
}

export async function updateProductService(
  id: number,
  product: Product
): Promise<void> {
  return updateProduct(id, product);
}

export async function deleteProductService(id: number): Promise<void> {
  return deleteProduct(id);
}
