import { Product } from "@prisma/client";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../repositories/productsRepository";
import { getSupplierById } from "../repositories/suppliersRepository";

export async function getAllProductsService(): Promise<Product[]> {
  return getAllProducts();
}

export async function getProductByIdService(
  id: number
): Promise<Product | null> {
  return getProductById(id);
}

export async function createProductService(product: Product): Promise<void> {
  const supplier = await getSupplierById(product.supplierId);
  if (!supplier) {
    throw new Error("Supplier not found");
  }
  return createProduct(product);
}

export async function updateProductService(
  id: number,
  product: Product
): Promise<void> {
  const supplier = await getSupplierById(product.supplierId);
  if (!supplier) {
    throw new Error("Supplier not found");
  }
  return updateProduct(id, product);
}

export async function deleteProductService(id: number): Promise<void> {
  return deleteProduct(id);
}
