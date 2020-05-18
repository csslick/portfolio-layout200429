$(document).ready(function(){
  // 내부 링크(#)시 부드러운 스크롤 이동
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});