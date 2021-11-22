import * as sqlite3 from "sqlite3";

export const db = new sqlite3.Database("db.sqlite", (err: Error | null) => {
  if (err) {
    throw err;
  }
  console.log("");
});
