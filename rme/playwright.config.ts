import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // ?
  forbidOnly: !!process.env.CI,

  // リトライ回数は0でいいはず。リトライしたら成功したやつをパスさせるほうが問題
  retries: 0,

  // 実行するテストファイルの正規表現
  testMatch: "**/tests/playwright/**/*.test.ts",

  // expressのポートが競合してエラーになるのを防ぐため、e2eテストの同時起動数は1にする。
  // たぶんIPC通信にしていてworkersを2以上にできたとしても、そもそも同時起動させないつもりだし楽観ロックもやるつもり無いし。
  // そのため、パフォーマンスや本質的にどうなのかという勘tねでは気になるけれども、workersは1で現実的に考えてOKだと思ってる。
  // もし間違いだったら作り直してくれれば…ひとまずこれで…
  workers: 1,

  // 他詳細
  use: {
    locale: "ja-JP",
    ignoreHTTPSErrors: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "on-first-retry",
  },
};

export default config;
