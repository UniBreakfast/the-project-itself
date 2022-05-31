module.exports = makeMerge;

function makeMerge(idKey = 'id') {
  return function merge(original, props) {
    if (original == props) {

    } else if (
      Array.isArray(original)
      && Array.isArray(props)
    ) {
      for (const prop of props) {
        if (prop[idKey]) {
          const orig = original.find(o => o[idKey] == prop[idKey]);

          if (orig) {
            merge(orig, prop);
            continue
          }
        }

        original.push(prop);
      }

    } else if (
      original?.constructor == Object
      && props?.constructor == Object
    ) {
      for (const [key, prop] of Object.entries(props)) {
        original[key] = merge(original[key], prop);
      }

    } else {
      return props;
    }

    return original;
  }
}
