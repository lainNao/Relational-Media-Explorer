import { test } from "@playwright/test";
import { launch } from "../launch";

test("起動できる", async () => {
  // 起動
  const electronApp = await launch();
  await electronApp.firstWindow();

  // 閉じる
  await electronApp.close();
});
