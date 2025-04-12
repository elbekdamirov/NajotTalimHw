// --------------------------------------------------- 1 ----------------------------------------------//
// const urlData = {
//   protocol: "https",
//   hostname: "mywebsite.com",
//   path: "/blog/article",
//   query: {
//     id: 45,
//     author: "Ali",
//     lang: "en",
//   },
// };

// urlData.query.lang = "uz";

// urlData.query.view = "mobile";

// const queryString = Object.entries(urlData.query)
//   .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
//   .join("&");

// const finalUrl = `${urlData.protocol}://${urlData.hostname}${urlData.path}?${queryString}`;

// console.log(finalUrl);

//----------------------------------------------------- 2 ------------------------------------------------//

// const os = require("node:os");

// const cpu = os.cpus();
// console.log("CPU yadrolari soni:", cpu.length);

// cpu.forEach((cpu, index) => {
//   console.log(`\nYadro ${index + 1}:`);
//   console.log("Model:", cpu.model);
//   console.log("Tezlik:", cpu.speed);
// });

//----------------------------------------------------- 3 -------------------------------------------------//

// const path = require("node:path");

// const root = "/home/user/";
// const subfolder = "projects/myapp";
// const appName = "server.js";

// newpath = path.join(root, subfolder, appName);
// console.log(newpath);

// ---------------------------------------------------- 4 --------------------------------------------------//
// const path = require('node:path');

// const paths = [
//   "C://Users//Admin//Desktop//project//..//index.js",
//   "/home/user/docs/../images/photo.png",
//   "./folder/subfolder/../../script.js",
// ];

// paths.forEach((p, i)=> {
//     console.log(path.normalize(p));
// })

//----------------------------------------------------- 5-------------------------------------------------//

// const path = require("node:path");

// const files = [
//   "report.docx",
//   "notes.txt",
//   "data.json",
//   "README.md",
//   "script.js",
//   "todo.txt",
// ];

// txtAndMd = [];

// files.forEach((file) => {
//     ext = path.extname(file);
//   if (ext == ".txt" || ext == ".md") {
//     txtAndMd.push(file)
//   }
// });

// console.log(txtAndMd);
