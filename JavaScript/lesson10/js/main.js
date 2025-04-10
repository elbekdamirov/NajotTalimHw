//-----------------------------------------------------1------------------------------------------//

// class Product {
//   static productCount = 0;
//   static totalPriceValue = 0;

//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     Product.productCount++;
//     Product.totalPriceValue += price;
//   }

//   totalPrice() {
//     console.log(
//       `Jami mahsulotlarning umumiy narxi: ${Product.totalPriceValue}`
//     );
//   }
// }

// class CareProduct extends Product {
//   constructor(id, name, price, warrantyPeriod) {
//     super(id, name, price);
//     this.warrantyPeriod = warrantyPeriod;
//   }

//   totalPrice() {
//     let discountedPrice = this.price;

//     switch (this.warrantyPeriod) {
//       case 1:
//         discountedPrice *= 0.5;
//         break;
//       case 2:
//         discountedPrice *= 0.6;
//         break;
//       case 3:
//         discountedPrice *= 0.7;
//         break;
//       case 4:
//         discountedPrice *= 0.8;
//         break;
//       case 5:
//         discountedPrice *= 0.9;
//         break;
//       default:
//         console.log("Kafolat muddati tugagan.");
//         return;
//     }

//     console.log(
//       `${this.name} mahsuloti (Kafolat muddati: ${this.warrantyPeriod} kun) chegirmali narxi: ${discountedPrice}`
//     );
//   }
// }

// let product1 = new Product(1, "Olma", 1200);
// let product2 = new Product(2, "Banan", 2100);
// let care = new CareProduct(3, "Shampun", 5000, 2);

// product1.totalPrice();
// care.totalPrice();

//-------------------------------------------------------2------------------------------------------//

// class University {
//   constructor(name) {
//     this.name = name;
//     this.departments = [];
//   }

//   addDepartment(department) {
//     if (!this.departments.includes(department)) {
//       this.departments.push(department);
//       console.log(`${department} bo'limi qo'shildi.`);
//     } else {
//       console.log(`${department} bo'limi allaqachon mavjud.`);
//     }
//   }

//   removeDepartment(department) {
//     const index = this.departments.indexOf(department);
//     if (index !== -1) {
//       this.departments.splice(index, 1);
//       console.log(`${department} bo'limi olib tashlandi.`);
//     } else {
//       console.log(`${department} bo'limi topilmadi.`);
//     }
//   }

//   showDepartments() {
//     if (this.departments.length == 0) {
//       console.log("Hozircha hech qanday bo'lim mavjud emas.");
//     } else {
//       console.log(`${this.name} universitetidagi bo'limlar:`);
//       console.log(this.departments.join(", "));
//     }
//   }
// }

// const myUniversity = new University("O'zbekiston Milliy Universiteti");

// myUniversity.addDepartment("Matematika");
// myUniversity.addDepartment("Fizika");
// myUniversity.addDepartment("Kimyo");
// myUniversity.addDepartment("Biologiya");
// myUniversity.addDepartment("Axborot texnologiyalari");

// myUniversity.removeDepartment("Kimyo");
// myUniversity.removeDepartment("Fizika");

// myUniversity.showDepartments();
