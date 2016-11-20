/**
 * Created by Lml on 16/11/2.
 */


//方法一自我执行匿名函数:弹出"1"
(function(){alert(1);})();
//方法二匿名函数:弹出"1"
(function(){alert(1);}());


//阻止默认事件,方法一:
$('.close-app-img').on('click', function (e) {
    var e = e || window.event;
    e.preventDefault();//阻止默认事件

    $('.footer-load').css({display: 'none'});
});

//阻止默认事件,方法二:
$('.close-app-img').on('click', function () {
    $('.footer-load').css({display: 'none'});
    return false;
});

//阻止冒泡事件,方法一:
$('.close-app-img').on('click', function (e) {
    var e = e || window.event;
    if(document.all){  //只有ie识别
        e.cancelBubble=true;
    }else{
        e.stopPropagation();
    }
    event.stopPropagation();//阻止冒泡事件
    $('.footer-load').css({display: 'none'});

//     return false;
});

/**
总结:
    jQuery 提供了两种方式来阻止事件冒泡。

    方式一：event.stopPropagation();
    方式二：return false;
 */