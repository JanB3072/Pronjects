// option Code
$(".navCen a").each(function(k,v){
	$(v).mouseover(function(){
		$(".content .secondary").each(function(m,n){
		if(k==m){
			$(n).show();
			$(".trigon").each(function(x,y){
				if(k==x){
					console.log(y);
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
					console.log(y);
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