// option Code
$(".subNavCen a").each(function(k,v){
	$(v).mouseover(function(){
		$(".content .secondary").each(function(m,n){
		if(k==m){
			$(n).show();
			$(".trigon").each(function(x,y){
				if(k==x){
					// console.log(y);
					$(y).show();
				};
			});
			}
		});
	});
	$(v).mouseout(function(){
		$(".content .secondary").each(function(m,n){
		if(k==m){
			$(n).hide();
				$(".trigon").hide();
			};
			$(n).mouseover(function(){
				$(n).show();
				$(".trigon").each(function(x,y){
				if(m==x){
					// console.log(y);
					$(y).show();
					};
				});
			});
			$(n).mouseout(function(){
				$(n).hide();
				$(".trigon").hide();
			})
		});
	});
});

// enter img
$(".BottomTopBox #imgId").each(function(k,v){
		$(".BottomTopBox #imgId").each(function(m,n){
			$(v).mouseenter(function(){
			if(k==m){
				$(n).animate({
					width:"100%",
					height:"100%",
				},1000);
			};
		});
		$(".BottomTopBox #imgId").mouseleave(function(){
			if(k==m){
				$(n).animate({
					width:"90%",
					height:"90%",
				},1000);
			};
		});	
	});
});
$("#sixP").mouseover(function(){
	$(".footBox").show();
});
$("#sixP").mouseout(function(){
	$(".footBox").hide();
});
