"use strict";
var expanders = Array.from( document.getElementsByClassName('expand'));
var arrows = document.getElementsByClassName('arrows');

function unhide() {
  this.nextElementSibling.classList.toggle('hidden');
}

function toggleArrow(){
  if (this.firstElementChild.style.cssText) {
    this.firstElementChild.style.cssText = null;
  } else{
    this.firstElementChild.style.transform = 'rotate(-90deg)';
  }
}

expanders.forEach(element => element.addEventListener('click', unhide));
expanders.forEach(element => element.addEventListener('click', toggleArrow));