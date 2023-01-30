import { Request, Response, NextFunction } from "express";
import { productSchema } from "../schemas/productSchema";

export function validateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validationResult = productSchema.validate(req.body, { abortEarly: false });
  if (validationResult.error) {
    res.status(400).send({ message: validationResult.error.message });
    return;
  }
  next();
}
