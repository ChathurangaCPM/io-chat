<html>
	<head>
		<title>chat io</title>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">

		<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>-->
		<script src="/socket.io/socket.io.js"></script>
		<script type="text/javascript" src="js/cookie.js"></script>
		<script src="js/easyNotify.js"></script>
		<script src="js/custom.js"></script>
	</head>
	<body>
		<div class="container">
			<div id="userFormAre" class="row">
				<div class="col-md-12">
					<form id="userForm">
						<div class="userimgwrapper">
							 <img src="img/man.jpg" class="img-responsive">
						</div>
						<div class="formgroup">
							<label for="username">Enter user</label>
							<input name="" id="username" class="form-control" >
							<span>Press Enter key to continue</span>
							<!-- <input type="submit" class="btn btn-primary" value="Login"> -->
						</div>
					</form>
				</div>
			</div>
			<div id="messageAre" class="row">
				<div class="leftside">
					<header>
						<span>Online Users</span>
					</header>
					<div class="onlineuserswrapper">
						<div class="sinrow">
							<div class="userImg">
								<img src="img/man.jpg" class="img-responsive" alt="" title="" alt="">
							</div>
							<span>User Name</span>
						</div>
					</div>
				</div>
				<div class="rightside" id="chatwindow" data-id="">
					<header class="ctheader">
						<span>EME - Public group chat</span>
					</header>
					<div class="chatwrapper"></div>
					<div class="writewrapper">
						<div class="newcon"></div>
						<div id="istyping"></div>
						<div class="emojiwrapper">
							<ul class="list-inline" id="selectemoji">
								<li class="active" data-id="emoji">
									<i class="fa fa-smile-o"></i>
								</li>
								<li data-id="skype">
									<i class="fa fa-skype"></i>
								</li>
							</ul>
							<div class="emojiwindow">
								<div id="emoji" class="tabwrapper active">
									<div class="emojiicon">
										<img src="img/emoji/1f642.png" data-code=":)" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/2639.png" data-code=":(" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/1f61b.png" data-code=":p" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/1f609.png" data-code=";)" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/1f60e.png" data-code="d)" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/1f627.png" data-code="d:" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/1f62c.png" data-code=":d" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/1f603.png" data-code="=)" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/1f615.png" data-code=":/" class="img-responsive" />
									</div>
									<!-- <div class="emojiicon">
										<img src="img/emoji/1f603.png" class="img-responsive" />
									</div> -->
								</div>
								<div id="skype" class="tabwrapper">
									<div class="emojiicon">
										<img src="img/emoji/skype/shivering.gif" data-code=":_shivering" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/slap.gif" data-code=":_slap" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/sleepy.gif" data-code=":_sleepy" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/smile.gif" data-code=":_smile" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/smirk.gif" data-code=":_smirk" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/smoke.gif" data-code=":_smoke" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/speechless.gif" data-code=":_speechless" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/surprised.gif" data-code=":_surprised" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/swear.gif" data-code=":_swear" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/sweat.gif" data-code=":_sweat" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/talk.gif" data-code=":_sintalk" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/talktothehand.gif" data-code=":_talktothehand" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/taur.gif" data-code=":_taur" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/think.gif" data-code=":_think" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/tired.gif" data-code=":_tired" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/tmi.gif" data-code=":_tmi" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/tongueout.gif" data-code=":_tongueout" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/ttm.gif" data-code=":_ttm" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/wait.gif" data-code=":_sinwait" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/waiting.gif" data-code=":_waiting" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/whew.gif" data-code=":_whew" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/whistle.gif" data-code=":_whistle" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/wink.gif" data-code=":_wink" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/wtf.gif" data-code=":_wtf" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/sarcastic.gif" data-code=":_sarcastic" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/selfie.gif" data-code=":_selfie" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/shake.gif" data-code=":_shake" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/angel.gif" data-code=":_angel" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/angry.gif" data-code=":_angry" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/bandit.gif" data-code=":_bandit" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/blush.gif" data-code=":_blush" class="img-responsive" />
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/call.gif" data-code=":_call" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/clap.gif" data-code=":_clap" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/cool.gif" data-code=":_cool" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/cry.gif" data-code=":_cry" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/cwl.gif" data-code=":_cwl" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/doh.gif" data-code=":_doh" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/donttalktome.gif" data-code=":_donttalktome" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/dream.gif" data-code=":_dream" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/drunk.gif" data-code=":_drunk" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/dull.gif" data-code=":_dull" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/eg.gif" data-code=":_eg" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/emo.gif" data-code=":_emo" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/envy.gif" data-code=":_envy" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/facepalm.gif" data-code=":_facepalm" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/headbang.gif" data-code=":_headbang" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/headphones.gif" data-code=":_headphones" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/ladyvampire.gif" data-code=":_ladyvampire" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/lalala.gif" data-code=":_lalala" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/mlt.gif" data-code=":_mlt" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/movember.gif" data-code=":_movember" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/nazar.gif" data-code=":_nazar" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/nerdy.gif" data-code=":_nerdy" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/nod.gif" data-code=":_nod" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/oliver.gif" data-code=":_oliver" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/puke.gif" data-code=":_puke" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/punch.gif" data-code=":_punch" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/rock.gif" data-code=":_rock" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/rofl.gif" data-code=":_rofl" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/sad.gif" data-code=":_sad" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/santa.gif" data-code=":_santa" class="img-responsive">
									</div>




									<div class="emojiicon">
										<img src="img/emoji/skype/turkey.gif" data-code=":_turkey" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/bhangra.gif" data-code=":_bhangra" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/bike.gif" data-code=":_bike" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/bow.gif" data-code=":_bow" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/bug.gif" data-code=":_bug" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/bunny.gif" data-code=":_bunny" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/busyday.gif" data-code=":_busyday" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/cat.gif" data-code=":_cat" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/champagne.gif" data-code=":_champagne" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/chappal.gif" data-code=":_chappal" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/computerrage.gif" data-code=":_computerrage" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/dance.gif" data-code=":_dance" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/discodancer.gif" data-code=":_discodancer" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/disgust.gif" data-code=":_disgust" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/dog.gif" data-code=":_dog" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/donkey.gif" data-code=":_donkey" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/drink.gif" data-code=":_drink" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/ezgif-3737831102.gif" data-code=":_ezgif" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/fallinlove.gif" data-code=":_fallinlove" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/fear.gif" data-code=":_fear" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/fubar.gif" data-code=":_fubar" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/gran.gif" data-code=":_gran" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/handsinair.gif" data-code=":_handsinair" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/monkey.gif" data-code=":_monkey" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/muscleman.gif" data-code=":_muscleman" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/nahi.gif" data-code=":_nahi" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/naturescall.gif" data-code=":_naturescall" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/neil.gif" data-code=":_neil" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/ninja.gif" data-code=":_ninja" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/ok.gif" data-code=":_ok" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/ontheloo.gif" data-code=":_ontheloo" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/penguin.gif" data-code=":_penguin" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/pig.gif" data-code=":_pig" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/poke.gif" data-code=":_poke" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/polarbear.gif" data-code=":_polarbear" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/poolparty.gif" data-code=":_poolparty" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/poop.gif" data-code=":_poop" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/praying.gif" data-code=":_praying" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/promise.gif" data-code=":_promise" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/pullshot.gif" data-code=":_pullshot" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/pumpkin.gif" data-code=":_pumpkin" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/red.gif" data-code=":_red" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/reindeer.gif" data-code=":_reindeer" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/running.gif" data-code=":_running" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/santamooning.gif" data-code=":_sksantamooning" class="img-responsive">
									</div>
									<div class="emojiicon">
										<img src="img/emoji/skype/sheep.gif" data-code=":_sheep" class="img-responsive">
									</div>
								</div>
							</div>
						</div>
						<div class="formgroup messageForm">
							<div class="wrapwriter">
								<input type="text" name="" placeholder="Enter your message" id="message"  class="form-control">
								<div class="chatoptions">
									<ul class="list-inline">
										<li>
											<i class="fa fa-smile-o" id="emojiicon"></i>
										</li>
										<!-- <li disabled>
											<i class="fa fa-picture-o" id="selectimage"></i>
										</li> -->
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<span class="text-right">Developed by <a href="">CPM</a></span>
			</div>
		</div>
		<script>
			var emocode = [];
			var emocode_skype = [];
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
			var	$emojiicon  	 	=	$('#emojiicon');
			var	$emojiwrapper 		=	$('.emojiwrapper');
			var	$emojiicon  	 	=	$('#emojiicon');
			var	$sinrow 			=	$('.sinrow');

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

			$emojiicon.on('click', function(e){
				$emojiwrapper.toggle();
			});

			$emojiwrapper.find('img').on('click', function(){
				var clickedval	=	$(this).attr('data-code');
				$message.val(clickedval).focus();
				$emojiwrapper.toggle();
			});

			var myFunction = function() {
			  window.focus();
			};

			var myImg = "https://unsplash.it/600/600?image=777";


			$(function(){
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
				  	// console.log(socket.id);
				  	socket.emit('is-typing', {username: username});
				  }
				});

				socket.on('new message', function(data){
					var datamessage	=	data.msg;
					var soketid	=	data.socket;
					// console.log(soketid);
					htmlemotions = replaceEmotions(datamessage);
					var emocode = [':)',';)',':(','>:o',':D',':\'(',':o',':p', 'b)',':x',':s',':$',':*',':/','<3',':&',':>','=D'];
					var emocode_skype = [':_angel',':_angry',':_bandit',':_bhangra',':_bike',':_blush',':_bow',':_bug',':_bunny',':_busyday',':_call',':_cat',':_champagne',':_chappal',':_clap',':_computerrage',':_cool',':_cry',':_cwl',':_dance',':_discodancer',':_disgust',':_dog',':_doh',':_donkey',':_donttalktome',':_dream',':_drink',':_drunk',':_dull',':_eg',':_emo',':_envy',':_facepalm',':_fallinlove',':_fear',':_fubar',':_gran',':_handsinair',':_headbang',':_headphones',':_ladyvampire',':_lalala',':_mlt',':_monkey',':_movember',':_muscleman',':_nahi',':_naturescall',':_nazar',':_neil',':_nerdy',':_ninja',':_nod',':_ok',':_oliver',':_ontheloo',':_penguin',':_pig',':_poke',':_polarbear',':_poolparty',':_poop',':_praying',':_promise',':_puke',':_pullshot',':_pumpkin',':_punch',':_red',':_reindeer',':_rock',':_rofl',':_running',':_sad',':_santa',':_sksantamooning',':_sarcastic',':_selfie',':_shake',':_sheep',':_shivering',':_slap',':_sleepy',':_smile',':_smirk',':_smoke',':_speechless',':_surprised',':_swear',':_sweat',':_sintalk',':_talktothehand',':_taur',':_think',':_tired',':_tmi',':_tongueout',':_ttm',':_turkey',':_sinwait',':_waiting',':_whew',':_whistle',':_wink',':_wtf'];

					if(jQuery.inArray(datamessage, emocode_skype) !== -1 || jQuery.inArray(datamessage, emocode) !== -1){
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
							// changeTitle();
					}else{
						var clientmsg 	= '<div class="chatrow selfmsg '+ classchat +' animated zoomIn"><div class="chatinfor"><span>'+data.user+'(You)</span><div class="chatarea">'+message+'</div><small><i>'+datetime+'</i></small></div><div class="userImg"><img src="img/man.jpg" class="img-responsive" alt="" title="" alt=""></div></div>';;
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
						Cookies.set('name', username);
						$username.val('');
					}
				});

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
						$('#istyping').show().html('<span class="animated bounceIn">' + data.username + ' is Typing</span>');
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
		</script>
	</body>
</html>
