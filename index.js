const cowsay = require("cowsay");
const userInfo = require("./informations");

console.log(
  cowsay.say({
    text: `I'm ${userInfo.name} from ${userInfo.campus}`,
    f: "C3PO",
  })
);
console.log(
  cowsay.think({
    text: "Oh non pas elle !",
    f: "homer",
  })
);
