const cowsay = require("cowsay");
const userInfo = require("./informations");
require("dotenv").config();

console.log(
  cowsay.say({
    text: `I'm ${process.env.NAME} from ${process.env.CITY} and I speak ${process.env.LANGUAGE}`,
    e: '^^',
  })
);
