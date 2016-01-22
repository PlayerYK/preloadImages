/**
 * image preload
 * @param allCallback function oneCallback(isSucceed,finishedCount,len,src) called after each image is preloaded
 * @param oneCallback function allCallback(succeedCount,len) called after all images are preloaded
 * @param urlPadding string if set, pre-padding to each image url
 * @author kamal.yu@gmail.com
 * @update 2016-1-21
 */
$.fn.preloadImages = function(allCallback,oneCallback,urlPadding) {
    oneCallback = typeof oneCallback === 'function'?oneCallback: $.noop;
    allCallback = typeof allCallback === 'function'?allCallback: $.noop;
    var len = this.length;
    var finishedCount = 0;
    var succeedCount = 0;
    var completeLoading = function(src,isSucceed){
        finishedCount++;
        if(isSucceed){
            succeedCount++;
        }
        oneCallback(isSucceed,finishedCount,len,src);
        
        if(finishedCount == len){
            allCallback(succeedCount,len);
        }
    };
    this.each(function() {
        var _this = this;
        if(urlPadding && typeof urlPadding == 'string'){
            _this = urlPadding + _this;
        }
        var imgLoad = new Image();
        $(imgLoad)
            .load(function() {
                completeLoading(_this,true);
            })
            .error(function(){
                completeLoading(_this,false);
            })
            .attr({ src: _this });
    });
};