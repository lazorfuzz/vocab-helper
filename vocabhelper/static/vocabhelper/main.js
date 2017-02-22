new Clipboard('#copy');
var words = $('#wordspace');
words.focus();

function define(){
  var csrftoken = $('input[name="csrfmiddlewaretoken"]').val();
  $('#go').attr('class', 'button animated bounceOut');
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

$('#copy').on('click', function(){
alert('Your definitions have been saved to your clipboard. Be sure to recommend Vocab Helper to a friend!');
});
