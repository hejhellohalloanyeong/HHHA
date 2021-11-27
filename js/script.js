
// $(function(){
//     $("#updateit").toggle(
//      function(){
//        $('.bar').css("width", '+=' + (0.6 * $('.bar').width()));
//        return false; 
//     },
//     function(){
//        $('.bar').css("width", '-=' + (0.6 * $('.bar').width()));
//        return false;
//     });
//   });


$('#audience').on('click', function(e){
  
   if ($('#audience').hasClass('item')) {
       $('#audience').removeClass('item').addClass('item_60');
       $('#birthday').addClass('item');
   } else if ($('#audience').hasClass('item_60')) {
     $('#audience').removeClass('item_60').addClass('item');
   } 
   });



   // $('#audience').on('click', function(){
   //    $('#audience').removeClass('item');
   //    $('#birthday').addClass('item');
   //  });

   $('#birthday').on('click', function(e){
  
      if ($('#birthday').hasClass('item')) {
          $('#birthday').removeClass('item').addClass('item_60');
          $('#audience').addClass('item');
      } else if ($('#birthday').hasClass('item_60')) {
        $('#birthday').removeClass('item_60').addClass('item');
      } 
      });
