var currentId;
var counter = 1;

var x = `<div id="center">
<div id="x1"></div>
<div id="x2"></div>
</div>`;
var o = `<div id="container"><div class="o"></div></div>`;

function check() {
  if (
    document.getElementById("a").getAttribute("value") == "x" &&
    document.getElementById("b").getAttribute("value") == "x" &&
    document.getElementById("c").getAttribute("value") == "x"
  ) {
    alert("Player X wins");
  } else if (
    document.getElementById("d").getAttribute("value") == "x" &&
    document.getElementById("e").getAttribute("value") == "x" &&
    document.getElementById("f").getAttribute("value") == "x"
  ) {
    alert("Player X wins");
  } else if (
    document.getElementById("j").getAttribute("value") == "x" &&
    document.getElementById("h").getAttribute("value") == "x" &&
    document.getElementById("k").getAttribute("value") == "x"
  ) {
    alert("Player X wins");
  } else if (
    document.getElementById("a").getAttribute("value") == "x" &&
    document.getElementById("d").getAttribute("value") == "x" &&
    document.getElementById("j").getAttribute("value") == "x"
  ) {
    alert("Player X wins");
  } else if (
    document.getElementById("b").getAttribute("value") == "x" &&
    document.getElementById("e").getAttribute("value") == "x" &&
    document.getElementById("h").getAttribute("value") == "x"
  ) {
    alert("Player X wins");
  } else if (
    document.getElementById("c").getAttribute("value") == "x" &&
    document.getElementById("f").getAttribute("value") == "x" &&
    document.getElementById("k").getAttribute("value") == "x"
  ) {
    alert("Player X wins");
  } else if (
    document.getElementById("a").getAttribute("value") == "x" &&
    document.getElementById("e").getAttribute("value") == "x" &&
    document.getElementById("k").getAttribute("value") == "x"
  ) {
    alert("Player X wins");
  } else if (
    document.getElementById("c").getAttribute("value") == "x" &&
    document.getElementById("e").getAttribute("value") == "x" &&
    document.getElementById("j").getAttribute("value") == "x"
  ) {
    alert("Player X wins");
  }
  // the O case
  else if (
    document.getElementById("a").getAttribute("value") == "o" &&
    document.getElementById("b").getAttribute("value") == "o" &&
    document.getElementById("c").getAttribute("value") == "o"
  ) {
    alert("Player O wins");
  } else if (
    document.getElementById("d").getAttribute("value") == "o" &&
    document.getElementById("e").getAttribute("value") == "o" &&
    document.getElementById("f").getAttribute("value") == "o"
  ) {
    alert("Player O wins");
  } else if (
    document.getElementById("j").getAttribute("value") == "o" &&
    document.getElementById("h").getAttribute("value") == "o" &&
    document.getElementById("k").getAttribute("value") == "o"
  ) {
    alert("Player O wins");
  } else if (
    document.getElementById("a").getAttribute("value") == "o" &&
    document.getElementById("d").getAttribute("value") == "o" &&
    document.getElementById("j").getAttribute("value") == "o"
  ) {
    alert("Player O wins");
  } else if (
    document.getElementById("b").getAttribute("value") == "o" &&
    document.getElementById("e").getAttribute("value") == "o" &&
    document.getElementById("h").getAttribute("value") == "o"
  ) {
    alert("Player O wins");
  } else if (
    document.getElementById("c").getAttribute("value") == "o" &&
    document.getElementById("f").getAttribute("value") == "o" &&
    document.getElementById("k").getAttribute("value") == "o"
  ) {
    alert("Player O wins");
  } else if (
    document.getElementById("a").getAttribute("value") == "o" &&
    document.getElementById("e").getAttribute("value") == "o" &&
    document.getElementById("k").getAttribute("value") == "o"
  ) {
    alert("Player O wins");
  } else if (
    document.getElementById("c").getAttribute("value") == "o" &&
    document.getElementById("e").getAttribute("value") == "o" &&
    document.getElementById("j").getAttribute("value") == "o"
  ) {
    alert("Player O wins");
  }
}

function divId(clickedID) {
  // if the div's value is 0 you can append here and set the value to 1
  if (document.getElementById(clickedID).getAttribute("value") == 0) {
    currentId = clickedID;
    console.log(currentId);
    // var divValue = document.getElementById(currentId).getAttribute("value");
    // console.log(divValue);
    if (counter % 2 !== 0) {
      $("#" + currentId).append(x);
      counter++;

      document.getElementById(currentId).setAttribute("value", "x");
      check();
    } else {
      $("#" + currentId).append(o);
      counter++;
      document.getElementById(currentId).setAttribute("value", "o");
      check();
    }
  }
}

var a = $("#a");
var b = $("#b");
var c = $("#c");
var d = $("#d");
var e = $("#e");
var f = $("#f");
var j = $("#j");
var h = $("#h");
var k = $("#k");

// if (
//   $("#a").getAttribute("value") == "x" &&
//   $("#b").getAttribute("value") == "x" &&
//   $("#c").getAttribute("value") == "x"
// ) {
//   alert("Player X wins");
// }
