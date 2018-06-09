// Sowing map
let imgs = ["img/solid1.jpg","img/solid1.jpg","img/solid1.jpg"];
let hrefs = ["http://www.baidu.com","http://www.1000phone.com","http://www.taobao.com"];
let ord = 0;//表示下标
let myTimer =null; 
function initUI(){
	$("#btns li:first").css({"background-color":"#BB1E7B"});		
	$("#solid img").slice(1).css({"display":"none"});
}
function changeImg(){
	myTimer = setInterval(function(){
		let outOrd = ord;
		ord=ord+1;
		showImg(outOrd,ord);
	},2000);
}
function showImg(outOrd,transOrd){
	ord=transOrd;
	if(ord>imgs.length-1 || ord<0){
		ord=0;
	}
	fadeInOut(outOrd,ord);
	$("#btns li").css({"backgroundColor":"#D0D7DA"});
	$("#btns li").eq(ord).css({"backgroundColor":"#BB1E7B"});	
}
function fadeInOut(outOrd,inOrd){
	if(outOrd==inOrd){
		return;
	}
	console.log("outOrd:"+outOrd);
	console.log("inOrd:"+inOrd);
	$("#solid img").eq(outOrd).fadeOut(1000);
	$("#solid img").eq(inOrd).fadeIn(1000);
}

$(function(){	
	initUI();
	$("#solid img").click(function(){
		let index = $("#solid img").index(this);
		window.location.href = hrefs[index];
	});	
	changeImg();
	$("#solid").mouseover(function(){
		clearInterval(myTimer);
	});
	$("#solid").mouseout(function(){
		changeImg();
	});
	$("#btns li").click(function(){
		clearInterval(myTimer);
		$("#solid img").eq(ord).stop(true,true);
		let index = $("#btns li").index(this);
		showImg(ord,index);
	});
})

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

$("#sixP").mouseover(function(){
	$(".footBox").show();
});
$("#sixP").mouseout(function(){
	$(".footBox").hide();
});




