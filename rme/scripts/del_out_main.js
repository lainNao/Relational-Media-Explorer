const rimraf = require("rimraf");
const path = require("path");

const outMainPath = path.join(__dirname, "../out_main");

rimraf(outMainPath, () => {
  console.log("successfully deleted out_main");
});
