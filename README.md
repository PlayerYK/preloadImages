preloadImages
=============

jQuery preloadImages

Online Demo: http://jsbin.com/AdacIfI/2

Usage:

    $(['img1.jpg','img2.jpg']).preloadImages([allCallback(succeedCount,len)
    [,oneCallback(isSucceed,finishedCount,len,src),
    [urlPadding]]]);

eg.

    var imgList = ['img1.jpg','img2.jpg'];
    var urlPadding = 'http://my.custom.domain/';
    $(imgList).preloadImages(function(succeedCount,len){
        // all images finished ...
    },function(isSucceed,finishedCount,len,src){
        // one image finished, succeed or failed ...
    },urlPadding)