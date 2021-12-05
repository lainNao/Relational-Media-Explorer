import { test } from "@playwright/test";
import { launch } from "../launch";

test("サンプル", async () => {
  // 起動
  const electronApp = await launch();
  const window = await electronApp.firstWindow();

  // 叩く
  const [response] = await Promise.all([
    window.waitForResponse("http://localhost:4321/"),
    window.click("text=click"),
  ]);

  console.log(await response.json());

  // 閉じる
  await electronApp.close();
});
