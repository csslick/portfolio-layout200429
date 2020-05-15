// main.js

$(function(){

  // gnb 안보임(초기 설정)
  // $('#main_gnb').css('display', 'none');

  // 토글 메뉴(슬라이드 업다운 효과)
  $('#btn_toggle').on('click', function(){
    $('#main_gnb').slideToggle();
  });

  // pc, 모바일 GNB 반응형 표시 처리
  window.addEventListener('resize', function(){
    var w = window.innerWidth;
    if(w >= 768) {
      $('#main_gnb').css('display', 'block');
    } else {
      $('#main_gnb').css('display', 'none');
    }
  })


});