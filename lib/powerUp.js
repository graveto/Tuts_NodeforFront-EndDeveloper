// var powerUp = function(exp) {
//   return function(number) {
//     return Math.pow(number, exp);
//   }
// }
//
// module.exports = powerUp;

module.exports = function(exp) {
  return function(num) {
    return Math.pow(num, exp);
  }
}
