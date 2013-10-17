preloadImages
=============

jQuery preloadImages

Usage:

    $(['img1.jpg','img2.jpg']).preloadImages([handler(isSucceed,finishedCount,len,src)[,handler(succeedCount,len)]]);
    
    var imgList = ['img1.jpg','img2.jpg'];
    $(imgList).preloadImages(function(isSucceed,finishedCount,len,src){
            //...              
        },function(succeedCount,len){
            //...
        })