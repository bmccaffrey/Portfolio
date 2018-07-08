var expanders = Array.from(document.getElementsByClassName('expand'));

function unhide() {
  this.nextElementSibling.classList.toggle('hidden');
}

function accordion() {
  expanders.forEach(element => element.addEventListener('click', unhide));
}

accordion();