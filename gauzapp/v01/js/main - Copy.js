var action,preloader;
var images=["logo-big-gray.png","bkg-blue-blur.png","bkg-blue-noise.png","logo-big-simple.png","logo.png","andrei.png","pavement.jpg","gradient-top.png","gradient-super.jpg","bkg-header.jpg","bkg-lines.png","icons.png","street.jpg","lb01-hospital.png","bkg-shadow.png","lb02.png","roofs.jpg","lb03-university.png","street-2.jpg","lb04.png","rb01.png","rb02-highschool.png","bkg-park.jpg","rb03-office.png","bkg-footer.png","bkg-navigation.png","bkg-navigation-pane.png","bkg-testimonial.png","portfolio/scc.jpg","portfolio/csam.jpg","portfolio/aqd.jpg","portfolio/garphee.jpg","portfolio/oakhouse.jpg","portfolio/1800courier.jpg"];
$(document).ready(function(){
	action=new Website.Action;
	var e="http://andreiserban.com/square.png?u="+ec.r(window.location.href)+"&r="+ec.r(document.referrer)+"&b="+ec.r(navigator.userAgent)+"&l="+ec.r(navigator.language)+"&t="+ec.r((new Date).toString());
	var t=new Image(1,1);
	t.src=e;
	preloader=new Preloader.Instance;
	preloader.SetCDNUrl(cdnUrl);
	for(var n in images){
		preloader.AddImageInQueue(images[n])
	}
	preloader.LoadImages("preloader","preloader-logo","preloader-color","preloader-text",function(){
		$("body").removeAttr("style");
		action.InitActionStart()})});
