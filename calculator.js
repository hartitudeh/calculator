// let outputScreen = document.getElementById('screen');
// function display(num) {
//     outputScreen.value += num;
// }
// 
// function calculate() {
//     try{
//         outputScreen.value = eval(outputScreen.value);
//     }
//     catch(num){
//         document.getElementById('screen').innerHTML = "Invalid";
//     }
// }
// 
// function Clear() {
//     outputScreen.value = "";
// }
// 
// 
// function Del() {
//     outputScreen.value = outputScreen.value.slice(0, -1);
// }


// 

const outputScreen = document.getElementById("screen");

function display(num) {
  outputScreen.value += num;
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (error) {
    outputScreen.value = "Invalid";
  }
}

function clearScreen() {
  outputScreen.value = "";
}

function deleteLastCharacter() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
