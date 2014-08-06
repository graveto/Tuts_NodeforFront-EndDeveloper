var powerUp = require("./lib/powerUp");

var randList = [23,4,54,2,13,57,8,61];
var pow10 = powerUp(10);
var transformed = randList.map(pow10);
console.log(transformed);
