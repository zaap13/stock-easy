import { Request, Response } from "express";
import { Product } from "@prisma/client";
import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
} from "../services/productsService";

export async function getAllProductsController(
  req: Request,
  res: Response
): Promise<void> {
  const products = await getAllProductsService();
  res.send(products);
}

export async function getSingleProductController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.params;
  const product = await getProductByIdService(Number(id));
  if (!product) {
    res.status(404).send({ message: "Product not found" });
    return;
  }
  res.send(product);
}

export async function createNewProductController(
  req: Request,
  res: Response
): Promise<void> {
  const newProduct = req.body as Product;
  await createProductService(newProduct);
  res.send({ message: "Product created" });
}

export async function updateExistingProductController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.params;
  const updatedProduct = req.body as Product;
  await updateProductService(Number(id), updatedProduct);
  res.send({ message: "Product updated" });
}

export async function deleteProductFromDBController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.params;
  await deleteProductService(Number(id));
  res.send({ message: "Product deleted" });
}
