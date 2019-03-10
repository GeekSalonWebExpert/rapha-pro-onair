// const label = document.getElementById("tanishutoku-label")
// //何を触るか
// const valueField = document.getElementById("tanishutoku-value")
// // どこに表示するか
// label.addEventListener("click", function(){
//   valueField.textContent = "ヤッホー"
// })
// label.addEventListener("click", function(){
//   console.log("うっす");
// })

const slider = document.getElementById("tanishutoku-slider")
const valueField = document.getElementById("tanishutoku-value")
slider.addEventListener("input", function(){
  valueField.textContent = slider.value
})


console.dir(slider);
