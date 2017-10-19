$(function(){
	var win = $(window),
		doc = $(document),
		body = $('body'),
		$self = $(this);
		
	// File upload
    $('.file-upload').change(function() {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $(this).parent('label').siblings('span').html(filename);
    });


 	$("#mynav").click(function(){
 		$(this).addClass('responsive');
 		$(".btn-close").show(); 
        $("#content").animate({right: '260px'});  
        $(".logo").hide();              
 	});
 	$(".btn-close").click(function(){
 		$("#mynav").removeClass('responsive');
 		$(this).hide();
        $("#content").animate({right: '0px'}); 
        $(".logo").show();  
 	});

    $('.textarea').on('input', function(){
        $(".placeholder").hide();
    });
   		
});