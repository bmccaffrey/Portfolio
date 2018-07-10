// Konami Code: up, up, down, down, left, right, left, right, B, A

/*
There are a few different ways to do this:
*/

var konami = [ 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a' ];

var keysPressed = [];

window.addEventListener( 'keydown', ( e ) => {
  keysPressed.push( e.key );
  keysPressed.splice( ( -konami.length -1 ) , ( keysPressed.length - konami.length ) );

  if ( keysPressed.join( '' ) === konami.join( '' )) {
    cornify_add();
  }
});