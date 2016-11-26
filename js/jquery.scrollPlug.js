(function($){
    
    $.fn.scrollPlug = function(options){
        var options = $.extend({
            speed:300
        }, options);
        
        $(window).scroll( function(){
            var top = $(this).scrollTop();
          if(top > 700){
              $('.toTop').show();
          }else{
              $('.toTop').hide();
          };
        });
        var make = function() {
            $(this).click(function(e){
                e.preventDefault();
                var id = $(this).attr('href');
                var offset = $(id).offset().top;
                $('html, body').animate({
                    scrollTop: offset
                }, options.speed);
            });
        };
        
        return this.each(make)
    }
    
}(jQuery))