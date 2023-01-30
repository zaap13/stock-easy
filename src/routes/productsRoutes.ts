import { Router } from "express";
import {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/productsController";
import { validateProduct } from "../middlewares/validateProduct";

const productsRouter = Router();

productsRouter.get("/", getProductsController);
productsRouter.get("/:id", getProductController);
productsRouter.post("/", validateProduct, createProductController);
productsRouter.put("/:id", validateProduct, updateProductController);
productsRouter.delete("/:id", deleteProductController);

export default productsRouter;
