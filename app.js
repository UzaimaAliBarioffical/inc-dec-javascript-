let num = 0;
let htmlNumber = document.getElementById("number");
function incOprater() {
  num++;
  htmlNumber.innerHTML = num;
}
function decOprater() {
  num--;
  htmlNumber.innerHTML = num;
}
function restButton() {
  num = 0;
  htmlNumber.innerHTML = num;
}
