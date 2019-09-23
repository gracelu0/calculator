function calculatePercentage(num,denom){
  console.log(num);
  console.log(denom);
  var percentage = num/denom;
  roundedPercent = percentage.toFixed(2);
  console.log(roundedPercent);
  return roundedPercent;
}

//Need to do error checking! (e.g. total=0, negatives)
function calculateMean(){
  var allMarks = document.getElementsByName("mark");
  var allTotals = document.getElementsByName("total");
  var sumOfMeans = 0;
  var mean = 0;
  for (i = 0; i < allTotals.length;i++){
    sumOfMeans+=calculatePercentage(allMarks[i],allTotals[i]);
  }
  mean = sumOfMeans/allTotals.length;
  document.getElementById("result").innerHTML = mean;

}

// function calculateMean(){
//   var mark1 = document.getElementById("a1mark").value;
//   var total1 = document.getElementById("a1total").value;
//   var percent1 = calculatePercentage(mark1, total1);
//   document.getElementById("p1").innerHTML = percent1;
//   document.getElementById("result").innerHTML = percent1;
// }




// document.getElementById("mean").addEventListener('click', function(){
//   document.getElementById("p1").innerHTML = percent1;
//   document.getElementById("result").innerHTML = percent1;
// });
