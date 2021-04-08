

function hoverDisplay(id, number) {
    let imgList = document.querySelectorAll('.switch-pagination img');
    let disList = document.getElementsByClassName('Bar-dis');
    
    for (let i = 1; i <= 10; i++){
        imgList[i-1].src = `https://static.westarcloud.com/5e7d8fbef9ad9000233edc3f/images/pc-icon${i}.png!/lossless/true`;
        disList[i-1].style.display = "none";
    }
    imgList[number].src = `https://static.westarcloud.com/5e7d8fbef9ad9000233edc3f/images/pc-icon${number+1}-hover.png!/lossless/true`;
    let showDis = document.getElementById(id);
    
    showDis.style.display = "block";

}

$(window).on('load',function () {
    
    $('.flexslider').flexslider({
        animation: 'slide',
        slideshowSpeed: 3000,
        directionNav: false,
        controlNav:true
    });
    var wow = new WOW({
            
        mobile:false
    });
    wow.init();
    $('.img-container').magnificPopup({
        items: [
            
            {
                src: '//static.westarcloud.com/5e7d8fbef9ad9000233edc3f/file/20200403/14d861bb1chc5ae576a16i4717762b8d.mp4',
                type: 'iframe'
            },
            
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }


});
// let arrProduct = document.querySelectorAll('.product-hover-effect');
// let arrPara = document.querySelectorAll('.product-hover-effect p');
// let arrOverlay = document.querySelectorAll('.hover-product');

// for (let i = 0; i < arrOverlay.length; i++){
    
//     arrProduct[i].addEventListener('mouseenter', function () {
        
//         arrOverlay[i].style.display = 'flex';
        
//         arrPara[2 * i].style.color = 'white';
//         arrPara[2*i+1].style.color = 'white';
//     })
//     arrProduct[i].addEventListener('mouseleave', function () {
//         arrOverlay[i].style.display = 'none';
//         arrPara[2 * i].style.color = '#163029';
//         arrPara[2*i+1].style.color = '#C19B5D';

//     })
// }