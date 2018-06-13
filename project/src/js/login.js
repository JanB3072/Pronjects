function savecookie(key,value,days){
	var d=new Date();
	d.setDate(d.getDate()+days);
	document.cookie=key+"="+value+";expires="+d.toGMTString();
	location.reload();
};
$("#btn").click(function(){
	if($("#loginId").val()!="" && $("#passId").val()!=""){
		$.ajax({
			type:"POST",
			url:"php/login.php",
			data:"loginName="+$('#loginId').val()+"&loginPass="+$('#passId').val()+"",
			success:function(data){
				if(data=="1"){
					if($("#checkId").prop('checked')==true){
						// $.cookie('username',$('#loginId').val(),{expires:7});
						savecookie("loginName",$("#loginId").val(),7)
					}
					location.href="index.html";				
				}else{
					$(".loginTis").html("用户名或密码错误");
				};
			}
		});
	}else if($("#loginId").val()=="" && $("#passId").val()!=""){
		$(".loginTis").html("请输入用户名");
	}else if($("#loginId").val()!="" && $("#passId").val()==""){
		$(".loginTis").html("请输入密码");
	}
});