
let isim = prompt("Isminizi giriniz lütfen");
let myName = document.getElementById("myName");
myName.innerHTML = isim;
setInterval(showTime, 1000);

function showTime() {
    let dt = new Date();
    document.getElementById("myClock").innerHTML = dt.toLocaleTimeString() + " " + dt.toLocaleDateString('tr-TR', {weekday:'long'});
}