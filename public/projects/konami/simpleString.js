var simpleString = 'password';
var keysPressed = [];

window.addEventListener( 'keydown', ( e ) => {
  keysPressed.push( e.key );
  keysPressed.splice( ( -simpleString.length -1 ), ( keysPressed.length - simpleString.length ) );
  if ( keysPressed.join( '' ) === simpleString ) {
    cornify_add();
  }
});