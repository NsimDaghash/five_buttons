
let btnelmnt = document.getElementsByClassName('btn');

for(let i = 0; i < btnelmnt.length; i++) {
  btnelmnt[i].onclick = changeResult;  // call changeResult function for each button click
}

//a changeResult function that changes the content of the result element
function changeResult(){
  let rslt = document.getElementById('result');

  rslt.innerHTML = this.id;
  rslt.style.backgroundColor = this.class;

}