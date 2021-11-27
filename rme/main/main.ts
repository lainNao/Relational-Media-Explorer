import { app, BrowserWindow } from "electron";
import * as path from "path";
import { startServer } from "./server";

const loadClient = () => {
  // ウィンドウ作成
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {},
  });

  // 「npm run start:localhost」したらlocalhost:3000を開く
  // そうでないならビルドしたファイルを開く
  if (process.env.NO_CLIENT === "true") {
    win.loadURL("http://localhost:3000");
  } else {
    const indexFilePath = path.join(__dirname, "../client/build/index.html");
    win.loadFile(indexFilePath);
  }
};

// アプリケーションが起動したら発火
app.whenReady().then(() => {
  // クライアントを開く
  loadClient();

  // サーバーを起動
  if (process.env.RUN_SERVER_FROM_ELECTRON === "true") {
    startServer();
  }

  // アクティベートしてもクライアントが開いてない場合はクライアントを開く
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      loadClient();
    }
  });
});

// 全ウィンドウが閉じられたら発火
app.on("window-all-closed", () => {
  // macなら明示的にquitする
  if (process.platform !== "darwin") {
    app.quit();
  }
});
