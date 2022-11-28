// see this article about pipe and compose: https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937
const pipe = (...fns) => (value) =>
  fns.reduce(
    (currentValue, currentFn) => currentFn(currentValue),
    value
  );

module.exports = pipe;