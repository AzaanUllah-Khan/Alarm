var hour = document.getElementById("hour");
var min = document.getElementById("min");
var day = document.getElementById("day");
var checkbox = document.getElementById("trls");

function alarm() {
  document.getElementById('a').play();
  document.getElementById('alarmm').style.right = '10px';
}

function check() {
  var d = new Date();
  var rh = d.getHours();
  var rm = d.getMinutes();

  if (
    (hour.value == rh && min.value == rm) &&
    (day.value.toLowerCase() === d.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() ||
      day.value.toLowerCase() === 'all') &&
    checkbox.checked
  ) {
    alarm();
  }
}

check();
var intervalId = setInterval(check, 1000);

function set() {
  document.getElementById('a').pause();
  document.getElementById('alarmm').style.right = '-1000px';
  alert('now Alarm will ring after 5 minutes')
  setTimeout(function () {
    alarm();
  }, 300000);
  clearInterval(intervalId);
}

function stop() {
  checkbox.checked = false;
  document.getElementById('a').pause();
  document.getElementById('alarmm').style.right = '-1000px';
  clearInterval(intervalId);
  day.value = '';
}
