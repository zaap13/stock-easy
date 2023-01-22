import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import stockRouter from "./stock.router";

const currentEnvs = dotenv.config();
dotenvExpand.expand(currentEnvs);

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
