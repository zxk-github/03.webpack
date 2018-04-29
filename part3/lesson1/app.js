import sum from './es6';
let commonJs = require('./commonJs')

require(['./amd'], function(amd){
  console.log(amd(4, 2));
})

console.log(sum(1, 3));
console.log(commonJs(2, 3));

