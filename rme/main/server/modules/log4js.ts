import * as log4js from "log4js";
import * as path from "path";
import { LOG_FILE_PATH } from "../consts";

log4js.configure({
  appenders: {
    // コンソールログ
    consoleLog: {
      type: "console",
    },
    // ファイルログ
    systemLog: {
      type: "file",
      filename: path.join(LOG_FILE_PATH),
      maxLogSize: 5000000, // 5MB
      backups: 5, // 世代管理は5ファイルまで、古いやつgzで圧縮されていく
      compress: true,
      layout: { type: "pattern", pattern: "%d %p %c %f:%l %m%n" }, //行数とか出す
    },
  },
  categories: {
    default: {
      // コンソールログは全部
      appenders: ["consoleLog"],
      level: "ALL",
    },
    system: {
      // ファイルログはERROR以上
      appenders: ["systemLog"],
      level: "ERROR",
    },
  },
});
let logger = log4js.getLogger("system");
logger.level = "info";

export { logger };
