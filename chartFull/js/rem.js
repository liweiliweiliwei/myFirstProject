window.addEventListener("resize", function () {
    r(0);
});

/*window.onresize = r;*/
var rem = '100px';
function r(resizeNum) {
    var winW, winH;
    if (browserRedirect()) {
        winW = window.screen.availWidth;
        winH = window.screen.availHeight;
    } else {
        winW = getViewportInfo().w;
        winH = getViewportInfo().h;
    }
    if( winW > winH ){
        rem = winH / 7.5;
        document.documentElement.style.fontSize = rem + 'px';
        if (winH > window.screen.height && resizeNum <= 0) {
            setTimeout(function() {
                r(++resizeNum);
            }, 100);
        }
    } else {
        rem = winW / 7.5;
        document.documentElement.style.fontSize = rem + 'px';
        if (winW > window.screen.width && resizeNum <= 0) {
            setTimeout(function() {
                r(++resizeNum);
            }, 100);
        }
    }
}
setTimeout(r(0), 100);

// 判断是不是移动设备
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return 1;
    } else {
        return 0;
    }
}

// pc端取宽高
function getViewportInfo() {
    var w = (window.innerWidth) ? window.innerWidth : (document.documentElement && document.documentElement.clientWidth) ? document.documentElement.clientWidth : document.body.offsetWidth;
    var h = (window.innerHeight) ? window.innerHeight : (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.offsetHeight;
    return { w: w, h: h };
};