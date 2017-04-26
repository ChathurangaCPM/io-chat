// function loadXMLDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.responseType = 'json';
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       // document.getElementById("demo").innerHTML =
//       // this.responseText;
//       console.log(this.response);
//     }
//   };
//   xhttp.open("GET", "http://api.duckduckgo.com/?q=chathuranga&format=json", true);
//   xhttp.send();
// }

var isBrowserTabActive;
$(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");
    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
                // do work
                isBrowserTabActive = false;
                break;
            case "focus":
                // do work
                isBrowserTabActive = true;
                break;
        }
    }

    $(this).data("prevType", e.type);
})

var socket	      		=	io.connect();
var $message 		  	=	$('#message');
var $chat	 		    =	$('.chatwrapper');

var	$messageAre 		=	$('#messageAre');
var	$userFormAre 		=	$('#userFormAre');
var	$userForm 	 		=	$('#userForm');
var	$users  	 		=	$('.onlineuserswrapper');
var	$username  	 		=	$('#username');
var	$emoji  	 		=	$('#emoji');
var	$emojiwrapper 		=	$('.emojiwrapper');

var username;
 
$message.keypress(function(e){
  if(e.keyCode == 13){
     var cleardata = $message.val();
		var sendRedy  = cleardata.replace(/<\/?[^>]+(>|$)/g, "");

		if(sendRedy){
			socket.emit('send message', sendRedy);
			$message.val('');
		}
  }else{
  	// IS typing some user
  	socket.emit('is-typing', {username: username});
  }
});
// function you can use:
function getSecondPart(str) {
    return str.split(':search')[1];
}

$emoji.on('click', function(e){
	$emojiwrapper.toggle();
});

$emojiwrapper.find('img').on('click', function(){
	var clickedval	=	$(this).attr('data-code');
	$message.val(clickedval).focus();
	$emojiwrapper.toggle();
});

var myFunction = function() {
  // alert('Click function');
};
var myImg = "https://unsplash.it/600/600?image=777";


$(function(){

	socket.on('new message', function(data){
		var datamessage	=	data.msg;

		// use the function:
		if(getSecondPart(datamessage) != undefined){
			// console.log(getSecondPart(datamessage));
			setdocu	=	'http://api.duckduckgo.com/?q='+datamessage+'&format=json';
			$.getJSON(setdocu, function(result){
	            $.each(result, function(i, field){
	            	console.log(field);
	                // $("div").append(field + " ");
	            });
	        });
		}


		if(/^[a-zA-Z0-9- ]*$/.test(datamessage) == false) {
			lengthofmsg = datamessage.length;
			if(lengthofmsg < 3){
		    	classchat	=	'singleemoji';
			}else{
				classchat	=	'emojiwithtext';
			}
		}else{
			classchat	=	'';
		}
		var message = data.msg;

		message = message.toLowerCase().replace(':)', '<img src="img/emoji/1f642.png" class="img-responsive" />');
		message = message.toLowerCase().replace(':(', '<img src="img/emoji/2639.png" class="img-responsive" />');
		message = message.toLowerCase().replace(':p', '<img src="img/emoji/1f61b.png" class="img-responsive" />');
		// message = message.replace(':p', '<img src="img/emoji/1f61b.png" class="img-responsive" />');
		message = message.toLowerCase().replace(';)', '<img src="img/emoji/1f609.png" class="img-responsive" />');
		message = message.toLowerCase().replace('d)', '<img src="img/emoji/1f60e.png" class="img-responsive" />');
		// message = message.toLowerCase().replace('8)', '<img src="img/emoji/1f60e.png" class="img-responsive" />');
		message = message.toLowerCase().replace('d:', '<img src="img/emoji/1f627.png" class="img-responsive" />');
		message = message.toLowerCase().replace(':d', '<img src="img/emoji/1f62c.png" class="img-responsive" />');
		message = message.toLowerCase().replace('=)', '<img src="img/emoji/1f603.png" class="img-responsive" />');
		message = message.toLowerCase().replace(':/', '<img src="img/emoji/1f615.png" class="img-responsive" />');
		message = message.toLowerCase().replace(':angel', '<img style="width: 47px;" src="img/emoji/skype/angel.gif" class="img-responsive" />');

		

		var currentdate = new Date(); 
		var datetime =	 currentdate.getDate() + "/"
		                + (currentdate.getMonth()+1)  + "/" 
		                + currentdate.getFullYear() + " @ "  
		                + currentdate.getHours() + ":"  
		                + currentdate.getMinutes();

		if(data.user !== username){
			var clientmsg 	= '<div class="chatrow '+ classchat +' clientmsg animated zoomIn"><div class="userImg"><img src="img/man.jpg" class="img-responsive" alt="" title="" alt=""></div><div class="chatinfor"><span>'+data.user+'</span><div class="chatarea">'+message+'</div><small><i>'+datetime+'</i></small></div></div>';

			var options = {
			    title:data.user,
			    options: {
			      body: message,
			      icon: myImg,
			      lang: 'en-US',
			      onClick: myFunction
			    }
			  };
			  // console.log(options);
			  if(!isBrowserTabActive)
			  	$("#easyNotify").easyNotify(options);
		}else{
			var clientmsg 	= '<div class="chatrow selfmsg '+ classchat +' animated zoomIn"><div class="chatinfor"><span>You</span><div class="chatarea">'+message+'</div><small><i>'+datetime+'</i></small></div><div class="userImg"><img src="img/man.jpg" class="img-responsive" alt="" title="" alt=""></div></div>';;
		}

		$chat.append(clientmsg);

		$chat.animate({scrollTop:$chat[0].scrollHeight}, 'slow');
	});

	$userForm.submit(function(e){
		e.preventDefault();
		username = $username.val();
		if (username == '' || username == ' ') {
			$username.css("border", "1px solid red");
		}else{
			socket.emit('new user', $username.val(), function(data){
				if(data){
					$userFormAre.hide();
					$messageAre.show();	
				}
			});
			$username.val('');
		}
	});

	socket.on('get users', function(data){
		var html 	=	'';
		for (i = 0; i < data.length; i++) {
			html += '<div class="sinrow"><div class="userImg"><img src="img/man.jpg" class="img-responsive" alt="" title="" alt=""></div><span>'+data[i]+'</span></div>';
		}
		$users.html(html);
	});

	socket.on('is-typing-client', function(data){
		if(username !== data.username){
			$('#istyping').show().html('<span class="animated bounceIn">' + data.username + ' is Typing</span>');
			setTimeout(function(){ $('#istyping').html('').hide(); }, 2000);
		}
	});

	socket.on('get single user', function(data){
		if (data != null) {
			$('.newcon').show().html('<span class="newconnection animated bounceIn">'+data+' is now connected with your conversation</span>');
			setTimeout(function(){
				$('.newcon').hide();
			}, 8000);
		}
	});
});