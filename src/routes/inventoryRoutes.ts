import { Router } from "express";
import { updateInventoryController } from "../controllers/inventoryController";

const router = Router();

router.put("/:id", updateInventoryController);

export default router;
