var title = document.querySelectorAll('h1');
var subHeadings = document.querySelectorAll('h3');
var dubSubHeadings = document.querySelectorAll('h4');
var a = [title, subHeadings, dubSubHeadings];

// 9 LOC
function collapse(x) {
  for(i=0; i<x.length; i++) {
    x[i].addEventListener("click", function(){
      if(window.getComputedStyle(this.nextElementSibling).getPropertyValue('display') === 'block') {
        this.nextElementSibling.style.display = 'none';
      } else { this.nextElementSibling.style.display = 'block';}
    })
  };
}

// 5 LOC
function accordion(a){
  for(i in a) {
    collapse(a[i]);
  }
}

accordion(a);
