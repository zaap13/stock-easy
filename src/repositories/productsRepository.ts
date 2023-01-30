import { prisma } from "../config/database";
import { Product } from "@prisma/client";

export async function getAllProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany();
  return products;
}

export async function getProductById(id: number): Promise<Product | null> {
  const product = await prisma.product.findFirst({ where: { id } });
  return product;
}

export async function createProduct(product: Product): Promise<void> {
  await prisma.product.create({ data: product });
}

export async function updateProduct(
  id: number,
  product: Product
): Promise<void> {
  await prisma.product.update({
    where: { id },
    data: product,
  });
}

export async function deleteProduct(id: number): Promise<void> {
  await prisma.product.delete({ where: { id } });
}
