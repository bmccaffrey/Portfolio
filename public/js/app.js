var title = document.querySelectorAll('h1');
var subHeadings = document.querySelectorAll('h3');
var dubSubHeadings = document.querySelectorAll('h4');
var a = [title, subHeadings, dubSubHeadings]; // returns NodeList
var icon = document.getElementsByClassName('arrow');
var stuff = document.querySelectorAll('.arrow');
var inactive = 'svg-inline--fa fa-angle-left fa-w-8 arrow';
var active = 'svg-inline--fa fa-angle-down fa-w-8 arrow';

// function activate() {
//   icon.setAttribute('class', active);
//   for (i=0; i<x.length; i++) {
//     x[i].
//   // }
// }
// 14 LOC -- assigns EL to all x[i]s of a specific type
function collapse(x) {
  for(i=0; i<x.length; i++) {
    x[i].addEventListener("click", function(){
      if(window.getComputedStyle(this.nextElementSibling).getPropertyValue('display') === 'block') {
        this.nextElementSibling.style.display = 'none';
      } else { this.nextElementSibling.style.display = 'block';}
    })
    x[i].addEventListener('click', function(){
      if (this.firstElementChild.className.animVal === inactive) {
         this.firstElementChild.setAttribute('class', active);
       } else { this.firstElementChild.setAttribute('class', inactive);}
    })
  };
}

// 5 LOC -- iterates thru nodelist invoking collapse 
function accordion(a){
  for(i in a) {
    collapse(a[i]);
  }
}

accordion(a);
