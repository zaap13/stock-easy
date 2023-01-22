import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const stockSchema = Joi.object({
  name: Joi.string().required(),
  amount: Joi.number().required(),
});

export const validateStock = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = stockSchema.validate(req.body);
  if (error) {
    const err = error.details.map((d) => d.message);
    console.log(err);
    return res.status(400).send(err);
  }
  next();
};
