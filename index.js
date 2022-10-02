searchfor = document.querySelector("#search");

navbarTop = document.querySelector("#navbarTop>div>img");

anchors = document.querySelectorAll("#navbarTop li a");

navbarBottom = document.querySelector("#navbarBottom");

var modal = document.getElementById("myModal");
var modal2 = document.getElementById("feedbackmyModal");
var signinmodal = document.getElementById("signInmyModal");

var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("feedbackmyBtn");
var signin = document.getElementById("signIn");

var playbt = document.querySelector("#myBtn+i");
var playbt2 = document.querySelector("#feedbackmyBtn+i");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

btn.onclick = function () {
  modal.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};
signin.onclick = function (event) {
  event.preventDefault();
  signinmodal.style.display = "block";
};

playbt.onclick = function () {
  modal.style.display = "block";
};
playbt2.onclick = function () {
  modal2.style.display = "block";
};

span.onclick = function () {
  signinmodal.style.display = "none";
};

span2.onclick = function () {
  modal.style.display = "none";
};

span3.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop >= 20) {
    navbarTop.src =
      "https://logos-world.net/wp-content/uploads/2020/12/Fiverr-Logo-2020-present.png";

    document.querySelector(" ul>a:last-child").style.color = "green";

    document.querySelector("#navigations").style.backgroundColor = "white";

    anchors.forEach(function (el) {
      el.style.color = "black";
    });
  } else {
    navbarTop.src =
      "https://companieslogo.com/img/orig/FVRR_BIG.D-b3412798.png?t=1633676851";

    document.querySelector(" ul>a:last-child").style.color = "";

    document.querySelector("#navigations").style.backgroundColor = "";

    anchors.forEach(function (el) {
      el.style.color = "white";
    });
  }
  if (scrollTop >= 150) {
    searchfor.style.visibility = "visible";
    navbarBottom.style.display = "block";
  } else {
    searchfor.style.visibility = "hidden";
    navbarBottom.style.display = "none";
  }
});
