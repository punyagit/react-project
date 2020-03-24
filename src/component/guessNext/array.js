function multipleValue(data, value) {
  let array = data;
  let numberNext = [];
  let count = 0;
  let index = array.indexOf(value);
  let a = 0;
  while (index !== -1) {
    array[index + 1] !== undefined
      ? numberNext.push(array[index + 1])
      : numberNext.push(value);
    count += 1;
    array = array.slice(index + 1, array.length);
    index = array.indexOf(value);
  }
  return numberNext;
}

//multipleValue(data, 1);
module.exports = multipleValue;
