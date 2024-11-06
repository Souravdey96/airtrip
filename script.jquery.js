$(document).ready(function () {
    $(".faq").on("click", ".ques", function () {
      $(this).toggleClass("active").next().slideToggle();
      $(".ans").not($(this).next()).slideUp(300);
      $(this).siblings().removeClass("active");
    });
  });
  $(document).ready(function(){
    $(".ico").click(function(){
        $(this).toggleClass("fa-xmark");
        $(".nav-menu").toggle(500);
    });
    $(window).resize(function(){
        if(screen.width > 980)
            $(".nav-menu").show();
    });
});

$(document).ready(function(){
    $(".drop-menu").hide();
   $(".ica").click(function(){
    $(this).toggleClass("fa-angle-right");
    $(this).toggleClass("fa-angle-down");
    $(".drop-menu").slideToggle(500);
   }); 
});
