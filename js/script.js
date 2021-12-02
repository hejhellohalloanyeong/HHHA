// Title

$('#main').on('click', function (e) {

  if ($('#main').hasClass('item')) {
    $('#main').removeClass('item').addClass('item_open');
    $('#about, #contact, #alphabet, #audience, #birthday').addClass('item');
  } else if ($('#main').hasClass('item_open')) {
    $('#main').removeClass('item_open').addClass('item');
  }
});

$('#about').on('click', function (e) {

  if ($('#about').hasClass('item')) {
    $('#about').removeClass('item').addClass('item_open');
    $('#main, #contact, #alphabet, #audience, #birthday').addClass('item');
  } else if ($('#about').hasClass('item_open')) {
    $('#about').removeClass('item_open').addClass('item');
  }
});

$('#alphabet').on('click', function (e) {

  if ($('#alphabet').hasClass('item')) {
    $('#alphabet').removeClass('item').addClass('item_open');
    $(' #main, #about, #contact, #audience, #birthday').addClass('item');
  } else if ($('#alphabet').hasClass('item_open')) {
    $('#alphabet').removeClass('item_open').addClass('item');
  }
});

$('#contact').on('click', function (e) {

  if ($('#contact').hasClass('item')) {
    $('#contact').removeClass('item').addClass('item_open');
    $('#main, #about, #alphabet, #audience, #birthday').addClass('item');
  } else if ($('#contact').hasClass('item_open')) {
    $('#contact').removeClass('item_open').addClass('item');
  }
});


// A - Z 

$('#audience').on('click', function(e){
  
    if ($('#audience').hasClass('item')) {
        $('#audience').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #birthday').addClass('item');
    } else if ($('#audience').hasClass('item_open')) {
      $('#audience').removeClass('item_open').addClass('item');
    } 
    });

$('#birthday').on('click', function(e){
  
      if ($('#birthday').hasClass('item')) {
          $('#birthday').removeClass('item').addClass('item_open');
          $('#main, #about, #alphabet, #contact, #audience').addClass('item');
      } else if ($('#birthday').hasClass('item_open')) {
        $('#birthday').removeClass('item_open').addClass('item');
      } 
      });

    