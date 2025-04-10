//-----------------------------------------1-------------------------------//

// function removeAnogs(words) {
//     const seen = new Set();
//     const result = [];

//     for (let word of words) {
//         const key = word.split('').sort().join('');
//         if (!seen.has(key)) {
//             seen.add(key);
//             result.push(word);
//         }
//     }

//     return result;
// }

// const input = ["olma", "dastur", "kut", "sudrat", "tuk", "mola"];
// console.log(removeAnogs(input));

//-----------------------------------------2------------------------------//

// class Avto {
//   constructor(marka, model, year) {
//     this.marka = marka;
//     this.model = model;
//     this.year = year;
//   }
// }

// class YengilAvto extends Avto {}
// class YukAvto extends Avto {}

// class Garaj {
//   constructor(joylarSoni) {
//     this.joylarSoni = joylarSoni;
//     this.avtolar = [];
//   }

//   joyla(yangiAvto) {
//     if (!(yangiAvto instanceof Avto)) {
//       return "Faqat Avtolar qo'shish mumkin";
//     }

//     if (this.avtolar.length >= this.joylarSoni) {
//       return "Uzr joy to'ldi.";
//     }

//     this.avtolar.push(yangiAvto);
//     return "Avto qo'shildi!";
//   }
// }

// let garage = new Garaj(2);
// console.log(garage.avtolar);
// console.log(garage.joyla(new YengilAvto("Hyundai", "Elantra", 2019)));
// console.log(garage.avtolar);
// console.log(garage.joyla("Moto"));
// console.log(garage.joyla(new YukAvto("Kamaz", "Kamaz77", 2000)));
// console.log(garage.avtolar);
// console.log(garage.joyla(new YengilAvto("GM", "Nexia", 2018)));

//------------------------------3-------------------------------------------//
function odamSoni(array) {
  let sum = 0;
  for (const arr of array) {
    sum += arr[0];
    sum -= arr[1];
    if (sum < 0) {
      return "Odamlar sonidan koproq odam tushishi mumkin emas";
    }
  }
  return sum;
}

console.log(
  odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
