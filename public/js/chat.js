$(document).on("ready",start);
var name= "";
function start() {
	$('#hodor-send').on("click",send);
	$('.hodor-send').on("click",logged);
	listenEnter();
	autoSet();
	requestMsj();
}



function clean(){
	$('textarea').val("");
}
function hideAndShow(hiden,shows){
	$('.'+hiden).hide("slow");
	$('.'+shows).show("slide");
}
function send2(){
	$('.hided').hide("slow");
	hideAndShow('asd','hided2');
	if(name == "")
	textCont.append("<br> <p class='text-chat'><b>Hodor</b>: "+textRecived+"</p>");
	else
		textCont.append("<br> <p class='text-chat'><b>"+name+"</b>: "+textRecived+"</p>");
	clean();
	setTimeout(hodor,3000);
}
var send = function(){
	var mjss = $('.second-text').val()
	//console.log(mjss);
	var hod = new Array("Hodor","Hodor!","Hodor?","Hodor huh","Hodor Hodor Huh","Hodor Hodor Hodor Hodor", "Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Huh", "Huh Hodor Hodor");
	var hodorSay =  hod[Math.round(Math.random() * (hod.length - 1 ))];
	var xhr = $.post('/mensajes/new',{
		msj : mjss,
		aut : name,
		hodor: hodorSay
	});

	xhr.done(function(data){
		console.log(data)
	});

	xhr.fail(function(data){
		console.log(data)
		throw "Error";
	});

	clean();
}

var requestMsj = function(){
	var textCont = $('.prin-chat');
	var xhr = $.get('/mensajes/list');
	xhr.done(function(data){
		textCont.html('');
		data.forEach(function(mensaje){
			if(mensaje.name == "")
			textCont.append("<br> <p class='text-chat'><b>Hodor</b>: "+mensaje.hodor+"<small>("+mensaje.msj+")</small></p>");
			else
			textCont.append("<br> <p class='text-chat'><b>"+mensaje.name+"</b>: "+mensaje.hodor+"<small>("+mensaje.msj+")</small></p>");
		});
		requestMsj();
	});
}

function autoSet(){
	
	if(!$('#user_name').is(":visible")){
		hideAndShow('absolute_center','wrap-chat,.wrap-send');
		
	}
	
		
}


function logged(){
	if(!$('#names').text(' ')){
			$('#names').attr("placeholder","HODOR!(your name)")
		}
		else{
			name = $('#names').val();
			$('body').removeClass('darkBack')
			hideAndShow('absolute_center','wrap-chat,.wrap-send');
			$('footer').show();	
		}
}

	function listenEnter(){
   		 $(document).keypress(function(e) {
	    if(e.which == 13) {
	       // alert('You pressed enter!');
	       logged();
	   	 		}
		});
	}

