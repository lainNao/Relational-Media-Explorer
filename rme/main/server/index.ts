import * as express from "express";
import * as cors from "cors";
import { db } from "./modules/sqlite3";
import { logger } from "./modules/log4js";

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
    try {
      const result = await getAllUsers();
      logger.log("query ok");
      return res.status(200).send(result);
    } catch (e) {
      logger.error("query not ok", e);
      return res.status(500).send(e);
    }
  }
);

const getAllUsers = () =>
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", (err: Error | null, rows: any[]) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });

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

startServer();
