// ハンバーガー１

$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        } 
      
    });
});
$(function() {
    $('.globalMenuSp a[href]').click(function() {
        $('.globalMenuSp').removeClass('active');
       $('.hamburger').removeClass('active');

    });
  });

  $(function() {$('.t-i-close').click(function() {$('.topview-info').removeClass('active')})});
  
//ページ内リンク


$(function () {
  $(window).on("load scroll resize", function () {

    var st = $(window).scrollTop();
    var wh = $(window).height();

    $('.section-point').each(function (i) {
      var tg = $(this).offset().top;
      var id = $(this).attr('id');

      if (st > tg  - wh + (wh / 2)) {
        $(".header-bg").removeClass("active");
        var link = $(".header-bg[href *= " + id +"]");
        $(link).addClass("active");
      }
    });

  });

});
// projects

$(function(){$('.pj-sam-1').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-1').addClass('active');}else{$('.pj-index-1').removeClass('active');} });});
$(function(){$('.pj-sam-2').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-2').addClass('active');}else{$('.pj-index-2').removeClass('active');} });});
$(function(){$('.pj-sam-3').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-3').addClass('active');}else{$('.pj-index-3').removeClass('active');} });});
$(function(){$('.pj-sam-4').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-4').addClass('active');}else{$('.pj-index-4').removeClass('active');} });});
$(function(){$('.pj-sam-5').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-5').addClass('active');}else{$('.pj-index-5').removeClass('active');} });});
$(function(){$('.pj-sam-6').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-6').addClass('active');}else{$('.pj-index-6').removeClass('active');} });});
$(function(){$('.pj-sam-7').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-7').addClass('active');}else{$('.pj-index-7').removeClass('active');} });});
$(function(){$('.pj-sam-8').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-8').addClass('active');}else{$('.pj-index-8').removeClass('active');} });});
$(function(){$('.pj-sam-9').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-9').addClass('active');}else{$('.pj-index-9').removeClass('active');} });});
$(function(){$('.pj-sam-10').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-10').addClass('active');}else{$('.pj-index-10').removeClass('active');} });});
$(function(){$('.pj-sam-11').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-11').addClass('active');}else{$('.pj-index-11').removeClass('active');} });});
$(function(){$('.pj-sam-12').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-12').addClass('active');}else{$('.pj-index-12').removeClass('active');} });});
$(function(){$('.pj-sam-13').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-13').addClass('active');}else{$('.pj-index-13').removeClass('active');} });});
$(function(){$('.pj-sam-14').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-14').addClass('active');}else{$('.pj-index-14').removeClass('active');} });});
$(function(){$('.pj-sam-15').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-15').addClass('active');}else{$('.pj-index-15').removeClass('active');} });});
$(function(){$('.pj-sam-16').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-16').addClass('active');}else{$('.pj-index-16').removeClass('active');} });});
$(function(){$('.pj-sam-17').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-17').addClass('active');}else{$('.pj-index-17').removeClass('active');} });});
$(function(){$('.pj-sam-18').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-18').addClass('active');}else{$('.pj-index-18').removeClass('active');} });});
$(function(){$('.pj-sam-19').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-19').addClass('active');}else{$('.pj-index-19').removeClass('active');} });});
$(function(){$('.pj-sam-20').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-20').addClass('active');}else{$('.pj-index-20').removeClass('active');} });});
$(function(){$('.pj-sam-21').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-21').addClass('active');}else{$('.pj-index-21').removeClass('active');} });});
$(function(){$('.pj-sam-22').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-22').addClass('active');}else{$('.pj-index-22').removeClass('active');} });});
$(function(){$('.pj-sam-23').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-23').addClass('active');}else{$('.pj-index-23').removeClass('active');} });});
$(function(){$('.pj-sam-24').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-24').addClass('active');}else{$('.pj-index-24').removeClass('active');} });});
$(function(){$('.pj-sam-25').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-25').addClass('active');}else{$('.pj-index-25').removeClass('active');} });});
$(function(){$('.pj-sam-26').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-26').addClass('active');}else{$('.pj-index-26').removeClass('active');} });});
$(function(){$('.pj-sam-27').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-27').addClass('active');}else{$('.pj-index-27').removeClass('active');} });});
$(function(){$('.pj-sam-28').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-28').addClass('active');}else{$('.pj-index-28').removeClass('active');} });});
$(function(){$('.pj-sam-29').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-29').addClass('active');}else{$('.pj-index-29').removeClass('active');} });});
$(function(){$('.pj-sam-30').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-30').addClass('active');}else{$('.pj-index-30').removeClass('active');} });});
$(function(){$('.pj-sam-31').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-31').addClass('active');}else{$('.pj-index-31').removeClass('active');} });});
$(function(){$('.pj-sam-32').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-32').addClass('active');}else{$('.pj-index-32').removeClass('active');} });});
$(function(){$('.pj-sam-33').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-33').addClass('active');}else{$('.pj-index-33').removeClass('active');} });});
$(function(){$('.pj-sam-34').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-34').addClass('active');}else{$('.pj-index-34').removeClass('active');} });});
$(function(){$('.pj-sam-35').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-35').addClass('active');}else{$('.pj-index-35').removeClass('active');} });});
$(function(){$('.pj-sam-36').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-36').addClass('active');}else{$('.pj-index-36').removeClass('active');} });});
$(function(){$('.pj-sam-37').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-37').addClass('active');}else{$('.pj-index-37').removeClass('active');} });});
$(function(){$('.pj-sam-38').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-38').addClass('active');}else{$('.pj-index-38').removeClass('active');} });});
$(function(){$('.pj-sam-39').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-39').addClass('active');}else{$('.pj-index-39').removeClass('active');} });});
$(function(){$('.pj-sam-40').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-40').addClass('active');}else{$('.pj-index-40').removeClass('active');} });});
$(function(){$('.pj-sam-41').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-41').addClass('active');}else{$('.pj-index-41').removeClass('active');} });});
$(function(){$('.pj-sam-42').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-42').addClass('active');}else{$('.pj-index-42').removeClass('active');} });});
$(function(){$('.pj-sam-43').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-43').addClass('active');}else{$('.pj-index-43').removeClass('active');} });});
$(function(){$('.pj-sam-44').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-44').addClass('active');}else{$('.pj-index-44').removeClass('active');} });});
$(function(){$('.pj-sam-45').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-45').addClass('active');}else{$('.pj-index-45').removeClass('active');} });});
$(function(){$('.pj-sam-46').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-46').addClass('active');}else{$('.pj-index-46').removeClass('active');} });});
$(function(){$('.pj-sam-47').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-47').addClass('active');}else{$('.pj-index-47').removeClass('active');} });});
$(function(){$('.pj-sam-48').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-48').addClass('active');}else{$('.pj-index-48').removeClass('active');} });});
$(function(){$('.pj-sam-49').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-49').addClass('active');}else{$('.pj-index-49').removeClass('active');} });});
$(function(){$('.pj-sam-50').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-50').addClass('active');}else{$('.pj-index-50').removeClass('active');} });});
$(function(){$('.pj-sam-51').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-51').addClass('active');}else{$('.pj-index-51').removeClass('active');} });});
$(function(){$('.pj-sam-52').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-52').addClass('active');}else{$('.pj-index-52').removeClass('active');} });});
$(function(){$('.pj-sam-53').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-53').addClass('active');}else{$('.pj-index-53').removeClass('active');} });});
$(function(){$('.pj-sam-54').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-54').addClass('active');}else{$('.pj-index-54').removeClass('active');} });});
$(function(){$('.pj-sam-55').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-55').addClass('active');}else{$('.pj-index-55').removeClass('active');} });});
$(function(){$('.pj-sam-56').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-56').addClass('active');}else{$('.pj-index-56').removeClass('active');} });});
$(function(){$('.pj-sam-57').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-57').addClass('active');}else{$('.pj-index-57').removeClass('active');} });});
$(function(){$('.pj-sam-58').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-58').addClass('active');}else{$('.pj-index-58').removeClass('active');} });});
$(function(){$('.pj-sam-59').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-59').addClass('active');}else{$('.pj-index-59').removeClass('active');} });});
$(function(){$('.pj-sam-60').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-60').addClass('active');}else{$('.pj-index-60').removeClass('active');} });});
$(function(){$('.pj-sam-61').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-61').addClass('active');}else{$('.pj-index-61').removeClass('active');} });});
$(function(){$('.pj-sam-62').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-62').addClass('active');}else{$('.pj-index-62').removeClass('active');} });});
$(function(){$('.pj-sam-63').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-63').addClass('active');}else{$('.pj-index-63').removeClass('active');} });});
$(function(){$('.pj-sam-64').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-64').addClass('active');}else{$('.pj-index-64').removeClass('active');} });});
$(function(){$('.pj-sam-65').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-65').addClass('active');}else{$('.pj-index-65').removeClass('active');} });});
$(function(){$('.pj-sam-66').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-66').addClass('active');}else{$('.pj-index-66').removeClass('active');} });});
$(function(){$('.pj-sam-67').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-67').addClass('active');}else{$('.pj-index-67').removeClass('active');} });});
$(function(){$('.pj-sam-68').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-68').addClass('active');}else{$('.pj-index-68').removeClass('active');} });});
$(function(){$('.pj-sam-69').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-69').addClass('active');}else{$('.pj-index-69').removeClass('active');} });});
$(function(){$('.pj-sam-70').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-70').addClass('active');}else{$('.pj-index-70').removeClass('active');} });});
$(function(){$('.pj-sam-71').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-71').addClass('active');}else{$('.pj-index-71').removeClass('active');} });});
$(function(){$('.pj-sam-72').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-72').addClass('active');}else{$('.pj-index-72').removeClass('active');} });});
$(function(){$('.pj-sam-73').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-73').addClass('active');}else{$('.pj-index-73').removeClass('active');} });});
$(function(){$('.pj-sam-74').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-74').addClass('active');}else{$('.pj-index-74').removeClass('active');} });});
$(function(){$('.pj-sam-75').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-75').addClass('active');}else{$('.pj-index-75').removeClass('active');} });});
$(function(){$('.pj-sam-76').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-76').addClass('active');}else{$('.pj-index-76').removeClass('active');} });});
$(function(){$('.pj-sam-77').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-77').addClass('active');}else{$('.pj-index-77').removeClass('active');} });});
$(function(){$('.pj-sam-78').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-78').addClass('active');}else{$('.pj-index-78').removeClass('active');} });});
$(function(){$('.pj-sam-79').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-79').addClass('active');}else{$('.pj-index-79').removeClass('active');} });});
$(function(){$('.pj-sam-80').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-80').addClass('active');}else{$('.pj-index-80').removeClass('active');} });});
$(function(){$('.pj-sam-81').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-81').addClass('active');}else{$('.pj-index-81').removeClass('active');} });});
$(function(){$('.pj-sam-82').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-82').addClass('active');}else{$('.pj-index-82').removeClass('active');} });});
$(function(){$('.pj-sam-83').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-83').addClass('active');}else{$('.pj-index-83').removeClass('active');} });});
$(function(){$('.pj-sam-84').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-84').addClass('active');}else{$('.pj-index-84').removeClass('active');} });});
$(function(){$('.pj-sam-85').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-85').addClass('active');}else{$('.pj-index-85').removeClass('active');} });});
$(function(){$('.pj-sam-86').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-86').addClass('active');}else{$('.pj-index-86').removeClass('active');} });});
$(function(){$('.pj-sam-87').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-87').addClass('active');}else{$('.pj-index-87').removeClass('active');} });});
$(function(){$('.pj-sam-88').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-88').addClass('active');}else{$('.pj-index-88').removeClass('active');} });});
$(function(){$('.pj-sam-89').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-89').addClass('active');}else{$('.pj-index-89').removeClass('active');} });});
$(function(){$('.pj-sam-90').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-90').addClass('active');}else{$('.pj-index-90').removeClass('active');} });});
$(function(){$('.pj-sam-91').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-91').addClass('active');}else{$('.pj-index-91').removeClass('active');} });});
$(function(){$('.pj-sam-92').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-92').addClass('active');}else{$('.pj-index-92').removeClass('active');} });});
$(function(){$('.pj-sam-93').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-93').addClass('active');}else{$('.pj-index-93').removeClass('active');} });});
$(function(){$('.pj-sam-94').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-94').addClass('active');}else{$('.pj-index-94').removeClass('active');} });});
$(function(){$('.pj-sam-95').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-95').addClass('active');}else{$('.pj-index-95').removeClass('active');} });});
$(function(){$('.pj-sam-96').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-96').addClass('active');}else{$('.pj-index-96').removeClass('active');} });});
$(function(){$('.pj-sam-97').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-97').addClass('active');}else{$('.pj-index-97').removeClass('active');} });});
$(function(){$('.pj-sam-98').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-98').addClass('active');}else{$('.pj-index-98').removeClass('active');} });});
$(function(){$('.pj-sam-99').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.pj-index-99').addClass('active');}else{$('.pj-index-99').removeClass('active');} });});






$(function(){$('.s-readmore').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.s-readmore-index').addClass('active');}else{$('.pj-sam-100').removeClass('active');} });});

// projects - 閉じるときの動作////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {$('.pj-index-close').click(function() {$('.pj-index-1').removeClass('active');$('.pj-sam-1').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-2').removeClass('active');$('.pj-sam-2').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-3').removeClass('active');$('.pj-sam-3').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-4').removeClass('active');$('.pj-sam-4').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-5').removeClass('active');$('.pj-sam-5').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-6').removeClass('active');$('.pj-sam-6').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-7').removeClass('active');$('.pj-sam-7').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-8').removeClass('active');$('.pj-sam-8').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-9').removeClass('active');$('.pj-sam-9').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-10').removeClass('active');$('.pj-sam-10').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-11').removeClass('active');$('.pj-sam-11').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-12').removeClass('active');$('.pj-sam-12').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-13').removeClass('active');$('.pj-sam-13').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-14').removeClass('active');$('.pj-sam-14').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-15').removeClass('active');$('.pj-sam-15').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-16').removeClass('active');$('.pj-sam-16').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-17').removeClass('active');$('.pj-sam-17').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-18').removeClass('active');$('.pj-sam-18').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-19').removeClass('active');$('.pj-sam-19').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-20').removeClass('active');$('.pj-sam-20').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-21').removeClass('active');$('.pj-sam-21').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-22').removeClass('active');$('.pj-sam-22').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-23').removeClass('active');$('.pj-sam-23').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-24').removeClass('active');$('.pj-sam-24').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-25').removeClass('active');$('.pj-sam-25').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-26').removeClass('active');$('.pj-sam-26').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-27').removeClass('active');$('.pj-sam-27').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-28').removeClass('active');$('.pj-sam-28').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-29').removeClass('active');$('.pj-sam-29').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-30').removeClass('active');$('.pj-sam-30').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-31').removeClass('active');$('.pj-sam-31').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-32').removeClass('active');$('.pj-sam-32').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-33').removeClass('active');$('.pj-sam-33').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-34').removeClass('active');$('.pj-sam-34').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-35').removeClass('active');$('.pj-sam-35').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-36').removeClass('active');$('.pj-sam-36').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-37').removeClass('active');$('.pj-sam-37').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-38').removeClass('active');$('.pj-sam-38').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-39').removeClass('active');$('.pj-sam-39').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-40').removeClass('active');$('.pj-sam-40').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-41').removeClass('active');$('.pj-sam-41').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-42').removeClass('active');$('.pj-sam-42').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-43').removeClass('active');$('.pj-sam-43').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-44').removeClass('active');$('.pj-sam-44').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-45').removeClass('active');$('.pj-sam-45').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-46').removeClass('active');$('.pj-sam-46').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-47').removeClass('active');$('.pj-sam-47').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-48').removeClass('active');$('.pj-sam-48').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-49').removeClass('active');$('.pj-sam-49').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-50').removeClass('active');$('.pj-sam-50').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-51').removeClass('active');$('.pj-sam-51').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-52').removeClass('active');$('.pj-sam-52').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-53').removeClass('active');$('.pj-sam-53').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-54').removeClass('active');$('.pj-sam-54').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-55').removeClass('active');$('.pj-sam-55').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-56').removeClass('active');$('.pj-sam-56').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-57').removeClass('active');$('.pj-sam-57').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-58').removeClass('active');$('.pj-sam-58').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-59').removeClass('active');$('.pj-sam-59').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-60').removeClass('active');$('.pj-sam-60').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-61').removeClass('active');$('.pj-sam-61').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-62').removeClass('active');$('.pj-sam-62').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-63').removeClass('active');$('.pj-sam-63').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-64').removeClass('active');$('.pj-sam-64').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-65').removeClass('active');$('.pj-sam-65').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-66').removeClass('active');$('.pj-sam-66').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-67').removeClass('active');$('.pj-sam-67').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-68').removeClass('active');$('.pj-sam-68').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-69').removeClass('active');$('.pj-sam-69').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-70').removeClass('active');$('.pj-sam-70').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-71').removeClass('active');$('.pj-sam-71').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-72').removeClass('active');$('.pj-sam-72').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-73').removeClass('active');$('.pj-sam-73').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-74').removeClass('active');$('.pj-sam-74').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-75').removeClass('active');$('.pj-sam-75').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-76').removeClass('active');$('.pj-sam-76').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-77').removeClass('active');$('.pj-sam-77').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-78').removeClass('active');$('.pj-sam-78').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-79').removeClass('active');$('.pj-sam-79').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-80').removeClass('active');$('.pj-sam-80').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-81').removeClass('active');$('.pj-sam-81').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-82').removeClass('active');$('.pj-sam-82').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-83').removeClass('active');$('.pj-sam-83').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-84').removeClass('active');$('.pj-sam-84').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-85').removeClass('active');$('.pj-sam-85').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-86').removeClass('active');$('.pj-sam-86').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-87').removeClass('active');$('.pj-sam-87').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-88').removeClass('active');$('.pj-sam-88').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-89').removeClass('active');$('.pj-sam-89').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-90').removeClass('active');$('.pj-sam-90').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-91').removeClass('active');$('.pj-sam-91').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-92').removeClass('active');$('.pj-sam-92').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-93').removeClass('active');$('.pj-sam-93').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-94').removeClass('active');$('.pj-sam-94').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-95').removeClass('active');$('.pj-sam-95').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-96').removeClass('active');$('.pj-sam-96').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-97').removeClass('active');$('.pj-sam-97').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-98').removeClass('active');$('.pj-sam-98').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-99').removeClass('active');$('.pj-sam-99').removeClass('active');});});
$(function() {$('.pj-index-close').click(function() {$('.pj-index-100').removeClass('active');$('.pj-sam-100').removeClass('active');});});

$(function() {$('.pj-index-close').click(function() {$('.pj-index-100').removeClass('active');$('.s-readmore-index').removeClass('active');});});

// projects - 絞り込み////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var searchBox = '.search-box'; // 絞り込む項目を選択するエリア
var listItem = '.tag-item';    // 絞り込み対象のアイテム
var hideClass = 'is-hide';     // 絞り込み対象外の場合に付与されるclass名

$(function() {
  // 絞り込み項目を変更した時
  $(document).on('change', searchBox + ' input', function() {
    search_filter();
  });
});

/**
 * リストの絞り込みを行う
 */
function search_filter() {
  // 非表示状態を解除
  $(listItem).removeClass(hideClass);
  for (var i = 0; i < $(searchBox).length; i++) {
    var name = $(searchBox).eq(i).find('input').attr('name');
    // 選択されている項目を取得
    var searchData = get_selected_input_items(name);
    // 選択されている項目がない、またはALLを選択している場合は飛ばす
    if(searchData.length === 0 || searchData[0] === '') {
      continue;
    }
    // リスト内の各アイテムをチェック
    for (var j = 0; j < $(listItem).length; j++) {
      // アイテムに設定している項目を取得
      var itemData = $(listItem).eq(j).data(name);
      // 絞り込み対象かどうかを調べる
      if(searchData.indexOf(itemData) === -1) {
        $(listItem).eq(j).addClass(hideClass);
      }
    }
  }
}

/**
 * inputで選択されている値の一覧を取得する
 * @param  {String} name 対象にするinputのname属性の値
 * @return {Array}       選択されているinputのvalue属性の値
 */
function get_selected_input_items(name) {
  var searchData = [];
  $('[name=' + name + ']:checked').each(function() {
    searchData.push($(this).val());
  });
  return searchData;
}


//loading
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    setTimeout('stopload()',10000);
  }

//img
$(function() 
{$('.pj-img').hover(function() 
{$('.pj-title').removeClass('active');
$('.pj-title').removeClass('active')
;});});