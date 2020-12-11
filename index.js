$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).btn() > 100) {
            $('.btn').fadeIn();
        } else {
            $('.btn').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.btn').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});