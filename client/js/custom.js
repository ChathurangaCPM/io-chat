<<<<<<< HEAD
$(document).ready(function(){
	$('#selectemoji li').on('click', function(){
		var dataid = $(this).attr('data-id');
		$(this).addClass('active');
		$('#selectemoji li').removeClass('active');
		$('.emojiwindow .tabwrapper').removeClass('active');
		$('.emojiwindow .tabwrapper#'+dataid).addClass('active');
	});
});
function replaceEmotions(html){
    var icons = {
        ':)':'1f642.png',
        ';)':'1f609.png',
        ':(':'2639.png',
        '>:o':'03.gif',
        ':D':'1f627.png',
        ':\'(':'05.gif',
        ':o':'06.gif',
        ':p':'1f61b.png',
        'B)':'08.gif',
        ':x':'09.gif',
        ':s':'10.gif',
        ':$':'11.gif',
        ':*':'12.gif',
        ':/':'1f615.png',
        '<3':'14.gif',
        ':&':'15.gif',
        ':>':'16.gif',
        '=D':'17.gif',
        ':_angel' : '/skype/angel.gif',
        ':_angry':'/skype/angry.gif',
        ':_bandit':'/skype/bandit.gif',
        ':_bhangra':'/skype/bhangra.gif',
        ':_bike':'/skype/bike.gif',
        ':_blush':'/skype/blush.gif',
        ':_bow':'/skype/bow.gif',
        ':_bug':'/skype/bug.gif',
        ':_bunny':'/skype/bunny.gif',
        ':_busyday':'/skype/busyday.gif',
        ':_call':'/skype/call.gif',
        ':_cat':'/skype/cat.gif',
        ':_champagne':'/skype/champagne.gif',
        ':_chappal':'/skype/chappal.gif',
        ':_clap':'/skype/clap.gif',
        ':_computerrage':'/skype/computerrage.gif',
        ':_cool':'/skype/cool.gif',
        ':_cry':'/skype/cry.gif',
        ':_cwl':'/skype/cwl.gif',
        ':_dance':'/skype/dance.gif',
        ':_discodancer':'/skype/discodancer.gif',
        ':_disgust':'/skype/disgust.gif',
        ':_dog':'/skype/dog.gif',
        ':_doh':'/skype/doh.gif',
        ':_donkey':'/skype/donkey.gif',
        ':_donttalktome':'/skype/donttalktome.gif',
        ':_dream':'/skype/dream.gif',
        ':_drink':'/skype/drink.gif',
        ':_drunk':'/skype/drunk.gif',
        ':_dull':'/skype/dull.gif',
        ':_eg':'/skype/eg.gif',
        ':_emo':'/skype/emo.gif',
        ':_envy':'/skype/envy.gif',
        ':_ezgif':'/skype/ezgif-3737831102.gif',
        ':_facepalm':'/skype/facepalm.gif',
        ':_fallinlove':'/skype/fallinlove.gif',
        ':_fear':'/skype/fear.gif',
        ':_fubar':'/skype/fubar.gif',
        ':_gran':'/skype/gran.gif',
        ':_handsinair':'/skype/handsinair.gif',
        ':_headbang':'/skype/headbang.gif',
        ':_headphones':'/skype/headphones.gif',
        ':_ladyvampire':'/skype/ladyvampire.gif',
        ':_lalala':'/skype/lalala.gif',
        ':_mlt':'/skype/mlt.gif',
        ':_monkey':'/skype/monkey.gif',
        ':_movember':'/skype/movember.gif',
        ':_muscleman':'/skype/muscleman.gif',
        ':_nahi':'/skype/nahi.gif',
        ':_naturescall':'/skype/naturescall.gif',
        ':_nazar':'/skype/nazar.gif',
        ':_neil':'/skype/neil.gif',
        ':_nerdy':'/skype/nerdy.gif',
        ':_ninja':'/skype/ninja.gif',
        ':_nod':'/skype/nod.gif',
        ':_ok':'/skype/ok.gif',
        ':_oliver':'/skype/oliver.gif',
        ':_ontheloo':'/skype/ontheloo.gif',
        ':_penguin':'/skype/penguin.gif',
        ':_pig':'/skype/pig.gif',
        ':_poke':'/skype/poke.gif',
        ':_polarbear':'/skype/polarbear.gif',
        ':_poolparty':'/skype/poolparty.gif',
        ':_poop':'/skype/poop.gif',
        ':_praying':'/skype/praying.gif',
        ':_promise':'/skype/promise.gif',
        ':_puke':'/skype/puke.gif',
        ':_pullshot':'/skype/pullshot.gif',
        ':_pumpkin':'/skype/pumpkin.gif',
        ':_punch':'/skype/punch.gif',
        ':_red':'/skype/red.gif',
        ':_reindeer':'/skype/reindeer.gif',
        ':_rock':'/skype/rock.gif',
        ':_rofl':'/skype/rofl.gif',
        ':_running':'/skype/running.gif',
        ':_sad':'/skype/sad.gif',
        ':_santa':'/skype/santa.gif',
        ':_sksantamooning':'/skype/santamooning.gif',
        ':_sarcastic':'/skype/sarcastic.gif',
        ':_selfie':'/skype/selfie.gif',
        ':_shake':'/skype/shake.gif',
        ':_sheep':'/skype/sheep.gif',
        ':_shivering':'/skype/shivering.gif',
        ':_slap':'/skype/slap.gif',
        ':_sleepy':'/skype/sleepy.gif',
        ':_smile':'/skype/smile.gif',
        ':_smirk':'/skype/smirk.gif',
        ':_smoke':'/skype/smoke.gif',
        ':_speechless':'/skype/speechless.gif',
        ':_surprised':'/skype/surprised.gif',
        ':_swear':'/skype/swear.gif',
        ':_sweat':'/skype/sweat.gif',
        ':_sintalk':'/skype/talk.gif',
				':_sintalk':'/skype/talk.gif',
        ':_talktothehand':'/skype/talktothehand.gif',
        ':_taur':'/skype/taur.gif',
        ':_think':'/skype/think.gif',
        ':_tired':'/skype/tired.gif',
        ':_tmi':'/skype/tmi.gif',
        ':_tongueout':'/skype/tongueout.gif',
        ':_ttm':'/skype/ttm.gif',
        ':_turkey':'/skype/turkey.gif',
        ':_sinwait':'/skype/wait.gif',
        ':_waiting':'/skype/waiting.gif',
        ':_whew':'/skype/whew.gif',
        ':_whistle':'/skype/whistle.gif',
        ':_wink':'/skype/wink.gif',
        ':_wtf':'/skype/wtf.gif'
        }
    var search = '';
    for(var i in icons)
      	search += i.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')+'|';//escape characters and add 'or'
    	search = search.substr(0, search.length-1);//remove last 'or'

    var replaceCallback = function(match) {
      return '<img src="img/emoji/' + icons[match] + '" />';
    }

    return html.replace(new RegExp(search, 'gm'), replaceCallback);
}

function indimsg(id) {
    // var clickedid = $(this).attr('id');
    var $chatwindow = $('#chatwindow');
    $chatwindow.attr('data-id', id);
    var indexname = $('#'+id).find('span').html();
    console.log(indexname);
    $chatwindow.find('header.ctheader span').html('Chat with '+indexname);
}

function changeTitle() {
    var title = $(document).prop('title'); 
    if (title.indexOf('>>>') == -1) {
        // setTimeout(changeTitle, 3000);  
        $(document).prop('title', '>'+title);
    }