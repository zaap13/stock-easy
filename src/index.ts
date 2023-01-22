import express, { Request, Response } from "express";
import cors from "cors";

import stockRouter from "./stock.router";


const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (req: Request, res: Response) => res.send("OK"))
  .use("/stock", stockRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
