import * as _ from 'lodash'

console.log("appappappappappapp")



import(/*webpackChunkName: a*/'./a').then(function(a){
  console.log(a);
})

import(/*webpackChunkName: b*/'./b').then(function(b){
  console.log(b);
});


