$(function(){

  const $mainmnu = $('nav > .gnb > li')
  const $bg_lnb = $('.bg_lnb')
  const $lnb = $('nav .lnb')
  const $newmnu = $('.bg_lnb > .newmnu');

  $mainmnu.on('mouseenter', function(){
    $bg_lnb.stop().fadeIn(200);
    $lnb.stop().fadeIn(200);
 
    

  });
  $mainmnu.on('mouseleave', function(){
    $bg_lnb.stop().fadeOut(200);
    $lnb.stop().fadeOut(200);
   

  });

  // 슬라이드

  let nowIdx = 0;
  
 
  const $container = $('section > .slides-container>li');
  const $pagination = $('section > ol > li > a');

  const fadeFn = function(){$container.filter('.on').stop().fadeOut().removeClass('on');


  //2 나타내기
 $container.eq(nowIdx).stop().fadeIn().addClass('on');

 
 //3 활성화표시
 $pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');}

  $pagination.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $pagination.index(this);
    $container.filter('.on').stop().fadeOut().removeClass('on');


    //2 나타내기
   $container.eq(nowIdx).stop().fadeIn().addClass('on');

   
   //3 활성화표시
   $pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

  
  });

  


  $(window).on('load',function(){
   
    setInterval(function(){
   
      if(nowIdx < 9){
        nowIdx++;
      }else{
        nowIdx=0;
      }
    fadeFn();
    
    },3000);
  
    
  });


  });
