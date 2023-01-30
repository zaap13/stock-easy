import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  price: Joi.number().required(),
  supplierId: Joi.number().integer().required(),
});
