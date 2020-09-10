alert("druk op ok om naar rare dieren te kijken");
state = 0
function klik() {
  var aapje = document.getElementById("aapje");
  if(state == 0){
    aapje.style.visibility = "visible";
    state = 1;
  }
  else{
    aapje.style.visibility = "hidden";
    state = 0;
}
var yee = document.getElementById("bruh");
bruh.play();
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function doneren1() {
  alert("bedankt voor het doneeren van $100,-");
  console.log("doneren1");
  document.getElementById("bedankt1").style.visibility="visible";
}
function doneren2() { alert("bedankt voor het doneren van $200,-");
  console.log("doneren2");
  document.getElementById("bedankt2").style.visibility="visible";
}
function doneren3() { alert("bedankt voor het doneren van $1.000,-");
  console.log("doneren3");
  document.getElementById("bedankt3").style.visibility="visible";
}
function yeee() {
  var jelmer = document.getElementById("jelmer");
  if(state == 0){
    jelmer.style.visibility = "visible";
    state = 1;
  }

  var yee = document.getElementById("yee");
  yee.play();
}
function win100(){
  alert("je hebt geen $100 gewonnen");

}
function win1000(){
  alert("je hebt geen $1000 gewonnen");
}
function rechts() {
  var elem = document.getElementById("jelmer");
  var pos = 400;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 1000) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
function lef() {
  var elem = document.getElementById("jelmer");
  var pos = 400;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 50) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.left = pos + 'px';
    }
  }
}
function up() {
  var elem = document.getElementById("jelmer");
  var pos = 400;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == -400) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + 'px';
    }
  }
}
function down() {
  var elem = document.getElementById("jelmer");
  var pos = 400;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 770) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
    }
  }
}
