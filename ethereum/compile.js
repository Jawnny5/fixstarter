const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

//provide output path for build, destroy current directory @ compile time.
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

//provide contract path
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf-8");
const output = solc.compile(source, 1).contracts;

//build output path @ compile
fs.ensureDirSync(buildPath);

//loop over returned object, pull contract file name, concatenate .json file extension
for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
