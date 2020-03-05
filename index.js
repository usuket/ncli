#! /usr/bin/env node
const fs = require("fs");
const path = require("path");

const fullPath = path.dirname(require.main.filename);
const packegePath = path.join(fullPath, "/package.json");
const packageJson = JSON.parse(fs.readFileSync(packegePath));

// If argv is fileName -> fs.createReadStream(packegePath)
// No argv -> process.stdout

const readline = require('readline');
const rl = readline.createInterface({
  input: fs.createReadStream(packegePath),
  output: process.stdout,
  terminal: false
});

let number = 0;
rl.on('line', function (line) {
  console.log(number, line);
  number++;
});

rl.on("close", function () {
  console.info("done")
});