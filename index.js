var day = document.getElementById('getd');
var day2 = document.getElementById('getd2');
var hour = document.getElementById('hour');
var hour2 = document.getElementById('hour2');
var mins = document.getElementById('mins');
var mins2 = document.getElementById('mins2');
var sec = document.getElementById('sec');
var sec2 = document.getElementById('sec2');
var month = document.getElementById('months');
var month2 = document.getElementById('months2');
setInterval(getDatee)


function getDatee() {
    let d = new Date();
    day.innerHTML = d.getDate()
    day2.innerHTML = d.getDate()
    hour.innerHTML = d.getHours()
    hour2.innerHTML = d.getHours()
    mins.innerHTML = d.getMinutes()
    mins2.innerHTML = d.getMinutes()
    sec.innerHTML = d.getSeconds()
    sec2.innerHTML = d.getSeconds()
    getMont()

}

function getMont() {
    let d = new Date();
    month.innerHTML = d.getMonth() + 1;
    month2.innerHTML = d.getMonth() + 1;
}