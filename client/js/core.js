var emocode 		= [];
var emocode_skype 	= [];
var socket	      		=	io.connect();
var $message 		  	=	$('#message');
var $chat	 		    =	$('.chatwrapper');

var	$messageAre 		=	$('#messageAre');
var	$userFormAre 		=	$('#userFormAre');
var	$userForm 	 		=	$('#userForm');
var	$users  	 		=	$('.onlineuserswrapper');
var	$username  	 		=	$('#username');

var	$sinrow 			=	$('.sinrow');

var cookiename 			= 	Cookies.get('name');

var username;

// if (annyang) {
//   // Let's define our first command. First the text we expect, and then the function it should call
// 	var commands = {
// 		'open emoji': function() {
// 	 		$emojiwrapper.toggle();
// 		},
// 		'skype': function() {
// 			$emojiwrapper.show();
// 			$emojiwrapper.find('i.fa-skype').trigger('click');
// 		},
// 		'type that *tags' = typemesg;
// 	};
// 	annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
// 	  console.log(userSaid); // sample output: 'hello'
// 	  //console.log(commandText); // sample output: 'hello (there)'
// 	  //console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
// 	});

// 	var typemesg(tag) = function(){
// 		console.log(tag);
// 	}

//   // Add our commands to annyang
//   annyang.addCommands(commands);

//   // Start listening. You can call this here, or attach this call to an event, button, etc.
//   annyang.start();
// }


// function you can use:
function getSecondPart(str) {
    return str.split(':search')[1];
}

var myImg = "https://unsplash.it/600/600?image=777";


$(function(){
	$message.keypress(function(e){
		if(e.keyCode == 13){
			sendmessage();
		}else{
			// IS typing some user
			// console.log(socket.id);
			socket.emit('is-typing', {username: username});
		}
	});
	
	function sendmessage(){
		var cleardata = $message.val();
		var sendRedy  = cleardata.replace(/<\/?[^>]+(>|$)/g, "");

		if(sendRedy){
			socket.emit('send message', sendRedy);
			$message.val('');
		}
	}

	socket.on('new message', function(data){
		var datamessage		=	data.msg;
		var datamessagelower=	datamessage.toLowerCase();
		var soketid			=	data.socket;
		// console.log(soketid);
		htmlemotions = replaceEmotions(datamessagelower);
		var emocode = [':)',';)',':(','>:o',':d',':\'(',':o',':p', 'b)',':x',':s',':$',':*',':/','<3',':&',':>','=d'];
		var emocode_skype = [':_angel',':_angry',':_bandit',':_bhangra',':_bike',':_blush',':_bow',':_bug',':_bunny',':_busyday',':_call',':_cat',':_champagne',':_chappal',':_clap',':_computerrage',':_cool',':_cry',':_cwl',':_dance',':_discodancer',':_disgust',':_dog',':_doh',':_donkey',':_donttalktome',':_dream',':_drink',':_drunk',':_dull',':_eg',':_emo',':_envy',':_facepalm',':_fallinlove',':_fear',':_fubar',':_gran',':_handsinair',':_headbang',':_headphones',':_ladyvampire',':_lalala',':_mlt',':_monkey',':_movember',':_muscleman',':_nahi',':_naturescall',':_nazar',':_neil',':_nerdy',':_ninja',':_nod',':_ok',':_oliver',':_ontheloo',':_penguin',':_pig',':_poke',':_polarbear',':_poolparty',':_poop',':_praying',':_promise',':_puke',':_pullshot',':_pumpkin',':_punch',':_red',':_reindeer',':_rock',':_rofl',':_running',':_sad',':_santa',':_sksantamooning',':_sarcastic',':_selfie',':_shake',':_sheep',':_shivering',':_slap',':_sleepy',':_smile',':_smirk',':_smoke',':_speechless',':_surprised',':_swear',':_sweat',':_sintalk',':_talktothehand',':_taur',':_think',':_tired',':_tmi',':_tongueout',':_ttm',':_turkey',':_sinwait',':_waiting',':_whew',':_whistle',':_wink',':_wtf'];

		if(jQuery.inArray(datamessagelower, emocode_skype) !== -1 || jQuery.inArray(datamessagelower, emocode) !== -1){
	    	classchat	=	'singleemoji';
		}else{
			classchat	=	'emojiwithtext';
		}

		var message = data.msg;

		message 	= replaceEmotions(message);

		var currentdate = new Date();
		var datetime =	 currentdate.getDate() + "/"
		                + (currentdate.getMonth()+1)  + "/"
		                + currentdate.getFullYear() + " @ "
		                + currentdate.getHours() + ":"
		                + currentdate.getMinutes();

		if(data.user !== cookiename){
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
				// changeTitle();
		}else{
			var clientmsg 	= '<div class="chatrow selfmsg '+ classchat +' animated zoomIn"><div class="chatinfor"><span>'+data.user+'(You)</span><div class="chatarea">'+message+'</div><small><i>'+datetime+'</i></small></div><div class="userImg"><img src="img/man.jpg" class="img-responsive" alt="" title="" alt=""></div></div>';;
		}

		$chat.append(clientmsg);

		$chat.animate({scrollTop:$chat[0].scrollHeight}, 'fast');
	});

	// login with cookie
	
	if(cookiename){
		socket.emit('setlog', cookiename, function(data){
			$userFormAre.hide();
			$messageAre.show();
		});
	}else{
		Cookies.remove('name');
		$userFormAre.show();
		$messageAre.hide();
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
						profileimg = $('.userimgwrapper').attr("data-pro");
						Cookies.set('name', username);
						Cookies.set('id', socket.socket.sessionid);
						Cookies.set('profileimg', profileimg);
						location.reload();
					}
				});
				$username.val('');
			}
		});
	}

	socket.on('get users', function(data){
		var html 	=	'';
		for (i = 0; i < data.length; i++) {
			// console.log(data);
			html += '<div class="sinrow" onClick="indimsg(this.id)" id="'+data[i].socket+'"><div class="userImg"><img src="img/man.jpg" class="img-responsive" title="'+data[i].username+'" alt="'+data[i].username+'"></div><span>'+data[i].username+'</span></div>';
		}
		$users.html(html);
	});

	socket.on('is-typing-client', function(data){
		// console.log(data);
		if(username !== data.username){
			$('#istyping').show().html('<span class="animated bounceIn">' + data.username + ' is Typing...</span>');
			setTimeout(function(){ $('#istyping').html('').hide(); }, 2000);
		}
	});

	socket.on('get single user', function(data){
		if (data != null) {
			$('.newcon').show().html('<span class="newconnection animated bounceIn">'+data.username+' is now connected with your conversation</span>');
			setTimeout(function(){
				$('.newcon').hide();
			}, 8000);
		}
	});
});