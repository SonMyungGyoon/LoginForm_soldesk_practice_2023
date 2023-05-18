var input_id;
var input_pw;
var reg_gender;
var gender = "";
var clock_time;
var timebox;
window.onload = function () {
  input_id = document.getElementById("input_id");
  input_pw = document.getElementById("input_pw");
  clock_time = document.getElementById("clock_box");
  timebox = document.getElementById("timer-time");

  init();
};

function getTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const seconds = now.getSeconds();
  var now_date = "<h2>" + year + " 년 " + month + " 월 " + date + " 일</h2>";
  var now_clock = "<h1>" + hours + " : " + minutes + " : " + seconds + "</h1>";
  clock_time.innerHTML = now_date + now_clock;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

function user_login() {
  if (input_id.value == "cat" && input_pw.value == "1234") {
    input_box = document.getElementById("input_box2");
    login_input.style.display = "none";
    alert(input_id.value + "님 환영합니다!");
    input_box.innerHTML = "<h2>" + input_id.value + "님 환영합니다!</h2>";
  } else {
    alert("로그인 실패..");
  }
}
var timer_sec;
var now_min;
var now_sec;
function timer() {
  timer_sec = 240;
  timebox.innerHTML = sectoMinSec(timer_sec);
  setInterval(x, 1000);
}
function x() {
  timer_sec = timer_sec - 1;
  // timebox.innerHTML = now_min + " : " + now_sec;
  if (timer_sec <= 0) {
    timebox.innerHTML = "라면 불 꺼!";
  } else {
    timebox.innerHTML = sectoMinSec(timer_sec);
  }
}
function sectoMinSec(sec) {
  var min_var = "";
  var sec_var = "";
  if (parseInt(sec / 60) < 10) {
    if (parseInt(sec / 60) == 0) {
      min_var = "00";
    } else {
      min_var = "0" + parseInt(sec / 60);
    }
  } else {
    min_var = parseInt(sec / 60);
  }
  if (sec % 60 < 10) {
    if (sec % 60 == 0) {
      sec_var = "00";
    } else {
      sec_var = "0" + (sec % 60);
    }
  } else {
    sec_var = sec % 60;
  }
  return min_var + " : " + sec_var;
}
