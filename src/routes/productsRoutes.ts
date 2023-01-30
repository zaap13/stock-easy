import { Router } from "express";
import {
  getAllProductsController,
  getSingleProductController,
  createNewProductController,
  updateExistingProductController,
  deleteProductFromDBController,
} from "../controllers/productsController";
import { validateProduct } from "../middlewares/validateProduct";

const productsRouter = Router();

productsRouter.get("/", getAllProductsController);
productsRouter.get("/:id", getSingleProductController);
productsRouter.post("/", validateProduct, createNewProductController);
productsRouter.put("/:id", validateProduct, updateExistingProductController);
productsRouter.delete("/:id", deleteProductFromDBController);

export default productsRouter;
