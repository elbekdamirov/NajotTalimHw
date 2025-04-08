//--------------------------------1---------------------------------------------//

// function calculateWorkingHours(start, end) {
//   let [startHour, startMinute] = start.split(":").map(Number);
//   let [endHour, endMinute] = end.split(":").map(Number);

//   let startTotalMinutes = startHour * 60 + startMinute;
//   let endTotalMinutes = endHour * 60 + endMinute;

//   if (endTotalMinutes < startTotalMinutes) {
//     return "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas";
//   }

//   let totalMinutesWorked = endTotalMinutes - startTotalMinutes;
//   let workedHours = Math.floor(totalMinutesWorked / 60);
//   let workedMinutes = totalMinutesWorked % 60;

//   return `Ish vaqti: ${workedHours} soat ${workedMinutes} daqiqa`;
// }

// console.log(calculateWorkingHours("09:00", "17:30"));
// console.log(calculateWorkingHours("10:00", "09:00"));

//-------------------------------2-----------------------------------------------//

// function bankIshKuni(ishKunlari) {
//   let sana = new Date();
//   let count = 0;

//   while (count < ishKunlari) {
//     sana.setDate(sana.getDate() + 1);
//     let haftaKuni = sana.getDay();
//     if (haftaKuni !== 0 && haftaKuni !== 6) {
//       count++;
//     }
//   }

//   return sana.toLocaleDateString();
// }

// let ishKunlari = 60;
// console.log(bankIshKuni(ishKunlari));

//-------------------------------3-------------------------------------//
// function findCommonPairs(obj1, obj2) {
//   if (
//     typeof obj1 !== "object" ||
//     typeof obj2 !== "object" ||
//     obj1 === null ||
//     obj2 === null
//   ) {
//     return obj1 === obj2 ? obj1 : undefined;
//   }

//   let common = {}

//   for (let key in obj1) {
//     if (key in obj2) {
//       let commonValue = findCommonPairs(obj1[key], obj2[key]);
//       if (commonValue !== undefined) {
//         common[key] = commonValue;
//       }
//     }
//   }

//   return Object.keys(common).length > 0 ? common : undefined;
// }

// const jsonData1 = {
//   user: {
//     name: "Ali",
//     age: 25,
//     address: {
//       city: "Tashkent",
//       zip: "100000",
//     },
//   },
//   active: true,
// };

// const jsonData2 = {
//   user: {
//     name: "Ali",
//     age: 30,
//     address: {
//       city: "Tashkent",
//       zip: "200000",
//     },
//   },
//   active: true,
// };

// console.log(findCommonPairs(jsonData1, jsonData2));
