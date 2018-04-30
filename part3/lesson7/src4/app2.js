import * as _ from 'lodash'


import(/*webpackChunkName: a*/'./a').then(function(a){
  console.log(a);
})

import(/*webpackChunkName: b*/'./b').then(function(b){
  console.log(b);
});
console.log("app2app2app2app2app2app2app2")