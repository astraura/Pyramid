$(document).bind( "mobileinit", function(event) {
       $.extend($.mobile.zoom, {locked:false,enabled:true});
});

$(document).bind('mobileinit', function(){
$.mobile.metaViewportContent = 'width=device-width';
}); 
});