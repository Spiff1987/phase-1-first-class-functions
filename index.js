
function receivesAFunction(aFunction) {
    return aFunction();
}

function returnsANamedFunction() {
    return function namedFunction() {};
}

function returnsAnAnonymousFunction() {
    return (num) => num * 4;
  }