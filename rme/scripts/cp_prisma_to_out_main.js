const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../main/prisma/.env"),
});

const relDirPath = "/prisma/generated";
const srcDir = path.join(__dirname, "../main", relDirPath);
const destDir = path.join(__dirname, "../out_main", relDirPath);

fse.copySync(srcDir, destDir, { overwrite: true }, (err) => {
  if (err) throw err;

  console.log("successed to copy");
});

// dbは空ファイルに置き換える
const outDbFilePath = path.join(
  __dirname,
  "../out_main/prisma",
  process.env.DATABASE_URL.replace("file:", "")
);
fs.writeFileSync(outDbFilePath, "", {
  encoding: "utf8",
  flag: "w",
});
