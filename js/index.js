var btnClick = window.document.querySelector("#btnClick");
btnClick.addEventListener("click", () => {
//   var colors = ["blue", "green", "yellow", "black"];
var colors = ["A", "B", "C", "D", "E", "F",0,1,2,3,4,5,6,7,8,9];
  var generatedColor='#';
  for(let i=1; i<=6; i++){
    let generatedNumber = Math.floor(Math.random() * 17);

  let color = colors[generatedNumber]
  generatedColor = generatedColor + color;
  


  }

  
//   console.log(color);
let body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = generatedColor;

});
