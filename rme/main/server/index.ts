import * as express from "express";
import * as cors from "cors";
// import { db } from "./modules/sqlite3";
import { logger } from "./modules/log4js";

import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get(
  "/",
  async (
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> => {
    logger.error(1);
    logger.error(2);
    try {
      console.log(1);
      const result = await prisma.user.findMany({
        include: { posts: true },
      });
      console.log(2);

      logger.log("query ok2");
      return res.status(200).send(result);
    } catch (e) {
      logger.error("query not ok2", e);
      return res.status(500).send(e);
    }
  }
);

// サーバースタート
export const startServer = () => {
  try {
    const serverPort = 4321;
    app.listen(serverPort, "localhost", () => {
      console.log(`server start on http://localhost:${serverPort}`);
    });
  } catch (error) {
    console.error(`can't start server: ${error}`);
  }
};

if (process.env.RUN_SERVER_FROM_ELECTRON !== "true") {
  startServer();
}
