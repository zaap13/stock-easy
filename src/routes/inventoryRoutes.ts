import { Router } from "express";
import { updateInventoryController } from "../controllers/inventoryController";

const inventoryRouter = Router();

inventoryRouter.put("/:id", updateInventoryController);

export default inventoryRouter;
