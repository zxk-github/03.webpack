import base from  './css/base.css'
import common from './css/common.css'

let flag = true;
setInterval(function() {
  console.log(1)
  if(flag){
    base.use();
  } else {
    base.unuse();
  }
  flag = !flag;
},1000);
