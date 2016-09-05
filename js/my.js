// JavaScript Document
$(function(){
	 $('#dowebok').fullpage({
		  scrollingSpeed: 400,
		  css3: true,
		  resize: true,
		  anchors: ["page1","page2","page3","page4","page5","page6"],
		  verticalCentered: false,
		  afterRender:function(){
			  $("#home").css({"display":"block"}).addClass("home_zoom");
			  $("header").before("<div id='header' style='opacity:0'></div>");
			  $("#home_head").addClass("home_boom");
			  $("header").animate({opacity:"1"},1000,function(){
				    $("#header").css({"opacity":"0.3"});
					$("#home_info1").fadeIn(700,function(){
						 $(this).next().animate({width:"800px"},700,function(){
							   $("#home_info2").fadeIn(450,function(){
								      $(this).next().fadeIn(450,function(){
										    $(this).next().fadeIn(450,function(){
												   $(this).next().fadeIn(450,function(){
													      $("aside").fadeIn(300);
													   });
												});
										  });
								   });
							 });
						});
				  });
				  $("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			  },
			  afterLoad:function(anchorLink,index){
				    if(index==1){
						 $("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
						}
					if(index==2){
						 $("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
						 $("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
						 $(".title_en").animate({width:"130px"},800,function(){
							 $(".title_en h2").slideDown(400);
							 });
						 $("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,function(){
							  $("#about_info p").eq(0).animate({bottom:"0"},700,function(){
								  $("#about_info p").eq(1).animate({bottom:"0"},700,function(){
									  $("#about_info p").eq(2).animate({bottom:"0"},700,function(){
										  $("#about_info p").eq(3).animate({bottom:"0"},700);
										  });
									  });
								  });
							 });
						}
				   if(index==3){
					    $("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
						$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
						$(".title_en").animate({width:"130px"},800,function(){
							$(".title_en h2").slideDown(400);
							});
						$(".skill_list_content").addClass("skill_scale");
					   }
				  if(index==4){
					  $("aside a").eq(3).addClass("selected").siblings().removeClass("selected"); 
					  $("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
					  $(".title_en").animate({width:"130px"},800,function(){
						   $(".title_en h2").slideDown(400);
						  });
					  }
				  if(index==5){
					  $("aside a").eq(4).addClass("selected").siblings().removeClass("selected"); 
					  $("#demo_content h1").after("<div class='title_en'><h2>· demo ·</h2></div>");
					  $(".title_en").animate({width:"130px"},800,function(){
						  $(".title_en h2").slideDown(400);
					  });
					  var i=-1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_r");
					   },200*i);
					}
				})
					  }
				  if(index==6){
					  $("aside a").eq(5).addClass("selected").siblings().removeClass("selected"); 
					  $("#contact_content h1").after("<div class='title_en'><h2>· demo ·</h2></div>");
					  $(".title_en").animate({width:"130px"},800,function(){
						  $(".title_en h2").slideDown(400);
						  $("#contact_head1").addClass("b_to_r");
						  });
					  }
				  },
			  onLeave:function(index){
				  if(index==2||index==3||index==4||index==5||index==6){
					  $(".title_en").remove();
					  }
				  }
 		 });
	});
//顶部文字
$("#header_p").mouseover(function(){
	$("#header_p1").html("resume");
	$("#header_p2").html("前端工程师");
	}).mouseout(function(){
		$("#header_p1").html("F2E");
		$("#header_p2").html("个人简历");
		});
//顶部导航弹框
$("header nav a:not(':first')").click(function(){
	   alert("正在努力建设中......请稍等");
	   return false;
	});
//头像切换
$("#home_photo2").hover(function(){
		$(this).fadeTo(800,1);
		},function(){
			$(this).stop(true,false).fadeTo(800,0);
	});
//侧边导航文字
$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200);
	});
// 技能明细切换
	$(".skill_icon").click(function(){
		$(".skill_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_scale");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(400);
			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
		}
	});
//图片轮播
$("#exp_list_slider").width($(".exp_list").width());
	$("#exp_list_content").width($(".exp_list").width()*3);
	$("#exp_list_slider_content").mouseenter(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,1);
	}).mouseleave(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
	});
	var page=1;
	$("#exp_timeline a").click(function(){
		$("#exp_list_content").stop(true,false).animate({left:-$(".exp_list").width()*$(this).index()},2000,"easeInOutCubic");
		page=$(this).index()+1;
		});
	$("#exp_list_toleft").click(function()
    {
		if(!$("#exp_list_content").is(":animated")){
			if(page==1){
				$("#exp_list_content").animate({left:"+=50"},200,function(){
					$(this).animate({left:"-=50"},200);
				});
				return false;
			}	
			$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
			page--;
		}
	});
	$("#exp_list_toright").click(function(){
		if(!$("#exp_list_content").is(":animated")){
			if(page==3){
				$("#exp_list_content").animate({left:"-=50"},200,function(){
					$(this).animate({left:"+=50"},200);
				});
				return;
			}
			$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
			page++;
		}
	});












































