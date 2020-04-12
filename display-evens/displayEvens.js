function calculate() {
  var num1 = Number(document.getElementById("start1").value);
  var num2 = Number(document.getElementById("end2").value);
  var count = Number(document.getElementById("step").value);

  console.log("num1: " + num1);
  console.log("num2: " + num2);
  console.log("step: " + count);


  if (num1 == "" || num2 == "" || step == "") {
    console.log("Please re-enter your input.");
    return;
  }

  document.getElementById("res").innerHTML = "Here are the even numbers between "+ num1 +" and "+ num2 +" by " + count;

  let ans = "";

  for (var x = num1;x <= num2; x = x + count) {
    console.log(x);
    if(x%2===0) {
      ans = ans+"<br>"+ x;
    }
  }

  // display results in HTML table
  document.getElementById("answer").innerHTML = ans;
  document.getElementById("allResults").style.display = "block";
  //document.getElementById("allResult").style.display = "block";
}
