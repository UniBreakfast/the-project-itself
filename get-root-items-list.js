module.exports = getRootItemsList;

const { readdir } = require('fs/promises');

async function getRootItemsList() {
  return readdir('./');
}
