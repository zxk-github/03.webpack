import  './a';
import  './b';

import * as _ from 'lodash'

console.log("appappappappappapp")



import('./a').then(function(a){
  console.log(a);
})
//不加名字，会以1,2，这种数字形式命名

import(/*webpackChunkName: 'b'*/'./b').then(function(b){

})

//通过注释的方式，给chunk添加名字，当两个chunkName相同时候，两个异步加载模块会打包在一个模块中
