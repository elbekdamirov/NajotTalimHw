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

// function move(array, fromIndex, toIndex) {
//   const len = array.length;
//   fromIndex = ((fromIndex % len) + len) % len;
//   toIndex = ((toIndex % len) + len) % len;

//   const [item] = array.splice(fromIndex, 1);
//   array.splice(toIndex, 0, item);

//   return array;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));
// console.log(move([10, 20, 30, 40, 50], -1, -2));

//---------------------------------3--x--------------------------------//
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
// const text =
//   "Berilgan matn ichidagi barcha so'zlarni uzunligi bo'yicha teskari tartibda tartiblab chiqaring";

// const sortedWords = text.split(" ").sort((a, b) => b.length - a.length).join(" ");

// console.log(sortedWords);

//----------------------------------100 balli---------------------------------//
// const arr = [4, 8, 15, 16, 23, 42];
// let sum = 0;
// let average;
// let minDiff = Infinity;
// let closest;

// for (const element of arr) {
//   sum += element;
// }
// average = sum / arr.length;

// for (let i = 0; i < arr.length; i++) {
//   let diff = Math.abs(average - arr[i]);
//   if (diff < minDiff) {
//     minDiff = diff;
//     closest = i;
//   }
// }
// let small = arr.slice(0, closest);
// let large = arr.slice(closest);

// console.log(average);
// console.log("Small: ", small);
// console.log("Large: ", large);
