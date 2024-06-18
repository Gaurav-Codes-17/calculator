
let calc0 = document.querySelector(".calc0");
let curreDisplay = "";
calc0.addEventListener("click", ()=> {
    curreDisplay = curreDisplay + "0";
    document.querySelector(".input1").value = curreDisplay;
   

});

let calcc = document.querySelector(".calcc");
calcc.addEventListener("click", () => {
  curreDisplay = "";
  document.querySelector(".input1").value = curreDisplay;
});


let calc1 = document.querySelector(".calc1");
calc1.addEventListener("click", () => {
  curreDisplay = curreDisplay + "1";
  document.querySelector(".input1").value = curreDisplay;
});



let calc2 = document.querySelector(".calc2");
calc2.addEventListener("click", () => {
  curreDisplay = curreDisplay + "2";
  document.querySelector(".input1").value = curreDisplay;
});


let calc3= document.querySelector(".calc3");
calc3.addEventListener("click", () => {
  curreDisplay = curreDisplay + "3";
  document.querySelector(".input1").value = curreDisplay;
});



let calc4 = document.querySelector(".calc4");
calc4.addEventListener("click", () => {
  curreDisplay = curreDisplay + "4";
  document.querySelector(".input1").value = curreDisplay;
});



let calc5= document.querySelector(".calc5");
calc5.addEventListener("click", () => {
  curreDisplay = curreDisplay + "5";
  document.querySelector(".input1").value = curreDisplay;
});



let calc6 = document.querySelector(".calc6");
calc6.addEventListener("click", () => {
  curreDisplay = curreDisplay + "6";
  document.querySelector(".input1").value = curreDisplay;
});



let calc7 = document.querySelector(".calc7");
calc7.addEventListener("click", () => {
  curreDisplay = curreDisplay + "7";
  document.querySelector(".input1").value = curreDisplay;
});



let calc8 = document.querySelector(".calc8");
calc8.addEventListener("click", () => {
  curreDisplay = curreDisplay + "8";
  document.querySelector(".input1").value = curreDisplay;
});



let calc9 = document.querySelector(".calc9");
calc9.addEventListener("click", () => {
  curreDisplay = curreDisplay + "9";
  document.querySelector(".input1").value = curreDisplay;
});



let calcminus = document.querySelector(".calcminus");
calcminus.addEventListener("click", () => {
  curreDisplay = curreDisplay + "-";
  document.querySelector(".input1").value = curreDisplay;
});



let calcadd = document.querySelector(".calcadd");
calcadd.addEventListener("click", () => {
  curreDisplay = curreDisplay + "+";
  document.querySelector(".input1").value = curreDisplay;
});



let calcdiv= document.querySelector(".calcdiv");
calcdiv.addEventListener("click", () => {
  curreDisplay = curreDisplay + "/";
  document.querySelector(".input1").value = curreDisplay;
});



let calceval = document.querySelector(".calceval");
calceval.addEventListener("click", () => {
let result = eval(curreDisplay)
    curreDisplay = result;
  document.querySelector(".input1").value = curreDisplay;
});



let calcmul = document.querySelector(".calcmul");
calcmul.addEventListener("click", () => {
  curreDisplay = curreDisplay + '*';
  document.querySelector(".input1").value = curreDisplay;
});



let calcdec = document.querySelector(".calcdec");
calcdec.addEventListener("click", () => {
  curreDisplay = curreDisplay + ".";
  document.querySelector(".input1").value = curreDisplay;
});
