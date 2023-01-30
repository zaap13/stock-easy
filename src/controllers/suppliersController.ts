import { Request, Response } from "express";
import { Supplier } from "@prisma/client";
import {
  getAllSuppliersService,
  getSupplierByIdService,
  createSupplierService,
  updateSupplierService,
  deleteSupplierService,
} from "../services/suppliersService";

export async function getSuppliersController(
  req: Request,
  res: Response
): Promise<void> {
  const suppliers = await getAllSuppliersService();
  res.send(suppliers);
}

export async function getSupplierController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.params;
  const supplier = await getSupplierByIdService(Number(id));
  if (!supplier) {
    res.status(404).send({ message: "Supplier not found" });
    return;
  }
  res.send(supplier);
}

export async function addSupplierController(
  req: Request,
  res: Response
): Promise<void> {
  const newSupplier = req.body as Supplier;
  await createSupplierService(newSupplier);
  res.send({ message: "Supplier created" });
}

export async function updateSupplierController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.params;
  const updatedSupplier = req.body as Supplier;
  await updateSupplierService(Number(id), updatedSupplier);
  res.send({ message: "Supplier updated" });
}

export async function deleteSupplierController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.params;
  await deleteSupplierService(Number(id));
  res.send({ message: "Supplier deleted" });
}
