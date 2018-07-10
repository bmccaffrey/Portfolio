var word = document.querySelector('.word');
var inputElements = document.querySelector('.input-elements');

function replaceVowels () {
  const regex = /a|e|i|o|u/gi;
  var header = document.createElement('h1');
  header.innerText = word.value.replace(regex, '');
  document.body.insertBefore(header, inputElements);
}

word.addEventListener('change', replaceVowels);
