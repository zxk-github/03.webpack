import base from './css/base.css';

let app = document.getElementById('app');
let div = document.createElement('div');
div.className = 'box';
app.appendChild(div)



if(module.hot){
  //检测到componentA发生了变化
  module.hot.accept('./compnentA', function(){
    //先删除，再添加
  });
}
