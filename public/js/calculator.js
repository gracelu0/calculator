function calculatePercentage(num,denom){
  console.log(num);
  console.log(denom);
  var percentage = num/denom;
  roundedPercent = percentage.toFixed(2);
  console.log(roundedPercent);
  return roundedPercent;
}




function calculateMean(){
  var mark1 = document.getElementById("a1mark").value;
  var total1 = document.getElementById("a1total").value;
  var percent1 = calculatePercentage(mark1, total1);
  document.getElementById("p1").innerHTML = percent1;
  document.getElementById("result").innerHTML = percent1;
}

// document.getElementById("mean").addEventListener('click', function(){
//   document.getElementById("p1").innerHTML = percent1;
//   document.getElementById("result").innerHTML = percent1;
// });
