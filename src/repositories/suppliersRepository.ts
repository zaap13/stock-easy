import { prisma } from "../config/database";
import { Supplier } from "@prisma/client";

export async function getAllSuppliers(): Promise<Supplier[]> {
  const suppliers = await prisma.supplier.findMany();
  return suppliers;
}

export async function getSupplierById(id: number): Promise<Supplier | null> {
  const supplier = await prisma.supplier.findFirst({ where: { id } });
  return supplier;
}

export async function createSupplier(supplier: Supplier): Promise<void> {
  await prisma.supplier.create({ data: supplier });
}

export async function updateSupplier(
  id: number,
  supplier: Supplier
): Promise<void> {
  await prisma.supplier.update({
    where: { id },
    data: supplier,
  });
}

export async function deleteSupplier(id: number): Promise<void> {
  await prisma.supplier.delete({ where: { id } });
}
