const deepFind = (obj, path) => {
  if (!obj) {
    return null;
  }
  var paths = path.split(".");
  var current = obj;
  for (var i = 0; i < paths.length; ++i) {
    if (!!current[paths[i]]) {
      current = current[paths[i]];
    } else {
      return undefined;
    }
  }
  return current;
};

module.exports = deepFind;