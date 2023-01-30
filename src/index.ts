import express, { Request, Response } from "express";
import cors from "cors";

import productsRoutes from "./routes/productsRoutes";
import suppliersRoutes from "./routes/suppliersRoutes";

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/products", productsRoutes)
  .use("/suppliers", suppliersRoutes)
  .get("/health", (req: Request, res: Response) => res.send("OK"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
