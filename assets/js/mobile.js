


$(window).on('load', function () {
    
   
    if (window.innerWidth < 992) {
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
            element.addEventListener('click', function (e) {
              e.stopPropagation();
            });
        })
    }
    $(window).on('resize', function () {
        if ($(window).width() > 992) {
            location.replace('./index.html')
        }
    })
    
   
    
})






  