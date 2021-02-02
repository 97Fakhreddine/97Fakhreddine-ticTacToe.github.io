var currentId;
var counter = 1;

var x = `<div id="center">
<div id="x1"></div>
<div id="x2"></div>
</div>`;

var o = `<div class="o"></div>`;

function divId(clickedID) {
  // if the div's value is 0 you can append here and set the value to 1
  if (document.getElementById(clickedID).getAttribute("value") == 0) {
    currentId = clickedID;
    console.log(currentId);
    document.getElementById(currentId).setAttribute("value", 1);
    var divValue = document.getElementById(currentId).getAttribute("value");
    console.log(divValue);
    if (counter % 2 !== 0) {
      $("#" + currentId).append(x);
      counter++;
    } else {
      $("#" + currentId).append(o);
      counter++;
    }
  }
}
