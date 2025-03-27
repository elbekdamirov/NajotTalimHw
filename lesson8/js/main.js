//------------------------task-----------------------------//
// let users = new Map();

// function addNumber(user, num) {
//   if (!users.has(user)) {
//     users.set(user, new Map());
//   }
//   let userNumbers = users.get(user);
//   let index = userNumbers.size + 1;
//   userNumbers.set(index, num);
//   console.log("Raqam qo'shildi");
// }

// function changeNumber(user, index, num) {
//   if (!users.has(user)) {
//     return console.log("Bunday user topilmadi");
//   }
//   let userNumbers = users.get(user);
//   if (!userNumbers.has(index)) {
//     return console.log("Bunday indeksda raqam topilmadi");
//   }
//   userNumbers.set(index, num);
//   console.log("Raqam o'zgartirildi");
// }

// function deleteNumber(user, index) {
//   if (!users.has(user)) {
//     return console.log("Bunday user topilmadi");
//   }
//   let userNumbers = users.get(user);
//   if (!userNumbers.has(index)) {
//     return console.log("Bunday indeksda raqam yo'q");
//   }
//   userNumbers.delete(index);
//   console.log("Raqam o'chirildi");
// }

// function getUserNumbers(user) {
//   if (!users.has(user)) {
//     return console.log("Bunday user topilmadi");
//   }
//   console.log(`${user} ning telefon raqamlari:`);
//   users.get(user).forEach((num, index) => {
//     console.log(`${index}: ${num}`);
//   });
// }

// addNumber("Elbek", "89848998");
// addNumber("Elbek", "12345678");
// getUserNumbers("Elbek");
// changeNumber("Elbek", 1, "87654321");
// getUserNumbers("Elbek");
// deleteNumber("Elbek", 2);
// getUserNumbers("Elbek");

//--------------------------task1---------------------------//
// function myfunc(arr) {
//   let userStats = {};

//   for (let i = 0; i < arr.length; i++) {
//     let [ip, user, duration] = arr[i].split(" ");
//     duration = parseInt(duration);

//     if (!userStats[user]) {
//       userStats[user] = { totalDuration: 0, ips: new Set() };
//     }

//     userStats[user].totalDuration += duration;
//     userStats[user].ips.add(ip);
//   }

//   let users = Object.keys(userStats);
//   for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let ips = [...userStats[user].ips].sort();
//     console.log(
//       `${user}: ${userStats[user].totalDuration} [${ips.join(", ")}]`
//     );
//   }
// }

// // myfunc(["84.238.140.178 nakov 25", "84.238.140.178 nakov 35"]);

// // myfunc([
// //     "192.168.0.11 peter 33",
// //     "10.10.17.33 alex 12",
// //     "10.10.17.35 peter 30",
// //     "10.10.17.34 peter 120",
// //     "10.10.17.34 peter 120",
// //     "212.50.118.81 alex 46",
// //     "212.50.118.81 alex 4",
// // ]);

//------------------------task2------------------------//
// function parseLogs(logs) {
//   const userActivity = {};

//   for (let i = 0; i < logs.length; i++) {
//     const log = logs[i];

//     let ipStart = log.indexOf("IP = ") + 5;
//     let ipEnd = log.indexOf(" ", ipStart);
//     let ip = log.substring(ipStart, ipEnd);

//     let userStart = log.indexOf("user=") + 5;
//     let userEnd = log.length;
//     let user = log.substring(userStart, userEnd);

//     if (!userActivity[user]) {
//       userActivity[user] = {};
//     }
//     if (!userActivity[user][ip]) {
//       userActivity[user][ip] = 0;
//     }
//     userActivity[user][ip] += 1;
//   }
//   // console.log(userActivity); keraksiz
//   return userActivity;
// }

// // const logs = [
// //   "IP = 192.23.30.40 message='Hello&derps.' user=destroyer",
// //   "IP = 192.23.30.41 message='Hello&yall.' user=destroyer",
// //   "IP = 192.23.30.40 message='Hello&hi.' user=destroyer",
// //   "IP = 192.23.30.42 message='Hello&Dudes.' user=destroyer",
// // ];

// const logs = [
//   "IP = 23.30.41 message='Hey&son' user=mother",
//   "IP = 23.33.40 message='Hi&mom!' user=child0",
//   "IP = 23.30.40 message='Hi&from&me&too' user=child1",
//   "IP = 23.30.42 message='spam' user=destroyer",
//   "IP = 23.30.42 message='spam' user=destroyer",
//   "IP = 23.30.41 message='spam' user=destroyer",
//   "IP = 23.50.40 message='' user=yetAnotherUsername",
//   "IP = 23.50.40 message='comment' user=yetAnotherUsername",
//   "IP = 23.155.40 message='Hello.' user=unknown",
// ];


// const result = parseLogs(logs);

// for (const user in result) {
//   console.log(`${user}:`);
//   for (const ip in result[user]) {
//     console.log(`  ${ip} => ${result[user][ip]},`);
//   }
// }

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