(function(e){
	e.Website=Website=new Object;
	Website.Action=function(){
		function N(){
			C($(document).height(),function(){
				$("#navigation-button-contact").addClass("active")
			})
		}function C(e,t){
			m=true;
			var n=Math.round(Math.abs(M()-e)/2);
			$("html").animate({scrollTop:e},n);
			$("body").animate({scrollTop:e},n,function(){
				g=false;
				m=false;
				var e=_();
				P(e.pageMarginTop);
				if(typeof t=="function"){
					t()
				}
			})
		}
		function k(){
			v=true;
			$("body").css({"overflow-y":"scroll",height:$(e).height()+"px"})
		}
		function L(){
			$("body").css({"overflow-y":"scroll",height:x+"px"});
			g=true;e.scrollTo(0,D(parseInt(i.css("margin-top").replace("px",""))));
			o.removeClass("active");
			v=false
		}
		function O(){
			p=e.innerHeight;
			d=Math.floor(p/2);x=i[0].offsetHeight*S*.48;if(!b){r.style.height=x+"px"}
		}
		function M(){
				return n&&n.scrollTop||r&&r.scrollTop||0
		}
		function _(){
			var e=Math.floor(l.style.height/2);
			var t=M();
			var n=i.height();
			var r=t*E+110;
			var s=r>d?d:r;
			var o=s<d?0:-1*(r-s);
			if(o*-1+p>n-20){
				o=(n-p)*-1}
				return{pageMarginTop:o,andreiTop:s}
			}
			function D(e){
				return(e*-1+d-110)/E
			}
			function P(t){
				for(var n in T){
					var r=T[n];
					if(r.from>t&&r.to<t){
						if(!g){
							k();
							i.css("margin-top",r.marginTop+"px");
							var u=s.find("#"+n);
							if(n=="contact"){
								u.find("div.message-holder").remove();
								u.find("input.text, textarea").val("")
							}
							u.fadeIn(400);
							o.removeClass("active");
							s.find("#navigation-button-"+n).addClass("active");
							e.location.hash=n
						}
						return false
					}
				}
				g=false
			}
			var t;
			var n=document.documentElement,r=document.body;
			var i,s,o,u,a;
			var f=document.getElementById("logo-image");
			var l=document.getElementById("andrei");
			var c=document.getElementById("street");
			var h=0,p=0,d=0;var v=false,m=false,g=false,y=false;
			var b=false;
			var w=false;
			var E=.2;
			var S=2/E;
			var x=0;
			var T={
				birth:{from:-1030,to:-1070,marginTop:-1052
				},
				"high-school":{
					from:-2280,to:-2320,marginTop:-2301
				},
				university:{
					from:-3080,to:-3120,marginTop:-3100
				},
				skills:{
					from:-4015,to:-4055,marginTop:-4032
				},
				portfolio:{
					from:-5150,to:-5190,marginTop:-5170
				}
			};
			var A=this.InitActionStart=function(){
				if(!b){
					e.scrollTo(0,0)
				}O();
				if(typeof T[e.location.hash.replace("#","")]!="undefined"){
					if(!b){
						C(D(T[e.location.hash.replace("#","")].marginTop))
					}
				}
				else if(e.location.hash=="#contact"){
					if(!b){
						N()
					}
				}
				else{
					e.location.hash="walk"
				}
			};
			var H=function(){
				i=$("#page");
				s=$("#navigation");
				o=s.find("ul.links a");
				u=s.find("section.navigation-pane");
				a=i.find("#message-placeholder");
				b=$(r).hasClass("mobile");
				w=$(r).hasClass("i")};
				var B=function(){
					if(b){
						if(w){
							var t=$("<canvas/>",{id:"andrei-canvas"}).attr("width",60).attr("height",181).css({"z-index":22,width:"60px",position:"fixed","margin-left":"-30px",top:Math.round($(e).height()/2)+"px",left:"50%"});
							$(l).after(t).remove();
							var n=new Image;
							n.src=cdnUrl+"andrei.png";
							var r=document.getElementById("andrei-canvas");
							var c=r.getContext("2d");
							$(e).load(function(){
								c.drawImage(n,0,0,60,181,0,0,60,181)
							});
							document.addEventListener("touchmove",function(){
								var e=$(document).scrollTop();
								r.width=r.width;
								c.drawImage(n,Math.floor(e/40)%2*60,0,60,181,0,0,60,181)
							},false)
						}
						else{
							$(l).remove()}
						}else{
							o.click(function(){
								if(!m){var e=$(this).attr("href");
								var t=e.replace("#","");
								if(typeof T[t]!="undefined"){
									L();
									var n=D(T[t].marginTop);
									var r=null;
									u.each(function(){
										if($(this).is(":visible")){
											r=$(this)}});
									if(r!=null){
										r.fadeOut(400,function(){
											C(n)
										}
										)}
										else{
											C(n)
										}
									}
									else if(t=="contact"){
										var r=null;
										L();
										u.each(function(){
											if($(this).is(":visible")){
												r=$(this)
											}
										});
										if(r!=null){
											r.fadeOut(400,function(){
												N()
											})
										}
										else{
											N()
										}
									}
								}
							});
							s.find("#back-to-top").click(function(){
								if(!m){
									var t=null;
									u.each(function(){
										if($(this).is(":visible")){
											t=$(this)
										}
									});
									L();
									if(t!=null){
										t.fadeOut(400,function(){
											C(0);
											e.location.hash="walk"})
									}
									else{
										C(0);
										e.location.hash="walk"
									}
								}
							});
							$("#arrow-top, #arrow-bottom, #go-back-up").click(function(){
								if(!m){
									C(D(T.birth.marginTop));
									e.location.hash="walk"
								}
							});
							u.find(".move-on span").click(function(t){
								t.preventDefault();
								$(this).parent().parent().fadeOut(400,function(){
									L();
									e.location.hash="walk"
								})
							});
							$(e).resize(function(){
								O()}).scroll(function(){
									if(!v){
										h=++h;
										var e=_();
										var t=e.pageMarginTop;
										var n=e.andreiTop;
										l.style.top=n+"px";
										l.style.backgroundPosition=Math.floor(h/10)%2*-60+"px 0px";
										i.css("margin-top",t+"px");
										var r=0;
										if(n>300){
											r=1}
											else if(n>200){
												r=(n-200)/100}f.style.opacity=r;
												var o=0;
												if(t<-710){
													o=1
												}
												else if(t<-610){
													o=1-(710+t)/100}s.css("opacity",o);
													if(!m){
														P(t)
													}
												}
											})
									}
							$("#portfolio-projects").each(function(){
								var e=$(this).children("#portfolio-projects-slider");
								var t=e.children("li");
								var n=$(this).children("#portfolio-projects-prev");
								var r=$(this).children("#portfolio-projects-next");
								n.click(function(){
									if(!y){
										y=true;var n=e.children("li.active");
										var r=n.index();
										var i=r-1<0?t.length-1:r-1;
										var s=t.eq(i);
										s.css({left:"-100%"});
										n.animate({left:"100%"},300);
										s.animate({
											left:"0"},300,function(){
												n.removeClass("active");
												s.addClass("active");
												y=false})}});
								r.click(function(){
									if(!y){
										y=true;
										var n=e.children("li.active");
										var r=n.index();
										var i=r+1>t.length-1?0:r+1;
										var s=t.eq(i);s.css({left:"100%"});
										n.animate({
											left:"-100%"
										},300);
										s.animate({
											left:"0"
										},300,function(){
											n.removeClass("active");
											s.addClass("active");
											y=false
										})
									}
								})
							});
$("#contact, #contact-form").each(function(){
	var e=false;
	var t=$(this);
	t.find("div.submit a").click(function(n){
		n.preventDefault();
		if(!e){
			e=true;
			var r=$(this);
			t.find(".message-holder").remove();
			r.text("Please wait...").addClass("inactive");
			$.ajax({
				url:t.attr("action"),
				type:"POST",
				dataType:"json",
				data:t.serialize(),
				success:function(n){
					a.addClass("error");
					a.text(n.message);
					if(n.status!="error"){
						t.find("input.text, textarea").val("")}
						r.text("Send").removeClass("inactive");
						e=false
					},
				error:function(){
					r.text("Send").removeClass("inactive");
					e=false
				}
			})
		}
	})
})
};
(this.Init=function(){
	t=this;
	H();
	B()
})()}
})(window);
(function(e){
	e.Preloader=Preloader=new Object;
	Preloader.Instance=function(){
		var e;
		var t=0;
		var n,r,i,s;
		var o=new Array;
		var u="";
		var a=[];
		var f=false;
		var l=this.SetCDNUrl=function(e){
			u=e};
			var c=this.AddImageInQueue=function(e){
				a.push(u+e)};
				var h=this.LoadImages=function(e,u,l,c,h){
					n=$("#"+e);
					r=n.find("#"+u);
					i=r.children("#"+l);
					s=n.find("#"+c);
					for(var p in a){
						var d=new Image(1,1);
						d.src=a[p];
						o.push(d)
					}
					for(var p in o){
						o[p].onload=function(){
							var e=++t/o.length;
							i.height(e*r.height());
							s.text("Loading... "+Math.round(e*100)+"%");
							if(e>.95){
								n.remove();
								if(!f){
									h();
									f=true
								}
							}
						}
					}
				};
				var h=this.SimpleLoadImages=function(){
					for(var e in a){
						var t=new Image(1,1);
						t.src=a[e];o.push(t)
					}
				};
				(this.Init=function(){
					e=this
				})()
			}
		})(window);
		var ec={
			_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
			r:function(e){
				var t="";
				var n,r,i,s,o,u,a;
				var f=0;
				e=ec._utf8_encode(e);
				while(f<e.length){
					n=e.charCodeAt(f++);
					r=e.charCodeAt(f++);
					i=e.charCodeAt(f++);
					s=n>>2;
					o=(n&3)<<4|r>>4;
					u=(r&15)<<2|i>>6;
					a=i&63;
					if(isNaN(r)){
						u=a=64
					}
					else if(isNaN(i)){
						a=64
					}
					t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)
				}
				return t
			},
			ur:function(e){
				var t="";
				var n,r,i;
				var s,o,u,a;
				var f=0;
				e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");
				while(f<e.length){
					s=this._keyStr.indexOf(e.charAt(f++));
					o=this._keyStr.indexOf(e.charAt(f++));
					u=this._keyStr.indexOf(e.charAt(f++));
					a=this._keyStr.indexOf(e.charAt(f++));
					n=s<<2|o>>4;r=(o&15)<<4|u>>2;
					i=(u&3)<<6|a;
					t=t+String.fromCharCode(n);
					if(u!=64){
						t=t+String.fromCharCode(r)
					}
					if(a!=64){
						t=t+String.fromCharCode(i)
					}
				}
				t=ec._utf8_decode(t);
				return t
			},
			_utf8_encode:function(e){
				e=typeof e!="undefined"?e.replace(/\r\n/g,"\n"):"";
				var t="";
				for(var n=0;n<e.length;n++){
					var r=e.charCodeAt(n);
					if(r<128){
						t+=String.fromCharCode(r)
					}
						else if(r>127&&r<2048){
							t+=String.fromCharCode(r>>6|192);
							t+=String.fromCharCode(r&63|128)
						}
						else{
							t+=String.fromCharCode(r>>12|224);
							t+=String.fromCharCode(r>>6&63|128);
							t+=String.fromCharCode(r&63|128)
						}
					}
					return t
				},
				_utf8_decode:function(e){
					var t="";
					var n=0;
					var r=c1=c2=0;
					while(n<e.length){
						r=e.charCodeAt(n);
						if(r<128){
							t+=String.fromCharCode(r);
							n++
						}
						else if(r>191&&r<224){
							c2=e.charCodeAt(n+1);
							t+=String.fromCharCode((r&31)<<6|c2&63);
							n+=2
						}
						else{
							c2=e.charCodeAt(n+1);
							c3=e.charCodeAt(n+2);
							t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);
							n+=3
						}
					}
					return t
				}
			}