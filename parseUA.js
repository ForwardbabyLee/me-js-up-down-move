/**
 * Created on 16/10/12.
 */

//        <!-- 1.PC各大浏览器--关闭当前页面 -->
function CloseWebPage() {
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
            window.opener = null;
            window.close();
        }
        else {
            window.open('', '_top');
            window.top.close();
        }
    }
    else if (navigator.userAgent.indexOf("Firefox") > 0) {
        window.location.href = 'about:blank ';
        window.location.href = 'www.baidu.com ';
        //window.history.go(-1);//后退一页
    }
    else {
        window.opener = null;
        window.open('', '_self', '');
        window.close();
    }
}

//      <!-- 2.判断--移动终端浏览器版本信息   -->
function parseUA() {
    var u = navigator.userAgent;
    var u2 = navigator.userAgent.toLowerCase();
    return { //移动终端浏览器版本信息
        //PC
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        //终端
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端

        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
        weixin: u2.match(/MicroMessenger/i) == "micromessenger",//微信浏览器
        ali: u.indexOf('AliApp') > -1, //阿里的软件
        qq: u2.indexOf('qqbrowser') > -1,//的软件 
        //qq2: u2.match(/QQ/i) == 'qq',   //qq内置浏览器
        qq2: u2.match(/MQQbrowser/i) == 'qq',   //qq内置浏览器
        e360e: u2.indexOf('360ee') > -1, 
        s360e: u2.indexOf('360se') > -1, 
        aoyou: u2.indexOf('aoyou') > -1, 
        baidu: u2.indexOf('baidu') > -1 ,
        wcgiphone: u.indexOf('WcgApple') > -1,//iphone wcg app
        wcgandroid: u.indexOf('wcgAndroid') > -1//android wcg app
    };
}
var ua = parseUA();

function clickMobile(){
    if (!ua.mobile) {
        <!-- 如果不是手机端，则链接跳转到pc某页面 -->
        location.href = 'http://www.baidu.com';
    }
}

//      <!-- 3.判断为微信浏览器    -->
window.onload = function(){
    if(isWeiXin()){//是微信浏览器
        //获取ID,让其内核信息输出
        var wxUserAgent = document.getElementById('wx-userAgent');
        wxUserAgent.innerHTML = window.navigator.userAgent;//就显示其内核信息
    }
};
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}


var isLogin=$('#isLogin').val();
$('.btn-box').on('click',function(){
    if(isLogin==0){
        var from = encodeURIComponent('/zhuanti/index?id=3');
        location.href='/user/login?from='+from+'&appparams=dmlld3R5cGU9bG9naW4mbmVlZGxvZ2luPXllcyZzdWNjZXNzdXJsPWh0dHBzJTNBJTJGJTJGbS53YW5nY2FpZ3UuY29tJTJGemh1YW50aSUyRmluZGV4JTNGaWQlM0Qz';
    }else if(isLogin==1){
        if(!!browserName) {
            if(browserName==='wcgapple' || browserName==='wcgandroid') {
                location.href = '/zhuanti/index?id=3&appparams=dmlld3R5cGU9bXlpbnZpdGUmbmVlZGxvZ2luPXllcw==';
            }else {
                $('.mark-box').fadeIn();
                $('.share-box').fadeIn();
            }
        }
    }
})