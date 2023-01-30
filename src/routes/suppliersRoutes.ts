import { Router } from "express";
import {
  getSuppliersController,
  getSupplierController,
  addSupplierController,
  updateSupplierController,
  deleteSupplierController,
} from "../controllers/suppliersController";
import { validateSupplier } from "../middlewares/validateSupplier";

const suppliersRouter = Router();

suppliersRouter.get("/", getSuppliersController);
suppliersRouter.get("/:id", getSupplierController);
suppliersRouter.post("/", validateSupplier, addSupplierController);
suppliersRouter.put("/:id", validateSupplier, updateSupplierController);
suppliersRouter.delete("/:id", deleteSupplierController);

export default suppliersRouter;
