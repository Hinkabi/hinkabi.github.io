function letsWin(){
    let firstNum = parseInt(document.getElementById("firstNumber").value);
  
document.getElementById("startingBet").innerHTML = firstNum;
  if(firstNum < 0 ){
    alert("Sorry, please try again.");
    return;
  }
let money = firstNum;
let totalRoll = 0;
let highestWon = 0;
let rollCountHighestWon = 0;
while(money >0) {
  let dice1 = rollDice();
  let dice2 = rollDice();
  if ((dice1+dice2) ===7){
    money = money+4;
  }else {
    money = money-1;
  }
if (highestWon < money ){
  highestWon = money;
  rollCountHighestWon = totalRoll +1;
}
  totalRoll++;
}
document.getElementById("totalRoll").innerHTML = totalRoll;
document.getElementById("highestWon").innerHTML = "$"+highestWon;
document.getElementById("rollCountHighestWon").innerHTML = rollCountHighestWon;
 }
 function rollDice(){
   return Math.floor(Math.random() * Math.floor(6))+1;
 }
</script>