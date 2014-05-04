
var socket = io.connect('http://localhost');

// Connected to host
socket.on('connected', function () {
      console.log('Conectado!');
     // toggle();
    });
 
// disconnect to host
socket.on('disconnect', function () {
      console.log('Desconectado!');
     // toggle();
      });
