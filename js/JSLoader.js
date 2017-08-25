// JavaScript source code
var loadJS = function (url, location) {
    if (typeof location == 'undefined')
        location = document.head;
    var scriptTag = document.createElement('script');
    scriptTag.defer = true;
    scriptTag.type = 'text/javascript';
    scriptTag.src = url;
    location.appendChild(scriptTag);
};
function onloading()
{
  //  loadJS('js/PACE.min.js');

    loadJS('js/jquery-3.1.0.js');
   // loadJS('code-prettify-master/loader/run_prettify.js');
    loadJS('js/AJAX.js');
    loadJS('js/Define.js');
    loadJS('js/AeroGlassWindowByNawaNawa.js');
    loadJS('js/dragmoveByNawaNawa.js');
    loadJS('js/WindowsByNawaNawa.js');
    loadJS('js/GetVariable.js');
    loadJS('js/Random.js');
    loadJS('js/BackgroundRandom.js');
    loadJS('js/cookie.js');
    /*loadJS('js/FixedObject.js');*/
    document.head.innerHTML += '<link rel="stylesheet" href="css/AeroGlassByNawaNawa.css" type="text/css"/>';
    document.head.innerHTML += '<link rel="stylesheet" href="css/DesktopIconByNawaNawa.css" type="text/css"/>';
}
function onload()
{
    loadJS('js/BackStage.js');
}
onloading();
onload();