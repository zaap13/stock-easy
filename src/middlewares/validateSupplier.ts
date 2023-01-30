import { Request, Response, NextFunction } from "express";
import { supplierSchema } from "../schemas/supplierSchema";

export function validateSupplier(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validationResult = supplierSchema.validate(req.body, {
    abortEarly: false,
  });
  if (validationResult.error) {
    res.status(400).send({ message: validationResult.error.message });
    return;
  }
  next();
}
