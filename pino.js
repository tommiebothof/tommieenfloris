var kiezer = document.getElementById("select1");
kiezer.addEventListener("click", veranderKleur);

function veranderKleur() {
  var kiezerKeuze = kiezer.value;
  var tekst = document.getElementById("tekst");
  tekst.style.color = kiezerKeuze;
}
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
