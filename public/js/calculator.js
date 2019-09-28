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
    if (!allWeights[k].checkValidity()){
      error = 1;
    }
    if (allWeights[k].value != '' && allWeights[k].value <= 0){
      error = 1;
    }
    else if (allWeights[k].value == '' && allMarks[k].value != '' && allTotals[k].value != ''){
      allWeights[k].style.border = "1px solid red";
      error = 1;
    }
    else{
      allWeights[k].style.border = "";
    }
  }
  if (error == 1){
    alert("Please fill in all weights with valid values");
    return false;
  }
  return true;
}

function checkGrades(){
  for (var i = 0; i < allTotals.length;i++){
    //only 1/2 fields are filled
    if (allMarks[i].value != '' && allTotals[i].value == ''){
      console.log("total empty, i: ", i);
      allTotals[i].style.border = "1px solid red";
      return false;

    }
    else if (allMarks[i].value == '' && allTotals[i].value != ''){
      allMarks[i].style.border = "1px solid red";
      return false;

    }
    else{
      allMarks[i].style.border = "";
      allTotals[i].style.border = "";
    }
  }
  return true;
}

function resetBorders(){
  for (var i = 0; i < allTotals.length;i++){
    allMarks[i].style.border = "";
    allTotals[i].style.border = "";
    allWeights[i].style.border = "";

  }
}

function calculateMean(){
  var numOfGrades = 0;
  var sumOfMeans = 0;
  var mean = 0;
  var meanPercent = "";
  var error = 0;

  checkGrades();

  for (var i = 0; i < allTotals.length;i++){
    if (allMarks[i].value != '' && allTotals[i].value != ''){
      if (allMarks[i].checkValidity() && allTotals[i].checkValidity()){
        sumOfMeans+=parseFloat(calculatePercentage(allMarks[i].value,allTotals[i].value));
        numOfGrades++;
      }
      else{
        error = 1;
      }
    }
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
  var negatives = 0;
  if(!checkGrades()){
    alert("Please fill in mark/total fields");
  }

  for (var i = 0; i < allTotals.length;i++){
    if (allMarks[i].value != '' && allTotals[i].value != ''){
      if (!allMarks[i].checkValidity() || !allTotals[i].checkValidity()){
        alert("Please enter positive values");
        negatives = 1;
      }
    }
  }

  //check if weight negative or empty
  if (negatives == 0){
    if (checkWeights()){
      for (var i = 0; i < allTotals.length;i++){
        if (allWeights[i].value > 0 && allMarks[i].value != '' && allTotals[i].value != ''){
          grade = parseFloat(calculatePercentage(allMarks[i].value,allTotals[i].value));
          sum+= parseFloat(grade*allWeights[i].value);
          totalWeight+=parseFloat(allWeights[i].value);
        }
      }
      weighted = sum/totalWeight;
      weightedPercent = String((weighted*100).toFixed(2))+"%";
      document.getElementById("result").innerHTML = "Your weighted grade is: "+ weightedPercent;
    }
    else{
      document.getElementById("result").innerHTML = 'Error: invalid weights';
    }
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

function addRow(){
  var table = document.getElementById("inner");
  var numOfRows = table.rows.length;
  var row = table.insertRow(numOfRows);
  for (var i = 0; i < 5; i++){
    var cell = document.createElement('td');
    cell = row.insertCell(i);

    if (i==0){
      cell.innerHTML = "Activity "+String(numOfRows);
    }
    else if(i==1){
      cell.innerHTML = "A"+String(numOfRows);
    }
    else if(i==2){
      var weightField = document.createElement("input");
      weightField.setAttribute('type', 'number');
      weightField.setAttribute('min', '0.1');
      weightField.setAttribute('step',"0.1");
      weightField.setAttribute('name', 'weight');
      weightField.setAttribute('pattern', "/\d*[.,]?\d*$/");
      weightField.addEventListener("input",resetBorders);

      cell.appendChild(weightField);

    }
    else if(i==3){
      var markField = document.createElement("input");
      markField.setAttribute('type', 'number');
      markField.setAttribute('min', '0');
      markField.setAttribute('name', 'mark');
      markField.setAttribute('pattern', "/\d*[.,]?\d*$/");
      markField.addEventListener("input",newRowCallPercent);

      cell.appendChild(markField);
      var text = document.createTextNode("/");
      cell.appendChild(text);
      cell.appendChild(document.createElement("br"));

      var totalField = document.createElement("input");
      totalField.setAttribute('type', 'number');
      totalField.setAttribute('min', '1');
      totalField.setAttribute('name', 'total');
      totalField.setAttribute('pattern', "/\d*[.,]?\d*$/");
      totalField.addEventListener("input",newRowCallPercent);
      cell.appendChild(totalField);

    }
    else if(i==4){
      var percentBox = document.createElement("p");
      percentBox.setAttribute('name','per');
      cell.appendChild(percentBox);
      console.log("allPers.length: ",allPers.length);
      allPers = document.getElementsByName('per');
      console.log("allPers.length: ",allPers.length);

    }
  }
}

function removeRow(){
  var table = document.getElementById("inner");
  if (table.rows.length>1){
    table.deleteRow(-1);
  }

}

function percent(index){
  resetBorders();

  if (checkInputs(allMarks[index].value,allTotals[index].value)){
    var p = calculatePercentage(allMarks[index].value,allTotals[index].value);
    var pString= String((p*100).toFixed(2))+"%";
    allPers[index].innerHTML = pString;
  }
  else{
      allPers[index].innerHTML = '';
  }
}

function callPercent(){
  rowNum = (this.parentNode.parentNode.parentNode.rowIndex)-1;
  percent(rowNum);
  console.log("row: ", this.parentNode.parentNode.parentNode.rowIndex);
}

function newRowCallPercent(){
  rowNum = (this.parentNode.parentNode.rowIndex)-1;
  percent(rowNum);
  console.log("row: ", this.parentNode.parentNode.parentNode.rowIndex);

}


  var meanButton = document.getElementById("mean");
  var weightedButton = document.getElementById("weighted");
  var clearButton = document.getElementById("clearAll");
  var addButton = document.getElementById("addRow");
  var deleteButton = document.getElementById("deleteRow");

  meanButton.onclick = calculateMean;
  weightedButton.onclick = calculateWeighted;
  clearButton.onclick = clearFields;
  addButton.onclick = addRow;
  deleteButton.onclick = removeRow;

  //global variables
  var allWeights = document.getElementsByName("weight");
  var allMarks = document.getElementsByName("mark");
  var allTotals = document.getElementsByName("total");
  var allPers = document.getElementsByName("per");

  //add event listeners
  for (var i = 0; i < allMarks.length; i++){
    allMarks[i].addEventListener("input",callPercent);
    allTotals[i].addEventListener("input",callPercent);
    allWeights[i].addEventListener("input",resetBorders);
  }
