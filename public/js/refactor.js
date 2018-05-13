var title = document.querySelectorAll('h1');
var sub = document.querySelectorAll('h3');
var skills = sub[2];
var dubSub = document.querySelectorAll('h4');

function accordion(x) {
  for(i=0; i<x.length; i++) {
    x[i].addEventListener("click", function(){
      if(window.getComputedStyle(this.nextElementSibling).getPropertyValue('display') === 'block') {
        this.nextElementSibling.style.display = 'none';
      } else { this.nextElementSibling.style.display = 'block';}
    })
  };
}

for(i=0; i<title.length; i++) {
  title[i].addEventListener("click", function(){
    if(window.getComputedStyle(this.nextElementSibling).getPropertyValue('display') === 'block') {
      this.nextElementSibling.style.display = 'none';
    } else { this.nextElementSibling.style.display = 'block';}
  })
};

for(i=0; i<sub.length; i++) {
  sub[i].addEventListener("click", function() {
    if(window.getComputedStyle(this.nextElementSibling).getPropertyValue('display') === 'block') {
      this.nextElementSibling.style.display = 'none';
    } else { this.nextElementSibling.style.display = 'block';}
  })
};

for(i=0; i<dubSub.length; i++) {
  dubSub[i].addEventListener("click", function() {
    if(window.getComputedStyle(this.nextElementSibling).getPropertyValue('display') === 'block') {
      this.nextElementSibling.style.display = 'none';
    } else { this.nextElementSibling.style.display = 'block';}
  })
}
