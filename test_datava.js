jsonObj1 = {
  a: 5,
  b: 10,
  c: ['c1', 'c2']
};

function jsonStringify(jsonObj) {
  var keysArr = [];
  var valuesArr = [];
  keysArr = Object.keys(jsonObj);
  console.log(keysArr);
  valuesArr = Object.values(jsonObj);
  console.log(valuesArr);
  jsonResult = [];
  for (let i = 0; i <= keysArr.length - 1; i++) {
    jsonResult.push(`${keysArr[i]}`, `${valuesArr[i]}`);
  }
  console.log('jsonResult: ', jsonResult);
  newObj = {};
  let resultString = '{ ';

  for (let j = 0; j <= jsonResult.length - 1; j = j + 2) {
    resultString = `${resultString}  ${jsonResult[j]} : ${jsonResult[j + 1]} ,`;
  }

  return resultString + '}';
}

console.log(jsonStringify(jsonObj1));
