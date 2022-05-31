module.exports = getObj;

const merge = require('./merge.js');

function getObj(id = '', props = {}) {
  if (!getObj.registry) getObj.registry = {};

  const original = getObj.registry[id] || {};

  return getObj.registry[id] = merge(original, props);
}
