
exports.min = function min (array) {
  if (array && array.length > 0) { 
    let minValue = Number.MAX_VALUE;
    for (let i of array) {
      if (i < minValue) {
        minValue = i;
      }
    }
    return minValue;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array && array.length > 0) {
    let maxValue = Number.MIN_VALUE;
    for (let i of array) {
      if (i > maxValue) {
        maxValue = i;
      }
    }
    return maxValue;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array && array.length > 0) {
    let sum = 0;
    for (let i of array) {
      sum += i;
    }
    average = (sum / array.length);
    return average;
  } else {
    return 0;
  }
}