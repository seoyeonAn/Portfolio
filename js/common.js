// $(document).ready(function(){
//     $(window).scroll(function() {
//         $('#header .nav').css({
//             position: 'fixed',
//             top: 0
//         })
//     });
// });

$(document).ready(function(){
    var navOff = $( '.nav' ).offset();
    $(window).scroll(function(){
      if ($(document).scrollTop() > navOff.top) {
        $('.nav').addClass('navfixed');
      }
      else {
        $('.nav').removeClass('navfixed');
      }
    });

    var skillOff = $( '.skill' ).offset();
    $(window).scroll(function(){


      
      if($(document).scrollTop() > skillOff.top - '1000') {
        $('.progress-bar').each(function(){
          var lens = $(this).attr('data-file');
          $(this).css({width: lens + '%'});

          console.log(lens)
        });
        
        
      }
      else {
        $('.progress-bar').css('width', '0')
      }
      
    });
    


    $('.tab > h2').click(function(){
      $(this).parent('.tab').addClass('on')
        .siblings('.tab').removeClass('on');
    });

});