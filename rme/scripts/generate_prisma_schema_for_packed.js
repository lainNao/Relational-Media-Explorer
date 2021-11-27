const fs = require("fs");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../main/prisma/.env"),
});

const basePath = path.join(__dirname, "../main/prisma");
const prismaSchemaFilePath = path.join(basePath, "schema.prisma");
const generatedPrismaSchemaFilePath = path.join(
  basePath,
  "schema.prisma.forpacked"
);

fs.readFile(prismaSchemaFilePath, "utf8", (err, prismaSchemaText) => {
  if (err) throw err;

  // 環境変数部分を手動適用
  const prismaSchemaTextForPacked = prismaSchemaText.replace(
    `env("DATABASE_URL")`,
    `"file:${
      "../../../../" + //NOTE: ここは固定値でasarより上のディレクトリを指定してしまう…。path.joinだとなぜかinvalidだと怒られるのでひとまずこれ（winならOKなはずひとまず）
      process.env.DATABASE_URL.replace("file:", "")
    }"`
  );

  // スキーマファイル上書き
  fs.writeFileSync(generatedPrismaSchemaFilePath, prismaSchemaTextForPacked, {
    encoding: "utf8",
    flag: "w",
  });
});
