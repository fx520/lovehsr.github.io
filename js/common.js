$(function(){
    $(".a-img-ban").eq(0).addClass('img-ban-curr');
    $(".li-img").eq(0).addClass('curr');
    var n = 0;
    setInterval(function(){
        if(n >= $('.li-img').length){
            n = 0;
        }
        $(".a-img-ban").eq(n).addClass('img-ban-curr').siblings('.a-img-ban').removeClass('img-ban-curr');
        $(".li-img").eq(n).addClass('curr').siblings('.li-img').removeClass('curr');
        n++;
    },4000)
    $('.li-img').click(function(){
        var num = $(".li-img").index(this);
        $(".a-img-ban").eq(num).addClass('img-ban-curr').siblings('.a-img-ban').removeClass('img-ban-curr');
        $(this).addClass('curr').siblings(".li-img").removeClass('curr');
        n = num;
    });
    $(".label").hover(function(){
        $(this).addClass('bg-f26868 c-fff').siblings('.label').removeClass('bg-f26868 c-fff');
    },function(){
        $(this).removeClass('bg-f26868 c-fff');
    });
    $(".work-con li a").hover(function(){
        $(this).children(".work_info").stop().animate({top:"0px"},300);
        $(this).children(".work_bak").stop().animate({top:"0px"},300);
    },function(){
        $(this).children(".work_info").stop().animate({top:"-122px"},300);
        $(this).children(".work_bak").stop().animate({top:"-122px"},300);
    });
})