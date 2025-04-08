// -----------------------1------------------------//

// function truncate (str, maxlength) {
//     if(str.length > maxlength ){
//         return str.slice(0, maxlength - 3) + "...";
//     }
//     return str;
// }

// console.log(
//   truncate("Berilgan matn uzunligini tekshiruvchi truncate funksiyasini yozing", 20)
// );

//-----------------------2---------------------------//

// function randInt(start, end) {
//   return Math.floor(Math.random() * (end - start + 1)) + start;
// }
// console.log(randInt(5, 90));

//-----------------------3--------------------------//
// function select(str1, str2) {
//   let result = "";

//   for (let i = 0; i < str1.length; i++) {
//     if (!str2.includes(str1[i])) {
//       result += str1[i];
//     }
//   }

//   for (let i = 0; i < str2.length; i++) {
//     if (!str1.includes(str2[i])) {
//       result += str2[i];
//     }
//   }

//   return result;
// }
// console.log(select("Salom", "Kalom"));

//-----------------------4----------------------------//
// const countLetter = (str) => {
//   let freq = {};
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char !== " ") {
//       freq[char] = (freq[char] || 0) + 1;
//     }
//   }

//   let first = true;

//   for (let char in freq) {
//     if (!first) {
//       result += ", ";
//     }
//     result += char;

//     for (let i = 0; i < freq[char]; i++) {
//       result += "*";
//     }

//     first = false;
//   }

//   return result;
// };

// console.log(countLetter("NAJOT TA'LIM"));

//------------------------ 100 balli ------------------//

// const numbers = [12, 34, 556, 67, 23, 1456, 100];

// function findSum(num) {
//   let sum = 0;

//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }

//   return sum;
// }

// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (findSum(numbers[i]) > findSum(numbers[j])) {
//       [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
//     }
//   }
// }

// console.log(numbers);
