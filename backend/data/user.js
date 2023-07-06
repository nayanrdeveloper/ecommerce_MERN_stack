const bcrypt = require("bcryptjs");

const users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "nayan",
    email: "nayan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "mayur",
    email: "mayur@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
