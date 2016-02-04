$(function(){
    // input placeholder 
    $("#username").attr('placeholder','Name');
    $("#useremail").attr('placeholder','Email Address');

    
    $("#TN_list ul li a").click(function(){
        // 섬네일 리스트 이미지 아웃라인
        $("#TN_list ul li a img").removeClass('active');
        $(this).children('img').addClass('active');
        
        // 섬네일 리스트영역 이미지 => 섬네일 메인 영역 이미지로  
        var newsList = $(this).children('img').attr("src").substring(0,20); 
        //console.log(newsList);
        $("#TNMain").html("<img src='"+newsList+"' alt='news link'/>");
        
    });
    
    // 섬네일 메인 영역 텍스트 내용 바꾸기        
    $("#TN_list ul li:eq(0)").click(function(){
        $("#TN_main_txt").html("<span>Lorem ipsum dolor sit amet, consectetur Nulla quis lorem neque, mattis venenatis lectus.</span>");    
    });
    $("#TN_list ul li:eq(1)").click(function(){
        $("#TN_main_txt").html("<span>두번째 기사내용</span>");    
    });
    $("#TN_list ul li:eq(2)").click(function(){
        $("#TN_main_txt").html("<span>세번째 기사내용</span>");    
    });
    $("#TN_list ul li:eq(3)").click(function(){
        $("#TN_main_txt").html("<span>네번째 기사내용</span>");    
    });    
    
    
});