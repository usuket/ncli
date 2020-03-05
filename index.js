#! /usr/bin/env node
const fs = require("fs");
const path = require("path");

const fullPath = path.dirname(require.main.filename);
const packegePath = path.join(fullPath,"/package.json");
const packageJson = JSON.parse(fs.readFileSync(packegePath));

function main() {
  console.info("hello", packageJson.version, packegePath);
}

main();