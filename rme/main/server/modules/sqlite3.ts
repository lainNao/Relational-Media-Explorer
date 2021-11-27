import * as sqlite3 from "sqlite3";

//TODO db.sqliteは環境変数化。しかも./db.sqliteじゃなく、prisma/.envに書かれてるパスと合うようにする
export const db = new sqlite3.Database("db.sqlite", (err: Error | null) => {
  if (err) {
    throw err;
  }
  console.log("");
});
