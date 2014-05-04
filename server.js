// setting server
var express = require('express'),
	app 	= express();
	server 	= require('http').createServer(app);
	io 		= require('socket.io').listen(server),
	cons 	= require('consolidate'),
	swig 	= require('swig'),
	

	swig.init({ 
		cache:false
	});

// Listen Port
server.listen(3000);
// Render Engine
app.engine('.html',cons.swig);
app.set('view engine','html');
app.set('views','./views');


//Static Files
app.use(express.static('./public'));
app.use(express.bodyParser());

/* Variales  */
var msj = [], resp = [],aut,hodor;

app.get('/', function(req, res) {
	res.render('index');
	msj : msj;
	aut : aut
	hodor:hodor
});
;

io.sockets.on('connection', function(socket){
  socket.emit('connected');

  socket.on('click',function(){
  		console.log("click");
  })
  //Evento creado por nosotros se puede llamar 'pepito'
});

app.post('/mensajes/new',function(req, res){
	//msj.push(req.body.msj);
	msj.push({name:req.body.aut, hodor:req.body.hodor, msj:req.body.msj})

	resp.forEach(function(res){
		res.send(msj);
	});

	res.send(req.body.mensaje);
});

app.get('/mensajes/list',function(req,res){
	resp.push(res);
});
