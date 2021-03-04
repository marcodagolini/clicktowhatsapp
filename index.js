alert("ciao");



var style = document.createElement('style');
style.type = 'text/css';
var myCSS = '.div-click-wa {border-style: solid;border-width: 5px;border-color: green;height: 200px;width: 350px;}.text-click-wa {color: green;font-size: 20px;text-align: center;margin-block-start: 0.1em;margin-block-end: 0em;margin-inline-start: 0.1px;margin-inline-end: 0px;}.wa-number {border-style: solid;border-width: 3px;border-color: green;font-size: 20px;color: green;height: 28px;width: 150px;margin: 10px 5px 15px 0px;}.custom-select {position: relative;font-family: Arial;}.custom-select select {display: none;}.select-selected {background-color: green;}.select-selected:after {position: absolute;content: "";top: 14px;right: 10px;width: 0;height: 0;border: 6px solid transparent;border-color: #fff transparent transparent transparent;}.select-selected.select-arrow-active:after {border-color: transparent transparent #fff transparent;top: 7px;}.select-items div,.select-selected {color: #ffffff;padding: 8px 16px;border: 1px solid transparent;border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;cursor: pointer;user-select: none;}.select-items {position: absolute;background-color: green;top: 100%;left: 0;right: 0;z-index: 99;}.select-hide {display: none;}.select-items div:hover, .same-as-selected {background-color: rgba(0, 0, 0, 0.1);}';


style.innerHTML = myCSS;
document.getElementsByTagName('head')[0].appendChild(style);

document.getElementById("wa-number").addEventListener("click", function() {alert("ciao")});

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

