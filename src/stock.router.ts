import express from "express";
import {
  getAllStock,
  addStock,
  removeStock,
  updateStock,
  getStock,
} from "./stock.controller";
import { validateStock } from "./stock.middleware";

const router = express.Router();

router.get("/", getAllStock);
router.get("/:id", getStock);
router.post("/", validateStock, addStock);
router.delete("/:id", removeStock);
router.put("/:id", updateStock);

export default router;
