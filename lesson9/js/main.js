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
  