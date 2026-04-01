import _ from "lodash";

export function parseNumbers(input) {
  const wrappedNumbers = _.map(input, (str) => {
    const num = Number(str);
    return Number.isNaN(num) ? null : { value: num };
  });

  return _.map(_.compact(wrappedNumbers), "value");
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}
