
/*
 *1. html5 屏幕旋转事件：onorientationchange
 *2.       添加事件监听: addEventListener
 *
 * 添加屏幕旋转事件侦听，可随时发现屏幕旋转状态（左旋、右旋还是没旋）。例子：
 *
 * window.orientation属性与onorientationchange事件  :

 window.orientation :这个属性给出了当前设备的屏幕方向，0表示竖屏，正负90表示横屏（向左与向右）模式
 onorientationchange : 在每次屏幕方向在横竖屏间切换后，就会触发这个window事件，用法与传统的事件类似

*/
// 判断屏幕是否旋转
function orientationChange() {

    switch (window.orientation) {

        case 0:
            alert("肖像模式 0,screen-width: " + screen.width + "; screen-height:" + screen.height);
            break;

        case -90:
            alert("左旋 -90,screen-width: " + screen.width + "; screen-height:" + screen.height);
            break;

        case 90:
            alert("右旋 90,screen-width: " + screen.width + "; screen-height:" + screen.height);
            break;

        case 180:
            alert("风景模式 180,screen-width: " + screen.width + "; screen-height:" + screen.height);
            break;
    }
}

// 添加事件监听

addEventListener('load', function(){

    orientationChange();

    window.onorientationchange = orientationChange;

});

