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
        ':angel' : 'skype/angel.gif',
        ':angry' : 'skype/angry.gif',
        ':bandit' : 'skype/bandit.gif',
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
