// see this article about compose: https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937
const compose = (...fns) =>
  fns.reduceRight(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    (value) => value
  );

module.exports = compose;