## コマンド

| 開発用コマンド                      | 説明                                                                                          |
| ----------------------------------- | --------------------------------------------------------------------------------------------- |
| yarn start:withoutserverclientbuild | main だけビルド、その他は localhost でそれぞれ起動し、electron はそれをリッスンする形で start |
| yarn start:withbuild                | 全部ビルドし、electron を start                                                               |

| ビルド用コマンド       | 説明                                   |
| ---------------------- | -------------------------------------- |
| yarn build:noinstaller | インストーラー不要型実行ファイルを作成 |
| yarn build:installer   | インストーラー型実行ファイルを作成     |

| 自動テスト用コマンド  | 説明                                                      |
| --------------------- | --------------------------------------------------------- |
| yarn test:e2e:nobuild | e2e テスト（tests/playwright 配下）。新規でビルドもする   |
| yarn test:e2e         | e2e テスト（tests/playwright 配下）。新規でビルドはしない |
| yarn test:onlyserver  | main/server 以下のサーバーの自動テスト                    |

| 他コマンド                    | 説明 |
| ----------------------------- | ---- |
| yarn start:halfbuild:noclient | 略   |
| yarn start:halfbuild:noserver | 略   |
| yarn inner:build:client       | 略   |
| yarn inner:build:main         | 略   |
| yarn inner:start:client       | 略   |
| yarn inner:start:server       | 略   |

## フォルダ構成

| パス         | 説明                                                        |
| ------------ | ----------------------------------------------------------- |
| client       | cra によるクライアント                                      |
| main         | electron の main。サーバーのコードもここに入っている        |
| main/server  | express による Web サーバー。デフォは`localhost:4321`で動く |
| out_main     | main（サーバー含む） の ts のビルド成果物                   |
| dist         | electron のビルド成果物                                     |
| client/build | cra のビルド成果物                                          |
