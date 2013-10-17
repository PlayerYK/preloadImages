preloadImages
=============

jQuery preloadImages

Online Demo: http://jsbin.com/AdacIfI/1

Usage:

    $(['img1.jpg','img2.jpg']).preloadImages([handler(isSucceed,finishedCount,len,src)[,handler(succeedCount,len)]]);


    var imgList = ['img1.jpg','img2.jpg'];
    $(imgList).preloadImages(function(isSucceed,finishedCount,len,src){
            //...              
        },function(succeedCount,len){
            //...
        })