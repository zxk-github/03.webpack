
var oBtn = document.getElementById("click");
oBtn.onclick=function(){
  import('./c').then((data) => {
    console.log('load c')
  })
}
console.log("AAA")

