// import  './a';
// import  './b';

// import * as _ from 'lodash'

require.include('./module');

let page = a;
if(page === 'a'){
  require.ensure(['./a.js'], function(){
    let a = require('./a.js');
  })
} else if (page === 'b') {
  require.ensure(['./b.js'], function(){
    let a = require('./b.js');
  })
}

require.ensure(['lodash'], function(){
  let _ = reuqire('lodash')
}, 'vendor');

console.log("appappappappappapp")