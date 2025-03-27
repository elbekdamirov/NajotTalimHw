//-----------------------100 balli --------------------//

// let map = new Map();

// function register(username, password) {
//   if (map.has(username)) {
//     return "User already exists";
//   }
//   map.set(username, { password, isActive: true, countActive: 1 });
//   return "Muvaffaqiyatli ro'yxatdan o'tdingiz";
// }

// function login(username, password) {
//   if (!map.has(username)) {
//     return "User unauthorized!";
//   }
//   let user = map.get(username);

//   if (user.password !== password) {
//     return "Username or Password incorrect";
//   }

//   if (user.countActive >= 3) {
//     return "Profildan bir vaqtda faqat max 3 odam foydalanishi mumkin";
//   }

//   map.set(username, {
//     password: user.password,
//     isActive: true,
//     countActive: user.countActive + 1,
//   });

//   return "Siz tizimga kirdingiz";
// }

// function logout(username) {
//   if (!map.has(username)) {
//     return "User unauthorized!";
//   }
//   let user = map.get(username);

//   if (user.countActive > 0) {
//     let newCount = user.countActive - 1;
//     map.set(username, {
//       password: user.password,
//       isActive: newCount > 0,
//       countActive: newCount,
//     });
//   }
// }

// function showLoggedInUsers() {
//   let users = [];

//   for (const [username, user] of map.entries()) {
//     if (user.countActive > 0) {
//       users.push({
//         Username: username,
//         Password: user.password,
//         LoggedIn: user.countActive,
//       });
//     }
//   }

//   console.table(users);
// }

// console.log(register("Humoyun", "2004"));
// console.log(register("Sohibjon", "2005"));

// console.log(login("Humoyun", "2004"));
// console.log(login("Humoyun", "2004"));
// console.log(login("Humoyun", "2004"));
// console.log(login("Humoyun", "2004"));

// showLoggedInUsers();

// logout("Humoyun");
// // logout("Humoyun");
// // logout("Humoyun");
// showLoggedInUsers();
