$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }
        else
        {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else
        {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // Scroll up event
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    })
    // Menu button click event
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing animation script
    var typed=new Typed(".typing",{
        strings : ["Master's Student","Developer","Blogger","Designer","Master's Student"],
        typeSpeed : 100,
        backSpeed : 60,
        loop :true
    })
    var typed=new Typed(".typing-2",{
        strings : ["Master's Student","Developer","Blogger","Designer","Master's Student"],
        typeSpeed : 100,
        backSpeed : 60,
        loop :true
    })
    // Owl carouse1 script
    $('.carousel').owlCarousel({
        margin:100,
        loop:true,
        autoplay:true,
        autoplayTimeOut:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});