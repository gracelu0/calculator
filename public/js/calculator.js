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
  var numOfGrades = 0;
  var sumOfMeans = 0;
  var mean = 0;
  console.log(allTotals.length);

  for (i = 0; i < allTotals.length;i++){
    if (allMarks[i].value != '' && allTotals[i].value != ''){
      sumOfMeans+=parseFloat(calculatePercentage(allMarks[i].value,allTotals[i].value));
      numOfGrades++;
      console.log(sumOfMeans);
    }
  }
  mean = sumOfMeans/numOfGrades;
  console.log(mean);
  document.getElementById("result").innerHTML = "Mean of your grades is: "+ mean;

}

function calculateWeighted(){
  var allMarks = document.getElementsByName("mark");
  var allTotals = document.getElementsByName("total");
  var allWeights = document.getElementsByName("weight");
  var totalWeight = 0;
  var sum = 0;
  var weighted = 0;

  for (i = 0; i < allTotals.length;i++){
    if (allWeights[i].value > 0 && allMarks[i].value != '' && allTotals[i].value != ''){
      grade = parseFloat(calculatePercentage(allMarks[i].value,allTotals[i].value));
      sum+= parseFloat(grade*allWeights[i].value);
      totalWeight+=parseFloat(allWeights[i].value);
      console.log(sum);
    }
  }
  weighted = sum/totalWeight;
  console.log(weighted);
  document.getElementById("result").innerHTML = "Your weighted grade is: "+ weighted;


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
