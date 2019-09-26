function calculatePercentage(num,denom){
  console.log(num);
  console.log(denom);
  var percentage = num/denom;
  return percentage;
  //roundedPercent = percentage.toFixed(2);
  //console.log(roundedPercent);
  //return roundedPercent;
}
function displayPercentage(aMark,aTotal,box){
  var p = calculatePercentage(aMark,aTotal);
  var pString= String((p*100).toFixed(2))+"%";
  console.log(pString);
  box.innerHTML = pString;
}

function checkNegative(aMark,aTotal){
  if ((aMark < 0) || (aTotal <= 0)){
    alert("Please enter a positive number");
    return false;
  }
  return true;
}

function checkWeight(aWeight){
  if (aWeight.value < 0 || aWeight.value == ''){
    aWeight.style.border = "1px solid red";
  }
  else{
    aWeight.style.border = "";
  }
}

//Need to do error checking! (e.g. total=0, negatives)
function calculateMean(){
  var allMarks = document.getElementsByName("mark");
  var allTotals = document.getElementsByName("total");
  var numOfGrades = 0;
  var sumOfMeans = 0;
  var mean = 0;
  var meanPercent = "";
  console.log(allTotals.length);

  for (i = 0; i < allTotals.length;i++){
    if (allMarks[i].value != '' && allTotals[i].value != ''){
      sumOfMeans+=parseFloat(calculatePercentage(allMarks[i].value,allTotals[i].value));
      numOfGrades++;
      console.log(sumOfMeans);
    }
  }
  mean = sumOfMeans/numOfGrades;
  meanPercent = String((mean*100).toFixed(2))+"%";
  console.log(mean);
  document.getElementById("result").innerHTML = "Mean of your grades is: "+ meanPercent;

}

function calculateWeighted(){
  var allMarks = document.getElementsByName("mark");
  var allTotals = document.getElementsByName("total");
  var allWeights = document.getElementsByName("weight");
  var totalWeight = 0;
  var sum = 0;
  var weighted = 0;
  var weightedPercent = "";

  //check if weight negative or empty
  for (k = 0; k < allWeights.length; k++){
    checkWeight(allWeights[k]);
    // if (allWeights[k].value < 0 || allWeights[k].value == ''){
    //   allWeights[k].style.border = "1px solid red";
    // }
    // else{
    //   allWeights[k].style.border = "";
    // }
  }

  for (i = 0; i < allTotals.length;i++){
    if (allWeights[i].value > 0 && allMarks[i].value != '' && allTotals[i].value != ''){
      grade = parseFloat(calculatePercentage(allMarks[i].value,allTotals[i].value));
      sum+= parseFloat(grade*allWeights[i].value);
      totalWeight+=parseFloat(allWeights[i].value);
      console.log(sum);
    }
  }
  weighted = sum/totalWeight;
  weightedPercent = String((weighted*100).toFixed(2))+"%";
  console.log(weighted);
  document.getElementById("result").innerHTML = "Your weighted grade is: "+ weightedPercent;

}

function clearFields(){
  var allMarks = document.getElementsByName("mark");
  var allTotals = document.getElementsByName("total");
  var allWeights = document.getElementsByName("weight");
  var allPers = document.getElementsByName("per");

  for (var i = 0; i < allMarks.length; i++){
      allMarks[i].value = '';
    }

  for (var j = 0; j < allTotals.length; j++){
      allTotals[j].value = '';
    }

  for (var  k= 0; k < allWeights.length; k++){
      allWeights[k].value = '';
    }

  for (var p = 0; p < allPers.length; p++){
    allPers[p].innerHTML = '';
  }
  }


function percent1(){
    if (checkNegative(allMarks[0].value,allTotals[0].value)){
      var p = calculatePercentage(allMarks[0].value,allTotals[0].value);
      var pString= String((p*100).toFixed(2))+"%";
      allPers[0].innerHTML = pString;
    }

}

function percent2(){
  if (checkNegative(allMarks[1].value,allTotals[1].value)){
    var p = calculatePercentage(allMarks[1].value,allTotals[1].value);
    var pString= String((p*100).toFixed(2))+"%";
    allPers[1].innerHTML = pString;
  }
}

function percent3(){
  if (checkNegative(allMarks[2].value,allTotals[2].value)){
    var p = calculatePercentage(allMarks[2].value,allTotals[2].value);
    var pString= String((p*100).toFixed(2))+"%";
    allPers[2].innerHTML = pString;
  }
}

function percent4(){
  if (checkNegative(allMarks[3].value,allTotals[3].value)){
    var pString = '';
    if (allMarks[3].value!= '' && allTotals[3].value!= ''){
      var p = calculatePercentage(allMarks[3].value,allTotals[3].value);
      pString= String((p*100).toFixed(2))+"%";
    }
    allPers[3].innerHTML = pString;
  }
}


  var meanButton = document.getElementById("mean");
  var weightedButton = document.getElementById("weighted");
  var clearButton = document.getElementById("clearAll");

  meanButton.onclick = calculateMean;
  weightedButton.onclick = calculateWeighted;
  clearButton.onclick = clearFields;

  var allMarks = document.getElementsByName("mark");
  var allTotals = document.getElementsByName("total");
  var allPers = document.getElementsByName("per");

  allMarks[0].oninput = percent1;
  allMarks[1].oninput = percent2;
  allMarks[2].oninput = percent3;
  allMarks[3].oninput = percent4;

  allTotals[0].oninput = percent1;
  allTotals[1].oninput = percent2;
  allTotals[2].oninput = percent3;
  allTotals[3].oninput = percent4;

  allWeights[0].oninput = checkWeight;
  allWeights[1].oninput = checkWeight;
  allWeights[2].oninput = checkWeight;
  allWeights[3].oninput = checkWeight;
