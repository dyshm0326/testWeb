$(function(){

  var $window = $(window),
      $targetEl = $('.animate1'),
      $targetOST = $('.animate1').offset().top - 800;

      var executed = false;

      $window.scroll(function(){
        if(executed == false){
          if($(this).scrollTop() >= $targetOST){
            var $targetNum = $targetEl.attr('data-rate');
            $({mynumber : 0}).animate({mynumber:$targetNum},{
              duration: 1000,
              progress:function(){
                var percent = this.mynumber;
                $targetEl.text(percent.toFixed(1));
              }
            });
            executed = true;
          }
        }
      });
})


$(function(){

  var $window = $(window),
      $targetEl = $('.animate2'),
      $targetOST = $('.animate2').offset().top - 900;

      
      var executed = false;
      

      $window.scroll(function(){
        if(executed == false){
          if($(this).scrollTop() >= $targetOST){
            var $targetNum = $targetEl.attr('data-rate');
            $({mynumber : 11}).animate({mynumber:$targetNum},{
              duration: 1000,
              progress:function(){
                var percent = this.mynumber;
                $targetEl.text(Math.floor(percent) + '%');
              }
            });
            executed = true;
          }
        }
      });
})