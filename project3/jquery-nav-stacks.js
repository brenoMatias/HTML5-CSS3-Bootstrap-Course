jQuery(document).ready(function(){
    $('.toggle-menu-front').on('click', function(){
        $('.toggle-nav-front').slideToggle("slow");
    })
});

jQuery(document).ready(function(){
    $('.toggle-menu-back').on('click', function(){
        $('.toggle-nav-back').slideToggle("slow");
    })
});
