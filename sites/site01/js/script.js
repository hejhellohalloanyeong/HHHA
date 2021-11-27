$(document).ready(function(){

});

$(function(){
    $("#updateit").toggle(
     function(){
       $('.bar').css("width", '+=' + (0.1 * $('.progress').width()));
       return false; 
    },
    function(){
       $('.bar').css("width", '-=' + (0.1 * $('.progress').width()));
       return false;
    });
  });
