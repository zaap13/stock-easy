import { Supplier } from "@prisma/client";
import {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "../repositories/suppliersRepository";

export async function getAllSuppliersService(): Promise<Supplier[]> {
  return getAllSuppliers();
}

export async function getSupplierByIdService(
  id: number
): Promise<Supplier | null> {
  return getSupplierById(id);
}

export async function createSupplierService(supplier: Supplier): Promise<void> {
  return createSupplier(supplier);
}

export async function updateSupplierService(
  id: number,
  supplier: Supplier
): Promise<void> {
  return updateSupplier(id, supplier);
}

export async function deleteSupplierService(id: number): Promise<void> {
  return deleteSupplier(id);
}
