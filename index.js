function locate(array, target) {
  let flattenArray = [].concat.apply([], array);
  let flattenMore = [].concat.apply([], flattenArray);
  return flattenMore.includes(target);
}
module.exports = locate;

