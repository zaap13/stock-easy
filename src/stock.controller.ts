import { Request, Response } from "express";
import { getAll, add, remove, update, getOne } from "./stock.repository";

export const getAllStock = async (req: Request, res: Response) => {
  try {
    const stocks = await getAll();
    return res.send(stocks);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

export const getStock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const stock = await getOne(Number(id));
    return res.send(stock);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

export const addStock = async (req: Request, res: Response) => {
  try {
    const { name, amount } = req.body;
    await add(name, amount);
    return res.status(201).send();
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

export const removeStock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await remove(Number(id));
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

export const updateStock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, amount } = req.body;
    await update(Number(id), name, amount);
    return res.status(200).send();
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};
