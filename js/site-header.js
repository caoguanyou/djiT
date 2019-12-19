
$('.nvt-t').click(function () {
    console.log($(this))
    if ($(this).siblings('.nav-menu').css('display') === 'block'){
        $(this).siblings('.nav-menu').css('display','none')
    }else {
        $(this).siblings('.nav-menu').css('display','block')
    }



});