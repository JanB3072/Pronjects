// option Code
$(".navCen a").each(function(k,v){
	$(v).mouseover(function(){
		$(".content .secondary").each(function(m,n){
		if(k==m){
			$(n).show();
			$(".trigon").each(function(x,y){
				if(k==x){
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
	$(".imgsBox li").each(function(k,v){
		$(v).mousemove(function(){
			$(".mirrorBox").css("backgroundImage","url(img/fiveb"+(k+1)+".jpg)");
			$(".bigBox").css("backgroundImage","url(img/fiveb"+(k+1)+".jpg)");
		});
	});
	$(".mirrorBox").mouseover(function(){
		$(".bigBox").css("display","block");
		$(".smallBox").css("display","block");
	});
	
	$(".mirrorBox").mouseout(function(){
		$(".bigBox").css("display","none");
		$(".smallBox").css("display","none");
	});
	
	$(".mirrorBox")[0].onmousemove=function(event){
		let evt = event || window.event;
		//1、数据
		let left1 = evt.pageX-$(".mirrorBox")[0].offsetLeft-$(".smallBox")[0].offsetWidth/2;
		let top1 =  evt.pageY-$(".mirrorBox")[0].offsetTop-$(".smallBox")[0].offsetHeight/2;
		if(left1<0){
			left1=0;
		}else if(left1>(450-$(".smallBox")[0].offsetWidth)){
			left1 = 450-$(".smallBox")[0].offsetWidth;
		};
		if(top1<0){
			top1=0;
		}else if(top1>(450-$(".smallBox")[0].offsetHeight)){
			top1 = 450-$(".smallBox")[0].offsetHeight;
		};
		$(".smallBox")[0].style.left=left1+"px";
		$(".smallBox")[0].style.top=top1+"px";
		$(".bigBox")[0].style.backgroundPosition = (-2*left1)+"px "+(-2*top1)+"px";
	};
