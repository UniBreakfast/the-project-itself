module.exports = main;

const stayRunning = require('./stay-running.js');
const getRootItemsList = require('./get-root-items-list.js');
const listTopLevelFunctionsInAFile = require('./list-top-level-funcs-in-file.js');

async function main() {
  const rootItemsList = await getRootItemsList();
  const topLevelFunctions = await listTopLevelFunctionsInAFile('main.js');

  console.log(rootItemsList);
  console.log(topLevelFunctions);


  stayRunning();
}
