
let aboutOffcet= $('#sec-2').offset().top
$(window).scroll(()=>{
    let scrollTop=$(window).scrollTop()
    if(scrollTop>aboutOffcet){
$('.navbar-1').css('background-color','blue')
$('#btnup').fadeIn(1000)
    }else if(scrollTop<aboutOffcet){
        $('.navbar-1').css('background-color','transparent')
        $('#btnup').fadeOut(1000)
    }
    
})

$('#btnup').click(()=>{
   $('html,body').animate({scrollTop:0},1000)
})


$('.nav-item a[href^="#"]').click(function(){
    let aHref= $(this).attr('href')
    let offsetItem= $(aHref).offset().top
    $('li a').removeClass('active')
    $(this).addClass('active')
    $('html,body').animate({scrollTop:offsetItem},500)
})