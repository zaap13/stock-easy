import { Request, Response } from "express";
import { updateInventoryService } from "../services/inventoryService";

export const updateInventoryController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    await updateInventoryService(Number(id), quantity);
    return res.status(200).send({ message: "Inventory updated successfully" });
  } catch (error) {
    return res.status(400).send(error);
  }
};
