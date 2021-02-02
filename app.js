var currentId;
var counter = 1;

var x = `<div id="center">
<div id="x1"></div>
<div id="x2"></div>
</div>`;
var o = `<div id="container"><div class="o"></div></div>`;

function check() {
  if (
    document.getElementById("a").getAttribute("value") == "0" ||
    document.getElementById("b").getAttribute("value") == "0" ||
    document.getElementById("c").getAttribute("value") == "0" ||
    document.getElementById("d").getAttribute("value") == "0" ||
    document.getElementById("e").getAttribute("value") == "0" ||
    document.getElementById("f").getAttribute("value") == "0" ||
    document.getElementById("j").getAttribute("value") == "0" ||
    document.getElementById("h").getAttribute("value") == "0" ||
    document.getElementById("k").getAttribute("value") == "0"
  ) {
    if (
      document.getElementById("a").getAttribute("value") == "x" &&
      document.getElementById("b").getAttribute("value") == "x" &&
      document.getElementById("c").getAttribute("value") == "x"
    ) {
      Swal.fire({
        title: "Player X won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://kilbyfox.co.uk/wp-content/uploads/2018/03/winner.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("d").getAttribute("value") == "x" &&
      document.getElementById("e").getAttribute("value") == "x" &&
      document.getElementById("f").getAttribute("value") == "x"
    ) {
      Swal.fire({
        title: "Player X won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://kilbyfox.co.uk/wp-content/uploads/2018/03/winner.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("j").getAttribute("value") == "x" &&
      document.getElementById("h").getAttribute("value") == "x" &&
      document.getElementById("k").getAttribute("value") == "x"
    ) {
      Swal.fire({
        title: "Player X won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://kilbyfox.co.uk/wp-content/uploads/2018/03/winner.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("a").getAttribute("value") == "x" &&
      document.getElementById("d").getAttribute("value") == "x" &&
      document.getElementById("j").getAttribute("value") == "x"
    ) {
      Swal.fire({
        title: "Player X won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://kilbyfox.co.uk/wp-content/uploads/2018/03/winner.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("b").getAttribute("value") == "x" &&
      document.getElementById("e").getAttribute("value") == "x" &&
      document.getElementById("h").getAttribute("value") == "x"
    ) {
      Swal.fire({
        title: "Player X won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://kilbyfox.co.uk/wp-content/uploads/2018/03/winner.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("c").getAttribute("value") == "x" &&
      document.getElementById("f").getAttribute("value") == "x" &&
      document.getElementById("k").getAttribute("value") == "x"
    ) {
      Swal.fire({
        title: "Player X won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://kilbyfox.co.uk/wp-content/uploads/2018/03/winner.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("a").getAttribute("value") == "x" &&
      document.getElementById("e").getAttribute("value") == "x" &&
      document.getElementById("k").getAttribute("value") == "x"
    ) {
      Swal.fire({
        title: "Player X won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://kilbyfox.co.uk/wp-content/uploads/2018/03/winner.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("c").getAttribute("value") == "x" &&
      document.getElementById("e").getAttribute("value") == "x" &&
      document.getElementById("j").getAttribute("value") == "x"
    ) {
      Swal.fire({
        title: "Player X won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://kilbyfox.co.uk/wp-content/uploads/2018/03/winner.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    }
    // the O case
    else if (
      document.getElementById("a").getAttribute("value") == "o" &&
      document.getElementById("b").getAttribute("value") == "o" &&
      document.getElementById("c").getAttribute("value") == "o"
    ) {
      Swal.fire({
        title: "Player O won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://leo-daniel.github.io/face-off/assets/images/winner-2.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("d").getAttribute("value") == "o" &&
      document.getElementById("e").getAttribute("value") == "o" &&
      document.getElementById("f").getAttribute("value") == "o"
    ) {
      Swal.fire({
        title: "Player O won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://leo-daniel.github.io/face-off/assets/images/winner-2.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("j").getAttribute("value") == "o" &&
      document.getElementById("h").getAttribute("value") == "o" &&
      document.getElementById("k").getAttribute("value") == "o"
    ) {
      Swal.fire({
        title: "Player O won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://leo-daniel.github.io/face-off/assets/images/winner-2.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("a").getAttribute("value") == "o" &&
      document.getElementById("d").getAttribute("value") == "o" &&
      document.getElementById("j").getAttribute("value") == "o"
    ) {
      Swal.fire({
        title: "Player O won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://leo-daniel.github.io/face-off/assets/images/winner-2.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("b").getAttribute("value") == "o" &&
      document.getElementById("e").getAttribute("value") == "o" &&
      document.getElementById("h").getAttribute("value") == "o"
    ) {
      Swal.fire({
        title: "Player O won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://leo-daniel.github.io/face-off/assets/images/winner-2.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("c").getAttribute("value") == "o" &&
      document.getElementById("f").getAttribute("value") == "o" &&
      document.getElementById("k").getAttribute("value") == "o"
    ) {
      Swal.fire({
        title: "Player O won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://leo-daniel.github.io/face-off/assets/images/winner-2.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("a").getAttribute("value") == "o" &&
      document.getElementById("e").getAttribute("value") == "o" &&
      document.getElementById("k").getAttribute("value") == "o"
    ) {
      Swal.fire({
        title: "Player O won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://leo-daniel.github.io/face-off/assets/images/winner-2.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    } else if (
      document.getElementById("c").getAttribute("value") == "o" &&
      document.getElementById("e").getAttribute("value") == "o" &&
      document.getElementById("j").getAttribute("value") == "o"
    ) {
      Swal.fire({
        title: "Player O won!",
        text: "Click Ok to play again.",
        imageUrl:
          "https://leo-daniel.github.io/face-off/assets/images/winner-2.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "",
      }).then((e) => location.reload());
    }
  } else {
    Swal.fire({
      title: "Opps that is a draw",
      text: "Click Ok to play again.",
      imageUrl:
        "https://images.assetsdelivery.com/compings_v2/blankstock/blankstock1903/blankstock190304143.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "",
    }).then((e) => location.reload());
  }
}

function divId(clickedID) {
  // if the div's value is 0 you can append here and set the value to 1
  if (document.getElementById(clickedID).getAttribute("value") == 0) {
    currentId = clickedID;
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
