const regex = /^\d{2}(\s[A-Z])?(\s\d{1,4})?(\s[A-Z]{2,3})?(\s\d{2})?$/;
const numbers = [
  "10 A 123 AA",
  "80 Y 456 BC",
  "01 789 QWE",
  "25 456 RTY",
  "10 1234 XA",
  "80 5678 XD",
  "00 34 KLM",
  "00 78 QAZ",
  "10 D 123 45",
  "80 D 999 01",
  "17 T 456 ZX",
  "26 T 789 MN",
  "10 H 5678",
  "80 H 3456",
  "10 M 456 LK",
  "80 M 789 TY",
  "01 X 234 AZ",
  "25 X 678 ER",
];

numbers.forEach((str) => {
  if (regex.test(str)) {
    console.log(`${str} matches!`);
  } else {
    console.log(`${str} does not match.`);
  }
});