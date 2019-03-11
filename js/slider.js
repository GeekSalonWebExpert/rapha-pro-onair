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

const contentSlider = document.getElementById("content-slider")
const contentValueField = document.getElementById("content-value")
contentSlider.addEventListener("input", function(){
  contentValueField.textContent = contentSlider.value
})

const humorSlider = document.getElementById("humor-slider")
const humorValueField = document.getElementById("humor-value")
humorSlider.addEventListener("input", function(){
  humorValueField.textContent = humorSlider.value
})

const againSlider = document.getElementById("again-slider")
const againValueField = document.getElementById("again-value")
againSlider.addEventListener("input", function(){
  againValueField.textContent = againSlider.value
})

const attendanceSlider = document.getElementById("attendance-slider")
const attendanceValueField = document.getElementById("attendance-value")
attendanceSlider.addEventListener("input", function(){
  attendanceValueField.textContent = attendanceSlider.value
})

const testSlider = document.getElementById("test-slider")
const testValueField = document.getElementById("test-value")
testSlider.addEventListener("input", function(){
  testValueField.textContent = testSlider.value
})

const reportSlider = document.getElementById("report-slider")
const reportValueField = document.getElementById("report-value")
reportSlider.addEventListener("input", function(){
  reportValueField.textContent = reportSlider.value
})
