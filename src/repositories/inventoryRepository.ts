import { prisma } from "../config/database";

export const updateInventoryRepository = async (
  productId: number,
  quantity: number
) => {
  return prisma.inventory.update({
    where: { productId },
    data: { quantity },
  });
};
