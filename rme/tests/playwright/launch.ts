import { _electron as electron, Electron } from "playwright";
import * as path from "path";

export const launch = (args?: Electron["launch"]) => {
  const defaults = {
    args: [path.join(__dirname, "../../out_main/main.js")],
  };

  return electron.launch(Object.assign(defaults, args));
};
