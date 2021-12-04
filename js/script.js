// Title

$('#item_title_hhha, #main').on('click', function (e) {

  if ($('#main').hasClass('item')) {
    $('#main').removeClass('item').addClass('item_open');
    $('#about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
  } else if ($('#main').hasClass('item_open')) {
    $('#main').removeClass('item_open').addClass('item');
  }
});

$('#item_title_about, #about').on('click', function (e) {

  if ($('#about').hasClass('item')) {
    $('#about').removeClass('item').addClass('item_open');
    $('#main, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
  } else if ($('#about').hasClass('item_open')) {
    $('#about').removeClass('item_open').addClass('item');
  }
});

$('#item_title_alphabet, #alphabet').on('click', function (e) {

  if ($('#alphabet').hasClass('item')) {
    $('#alphabet').removeClass('item').addClass('item_open');
    $('#main, #about, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
  } else if ($('#alphabet').hasClass('item_open')) {
    $('#alphabet').removeClass('item_open').addClass('item');
  }
});

$('#item_title_contact, #contact').on('click', function (e) {

  if ($('#contact').hasClass('item')) {
    $('#contact').removeClass('item').addClass('item_open');
    $('#main, #about, #alphabet, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
  } else if ($('#contact').hasClass('item_open')) {
    $('#contact').removeClass('item_open').addClass('item');
  }
});

$("#emailInput, #messageInput, #sendButton, .link").click(function(e) {
  e.stopPropagation();
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

// //
$('#herb').on('click', function(e){
  
    if ($('#herb').hasClass('item')) {
        $('#herb').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#herb').hasClass('item_open')) {
      $('#herb').removeClass('item_open').addClass('item');
    } 
    });

$('#meeting').on('click', function(e){
  
    if ($('#meeting').hasClass('item')) {
        $('#meeting').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #organize, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#meeting').hasClass('item_open')) {
      $('#meeting').removeClass('item_open').addClass('item');
    } 
    });

$('#organize').on('click', function(e){
  
    if ($('#organize').hasClass('item')) {
        $('#organize').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #part, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#organize').hasClass('item_open')) {
      $('#organize').removeClass('item_open').addClass('item');
    } 
    });

$('#part').on('click', function(e){
  
    if ($('#part').hasClass('item')) {
        $('#part').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #reservoir, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#part').hasClass('item_open')) {
      $('#part').removeClass('item_open').addClass('item');
    } 
    });

$('#reservoir').on('click', function(e){
  
    if ($('#reservoir').hasClass('item')) {
        $('#reservoir').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #sector, #tick, #utilize, #width').addClass('item');
    } else if ($('#reservoir').hasClass('item_open')) {
      $('#reservoir').removeClass('item_open').addClass('item');
    } 
    });

$('#sector').on('click', function(e){
  
    if ($('#sector').hasClass('item')) {
        $('#sector').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #tick, #utilize, #width').addClass('item');
    } else if ($('#sector').hasClass('item_open')) {
      $('#sector').removeClass('item_open').addClass('item');
    } 
    });

$('#tick').on('click', function(e){
  
    if ($('#tick').hasClass('item')) {
        $('#tick').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #utilize, #width').addClass('item');
    } else if ($('#tick').hasClass('item_open')) {
      $('#tick').removeClass('item_open').addClass('item');
    } 
    });

$('#utilize').on('click', function(e){
  
    if ($('#utilize').hasClass('item')) {
        $('#utilize').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #width').addClass('item');
    } else if ($('#utilize').hasClass('item_open')) {
      $('#utilize').removeClass('item_open').addClass('item');
    } 
    });

$('#width').on('click', function(e){
  
    if ($('#width').hasClass('item')) {
        $('#width').removeClass('item').addClass('item_open');
        $('#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize').addClass('item');
    } else if ($('#width').hasClass('item_open')) {
      $('#width').removeClass('item_open').addClass('item');
    } 
    });


    // '#main, #about, #alphabet, #contact, #audience, #birthday, #coincidence, #divorce, #enlarge, #fool, #herb, #meeting, #organize, #part, #reservoir, #sector, #tick, #utilize, #width'