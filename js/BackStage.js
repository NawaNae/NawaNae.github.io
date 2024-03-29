﻿
function setCookieAeroColor() {
    setCookie("AeroColor", r + "," + g + "," + b + "," + a, 100);
}
function getCookieAeroColor() {
    if ((colorStr = getCookie('AeroColor')) != '') {
        colorStr=unescape(colorStr);
        colorStr = colorStr.split(',');
        r = parseInt(colorStr[0]);
        g = parseInt(colorStr[1]);
        b = parseInt(colorStr[2]);
        a = parseFloat(colorStr[3]);
        setAeroCssColor(r, g, b, a);
    }
}
var r = 0, g = 0, b = 0, a = 0;
function loading()
{
    if (location.href == "https://NawaNae.github.io") { location.href += "#main=pages/index.content"; }
    BackgroundRandom();
    var loadPage = document.createElement('div');
    loadPage.style.zIndex = 9999;
    loadPage.style.backgroundColor = 'rgba(105,190,240,1)';
    loadPage.style.height = document.documentElement.clientHeight;
    loadPage.style.width = document.documentElement.clientWidth;
    loadPage.style.position = 'fixed';
    loadPage.style.top = 0;
    loadPage.style.left = 0;
    loadPage.classList.add('loadPage');
    var loadingImg = createLoadingImg();
    loadPage.appendChild(loadingImg);
    document.body.appendChild(loadPage);
    var colorStr;
    getCookieAeroColor();
}


loading();

$(document).ready(function (e)
{
    
    $('body').css('background-image', 'url(' + BackGruondNow.URL + BackGruondNow.Name + '.' + BackGruondNow.Filetype + ')');
    var menu = createFullAeroWindowS('', '', 'Images/tanko.png', '000', 0, 0);
    menu.classList.add('menu');
    //POSTRequest('php/menu.php', '', function (txt) { menu.querySelector('.content').innerHTML = txt.response; })
    menu.style.bottom = getStyle(document.querySelector('.workbar'),'height');
    menu.style.top = '';
    GetAncenstorAeroWindowCtrl(menu).min();

    menu.querySelector('.dragbar>img').style.display = 'none';
    getVariable();
    $(document).on('click', 'a', function (e) {
        if ($(this).attr("data-hash") != null) {
            e.preventDefault();
            window.location.hash = $(this).attr("data-hash");
        }
    });
    $(document).on('click', '.menu .icon.file', function (e) {
        if ($(this).attr("data-hash") != null) {
            e.preventDefault();
            window.location.hash = $(this).attr("data-hash");
        }
    });
	 $(document).on('click', '.savepage', function (e) {
         document.cookie = 'href=' + location.href;
    });
     var loadPage = document.querySelector('.loadPage');
     window.clearTimeout(parseInt(loadPage.querySelector('.loadingImg').dataset.loadTimer));
     loadPage .remove();
});
window.onhashchange = function () {
    if (location.hash) {
        getVariable();
    } else {
    }
}



function setAeroCssColor(R, G, B, A) {
    var styleObj;
    if (null == (styleObj = document.head.querySelector('.colorCss'))) {
        styleObj = document.createElement('style');
        styleObj.classList.add('colorCss');
        document.head.appendChild(styleObj);
    }
    styleObj.innerHTML = '.AeroGlass,.WorkBar{background-color:rgba(' + R + ',' + G + ',' + B + ',' + A + ');}'
}
function setColor(R, G, B, A, inputObj) {
    var colorSel;
    if (typeof inputObj != 'undefined')
        colorSel = inputObj.parentNode;
    else
        colorSel = document.querySelector('.colorSelect');
    colorSel.querySelector('.color').style.backgroundColor = 'rgba(' + R + ', ' + G + ', ' + B + ', ' + A + ')';
}