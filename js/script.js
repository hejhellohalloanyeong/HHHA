// Title



$('#main, #item_title_hhha').on('click', function (e) {

  if ($('#main').hasClass('item')) {
    $('#main').removeClass('item').addClass('item_open');
    $('#about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
  } else if ($('#main').hasClass('item_open')) {
    $('#main').removeClass('item_open').addClass('item');
  }
});

$('#about, #item_title_about').on('click', function (e) {

  if ($('#about').hasClass('item')) {
    $('#about').removeClass('item').addClass('item_open');
    $('#main, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
  } else if ($('#about').hasClass('item_open')) {
    $('#about').removeClass('item_open').addClass('item');
  }
});

$('#alphabet, #item_title_alphabet').on('click', function (e) {

  if ($('#alphabet').hasClass('item')) {
    $('#alphabet').removeClass('item').addClass('item_open');
    $('#main, #about, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
  } else if ($('#alphabet').hasClass('item_open')) {
    $('#alphabet').removeClass('item_open').addClass('item');
  }
});

$('#contact, #item_title_contact').on('click', function (e) {

  if ($('#contact').hasClass('item')) {
    $('#contact').removeClass('item').addClass('item_open');
    $('#main, #about, #alphabet, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
  } else if ($('#contact').hasClass('item_open')) {
    $('#contact').removeClass('item_open').addClass('item');
  }
});


// A - Z 

$('#audience').on('click', function(e){
  
    if ($('#audience').hasClass('item')) {
        $('#audience').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#audience').hasClass('item_open')) {
      $('#audience').removeClass('item_open').addClass('item');
    } 
    });

$('#birthday').on('click', function(e){
  
    if ($('#birthday').hasClass('item')) {
        $('#birthday').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#birthday').hasClass('item_open')) {
      $('#birthday').removeClass('item_open').addClass('item');
    } 
    });

$('#coincidence').on('click', function(e){
  
    if ($('#coincidence').hasClass('item')) {
        $('#coincidence').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#coincidence').hasClass('item_open')) {
      $('#coincidence').removeClass('item_open').addClass('item');
    } 
    });

$('#divorce').on('click', function(e){
  
    if ($('#divorce').hasClass('item')) {
        $('#divorce').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#divorce').hasClass('item_open')) {
      $('#divorce').removeClass('item_open').addClass('item');
    } 
    });

$('#enlarge').on('click', function(e){
  
    if ($('#enlarge').hasClass('item')) {
        $('#enlarge').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#enlarge').hasClass('item_open')) {
      $('#enlarge').removeClass('item_open').addClass('item');
    } 
    });

$('#fool').on('click', function(e){
  
    if ($('#fool').hasClass('item')) {
        $('#fool').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#fool').hasClass('item_open')) {
      $('#fool').removeClass('item_open').addClass('item');
    } 
    });


    // '#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width'