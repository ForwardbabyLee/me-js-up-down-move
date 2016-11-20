/**
 * Created by Lml on 16/10/31.
 *
 * 移动端使用localStorage缓存Js和css文的方法(web开发), 微信中有问题,但可通过cookie来解决:
 * //在开发基于微信的Web页面时，发现有些机型不能存储信息到localStorage中，或者是页面一旦关闭，存储的信息也失效了。
 *
 * 将jquery和公共样式缓存到localStorage，可以减少Http请求，从而优化页面加载时间，下面的代码可以实现此功能：
 *
*/

//入口函数
if (window.localStorage) {
    initJs();//初始化js
    initCss("css","/css/css_whir.css");//初始化css
} else {//动态添加文件
    addFile("/js/jquery-1.8.3.min.js", "js");
    addFile("/js/whir.turntable.js", "js");
    addFile("/css/css_whir.css", "css");
}

//第一步：加载页面js：先加载jQuery后加载用户脚本
function initJs() {
    var name = "jquery";
    var url = "/js/jquery-1.8.3.min.js";
    var xhr;
    var js = window.localStorage ? localStorage.getItem(name) : "";

    if (js == null || js.length == 0) {
        if (window.ActiveXObject) {//判断浏览器是否支持ActiveX控件
            xhr = new ActiveXObject("Microsoft.XMLHTTP");//通过实例化ActiveXObject的一个新实例,来创建XMLHTTPRequest对象
        } else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();// 创建XMLHTTPRequest对象(在IE7及非IE浏览器中可以利用)
        }
        xhr.open("GET", url);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                js = xhr.responseText;
                localStorage.setItem(name, js);
                js = js == null ? "" : js;
                addTxt(js, "js");
                initTurntable(); //确保先引用Jquery
            }
        };
    } else {
        addTxt(js, "js");
        initTurntable();
    }
}
//加载自定义脚本
function initTurntable() {
    var name = "turntable";
    var url = "/js/whir.turntable.js";
    var xhr;
    var js = window.localStorage ? localStorage.getItem(name) : "";
    if (js == null || js.length == 0) {
        if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        xhr.open("GET", url);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                js = xhr.responseText;
                localStorage.setItem(name, js);
                js = js == null ? "" : js;
                addTxt(js, "js");
            }
        };
    } else {
        addTxt(js, "js");
    }
}
//第二步：初始化Css
function initCss(name, url) {
    var xhr;
    var css = window.localStorage ? localStorage.getItem(name) : "";
    if (css == null || css.length == 0) {
        if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        xhr.open("GET", url);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                css = xhr.responseText;
                localStorage.setItem(name, css);
                css = css == null ? "" : css;
                css = css.replace(/images\//g, "style/images/");
                addTxt(css, "css");
            }
        };
    } else {
        css = css.replace(/images\//g, "style/images/");
        addTxt(css, "css");
    }
}
//辅助方法1：动态添加js，css文件引用
function addFile(url, fileType) {
    var head = document.getElementsByTagName('HEAD').item(0);
    var link;
    if (fileType == "js") {
        link = document.createElement("script");
        link.type = "text/javascript";
        link.src = url;
    } else {
        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.rev = "stylesheet";
        link.media = "screen";
        link.href = url;
    }
    head.appendChild(link);
}
//辅助方法2：动态添加js，css文件内容
function addTxt(text, fileType) {
    var head = document.getElementsByTagName('HEAD').item(0);
    var link;
    if (fileType == "js") {
        link = document.createElement("script");
        link.type = "text/javascript";
        link.innerHTML = text;
    } else {
        link = document.createElement("style");
        link.type = "text/css";
        link.innerHTML = text;
    }
    head.appendChild(link);
}




//0000000: 在开发基于微信的Web页面时，发现有些机型不能存储信息到localStorage中，或者是页面一旦关闭，存储的信息也失效了。
function setCookie(c_name,value,expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

//取回cookie
function getCookie(c_name) {
    if (document.cookie.length>0) {
        cstart=document.cookie.indexOf(c_name + "=");
        
        if (cstart!=-1) {
            cstart=cstart + c_name.length+1;
            cend=document.cookie.indexOf(";",cstart);
            if (cend==-1) cend=document.cookie.length;
            return unescape(document.cookie.substring(cstart,cend));
        }
    }
    return "";
}
//设置cookie，有效期为365天
    setCookie('username','123',365);
//取回，若cookie失效，将返回空
    getCookie('username');

//var xml=new ActiveXObject("Microsoft.XMLHTTP");
//创建XMLHttpRequest 对象（这是在IE7以前的版本中）；在较新的IE版本中可以利用
//var xml=new ActiveXObject("Msxml2.XMLHTTP") //的形式创建XMLHttpRequest对象;
// 而在IE7及非IE浏览器中可以利用
//var xml=new XMLHttpRequest() //创建XMLHttpRequest对象。
