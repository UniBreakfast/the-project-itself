module.exports = listTopLevelFunctionsInAFile;

const { readFile } = require('fs/promises');
const { createContext, Script } = require('vm');


async function listTopLevelFunctionsInAFile(path) {
  const sandbox = { module: {}, require() { } };
  const context = createContext(sandbox);
  const code = await readFile(path, 'utf8');
  const script = new Script(code);

  script.runInContext(context);

  delete sandbox.module;
  delete sandbox.require;

  const topLevelFunctions = Object.entries(sandbox)
    .filter(([_, value]) => typeof value == 'function')
    .map(([name]) => name);

  return topLevelFunctions;
}
