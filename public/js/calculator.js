document.getElementById("weighted").addEventListener('click', function(){
  window.alert("you clicked me!"); //outputting to console (debugging)
});


function calculatePercentage(num,denom){
  var percentage = num/denom;
  roundedPercent = percentage.toFixed(2);
  return roundedPercent;
}

var mark1 = document.getElementById("a1mark").value;
var total1 = document.getElementById("a1total").value;
var percent1 = calculatePercentage(mark1, total1);

document.getElementById("p1").innerHTML = percent1;
