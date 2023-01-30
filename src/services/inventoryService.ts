import { updateInventoryRepository } from "../repositories/inventoryRepository";

export const updateInventoryService = async (id: number, quantity: number) => {
  const inventory = await updateInventoryRepository(id, quantity);
  if (!inventory) {
    throw new Error("Product not found");
  }
};
