function calculatePercentage(num,denom){
  var percentage = num/denom;
  return percentage;
}

function checkInputs(aMark,aTotal){
  if ((aMark < 0) || (aTotal <= 0) || (aMark == '') || (aTotal == '')){
    //alert("Please enter a positive number");
    return false;
  }
  return true;
}

function checkWeights(){
  var allWeights = document.getElementsByName("weight");
  var error = 0;
  for (k = 0; k < allWeights.length; k++){
    if (allWeights[k].value != '' && allWeights[k].value <= 0){
      error = 1;
    }
    else if (allWeights[k].value == '' && allMarks[k].value != '' && allTotals[k].value != ''){
      // console.log("k: ", k);
      // console.log(allMarks[k].value);
      // console.log(allTotals[k].value);
      allWeights[k].style.border = "1px solid red";
      error = 1;
    }
    else{
      allWeights[k].style.border = "";
    }
  }
  if (error == 1){
    alert("Please fill in all weights with values > 0");
    return false;
  }
  return true;
}

function validateGrades(aMark,aTotal){
  if ((aMark.value < 0) || (aTotal.value <= 0)){
        //alert("Please enter a positive number");
        console.log("negative", aMark.value,aTotal.value);
        return false;
  }
  return true;
}


function calculateMean(){
  var numOfGrades = 0;
  var sumOfMeans = 0;
  var mean = 0;
  var meanPercent = "";
  var error = 0;

  for (var i = 0; i < allTotals.length;i++){
    if (allMarks[i].value != '' && allTotals[i].value != ''){
      console.log("both non-empty, i: ", i);
      if (validateGrades(allMarks[i].value,allTotals[i].value)){
        sumOfMeans+=parseFloat(calculatePercentage(allMarks[i].value,allTotals[i].value));
        numOfGrades++;
      }
      else{
        error = 1;
      }
    }
    console.log("error: ",error);
  }
  if (error == 0){
    mean = sumOfMeans/numOfGrades;
    meanPercent = String((mean*100).toFixed(2))+"%";
    //console.log(mean);
    document.getElementById("result").innerHTML = "Mean of your grades is: "+ meanPercent;
  }
  else{
    alert("Please enter positive values");
    document.getElementById("result").innerHTML = "error: invalid input";
  }
}

function calculateWeighted(){
  var totalWeight = 0;
  var sum = 0;
  var weighted = 0;
  var weightedPercent = "";

  //check if weight negative or empty
  if (checkWeights()){
    for (var i = 0; i < allTotals.length;i++){
      if (allWeights[i].value > 0 && allMarks[i].value != '' && allTotals[i].value != ''){
        grade = parseFloat(calculatePercentage(allMarks[i].value,allTotals[i].value));
        sum+= parseFloat(grade*allWeights[i].value);
        totalWeight+=parseFloat(allWeights[i].value);
      //  console.log(sum);
      }
    }
    weighted = sum/totalWeight;
    weightedPercent = String((weighted*100).toFixed(2))+"%";
  //  console.log(weighted);
    document.getElementById("result").innerHTML = "Your weighted grade is: "+ weightedPercent;
  }
  else{
    document.getElementById("result").innerHTML = 'Error: invalid weights';
  }

}

function clearFields(){
  var allPers = document.getElementsByName("per");

  for (var i = 0; i < allMarks.length; i++){
      allMarks[i].value = '';
    }

  for (var j = 0; j < allTotals.length; j++){
      allTotals[j].value = '';
    }

  for (var  k= 0; k < allWeights.length; k++){
      allWeights[k].value = '';
      allWeights[k].style.border = "";
    }

  for (var p = 0; p < allPers.length; p++){
    allPers[p].innerHTML = '';
  }

  document.getElementById("result").innerHTML = "";
}


function percent1(){
    if (checkInputs(allMarks[0].value,allTotals[0].value)){
      var p = calculatePercentage(allMarks[0].value,allTotals[0].value);
      var pString= String((p*100).toFixed(2))+"%";
      allPers[0].innerHTML = pString;
    }
    else{
      allPers[0].innerHTML = '';
    }

}

function percent2(){
  if (checkInputs(allMarks[1].value,allTotals[1].value)){
    var p = calculatePercentage(allMarks[1].value,allTotals[1].value);
    var pString= String((p*100).toFixed(2))+"%";
    allPers[1].innerHTML = pString;
  }
  else{
    allPers[1].innerHTML = '';
  }
}

function percent3(){
  if (checkInputs(allMarks[2].value,allTotals[2].value)){
    var p = calculatePercentage(allMarks[2].value,allTotals[2].value);
    var pString= String((p*100).toFixed(2))+"%";
    allPers[2].innerHTML = pString;
  }
  else{
      allPers[2].innerHTML = '';
  }
}

function percent4(){
  if (checkInputs(allMarks[3].value,allTotals[3].value)){
    var p = calculatePercentage(allMarks[3].value,allTotals[3].value);
    var pString= String((p*100).toFixed(2))+"%";
    allPers[3].innerHTML = pString;
  }
  else{
      allPers[3].innerHTML = '';
  }
}


  var meanButton = document.getElementById("mean");
  var weightedButton = document.getElementById("weighted");
  var clearButton = document.getElementById("clearAll");

  meanButton.onclick = calculateMean;
  weightedButton.onclick = calculateWeighted;
  clearButton.onclick = clearFields;

  //global variables
  var allWeights = document.getElementsByName("weight");
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

  // allWeights[0].oninput = checkWeights;
  // allWeights[1].oninput = checkWeights;
  // allWeights[2].oninput = checkWeights;
  // allWeights[3].oninput = checkWeights;
