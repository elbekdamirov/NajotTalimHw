//-------------------------------1---------------------------------//
// function difference(arr1, arr2) {
//   let flatArr1 = arr1.flat(Infinity).map(String);
//   let flatArr2 = arr2.flat(Infinity).map(String);

//   let uniqueElements = [];

//   for (let i of flatArr1) {
//     if (!flatArr2.includes(i)) {
//       uniqueElements.push(i);
//     }
//   }

//   for (let i of flatArr2) {
//     if (!flatArr1.includes(i)) {
//       uniqueElements.push(i);
//     }
//   }

//   return uniqueElements;
// }

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

//---------------------------------2----------------------------------//

//---------------------------------3----------------------------------//
// function getUniqueValues(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5]));

//----------------------------------4---------------------------------//

