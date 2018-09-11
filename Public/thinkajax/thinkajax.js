//////////////////////////////////////////////////////////////////////////
///////////////////////   ///////////////////////////
//////////////////////////////////////////////////////////////////////////
  //公共路径变量
  var processajaxUrl = ""; 
  ajaxUrlparams = "";
  
  function qxalert(sMsg)
  { 
  	try{
  		 
  	}catch(e){alert(e);}
  }
   function doajax(todata,processajaxParams) 
  {   //encodeURIComponent decodeURIComponent  
	  //alert(encodeURIComponent(params));
	  //alert(params + "---" + sUrl);
      var sUrl = "index.php?s=/w16/Newdun/Newdun/processajax&sp="+encodeURIComponent(processajaxParams);
      var strdata = encodeURIComponent(todata);
      //alert(strdata + "---" + strdata);
	  var strMsg = "";
	  $.ajax({
		   type: "POST",
		   async: false, //同步,逐步执行代码
		   //url: sUrl + "?sp=" + ajaxUrlparams, //.php  "{$commonpath}" + processajax
                   url: sUrl,
		   data:  strdata, //"name=John&location=Boston"
		   dataType: 'text',   //返回值类型  json
		   success: function(msg){
		     //alert( "return: " + msg );
		     strMsg = msg; 
		   },
	      error:function(msg){ 
             alert("error"); 
          }  
		});
	  //strMsg = GB2312UTF8(strMsg); 
	  return strMsg;
  } 
   
  //模糊数据查询,参数(formname=表单号,where_value=查询条件值,todata=查询条件:name='join' and id=1)
  function query_data(formname,where_value,todata)  
  {  
    try{  
        var todataii=todata;
         
        var str = "[query_data]" + ";" + formname + ";" + encodeURIComponent(where_value);
        var processajaxParams = str;
        //var todata = ""; //string json data
        var rst = doajax(todataii,processajaxParams); 
        //var rst = doajax(str); 
       //alert("hello:" + rst);
        return rst;  
    }catch(e){qxalert("query_data: " +e);}  
  } 
  
  //模糊数据查询,参数(formname=表单号)
  function getDataViewTablename(formname)  
  {  
    try{  
        var str = "[getDataViewTablename]" + ";" + formname;
        var processajaxParams = str;
        var todata = ""; //string json data
        var rst = doajax(todata,processajaxParams); 
        //var rst = doajax(str); 

        return rst;  
    }catch(e){qxalert("getDataViewTablename: " +e);}  
  } 
  
    //模糊数据查询,参数(formname=表单号)
  function getDataViewColumn(formname)  
  {  
    try{  
        var DataViewColumns = "";
        if(DataViewColumns != "")
        {
            return DataViewColumns;
        }
        
        var str = "[getDataViewColumn]" + ";" + formname;
        var processajaxParams = str;
        var todata = ""; //string json data
        var rst = doajax(todata,processajaxParams); 
        //var rst = doajax(str); 
        DataViewColumns = rst;
        return rst;  
    }catch(e){qxalert("getDataViewColumn: " +e);}  
  } 
  
  //模糊数据查询,参数(formname=表单号;strjson=save data)
  function save_data(formname,strjson,savetype) //0=new,1=edit,2=del 
  {  
    try{  
        if(savetype==undefined)
        {
            savetype = 1;
        }
        var str = "[save_data]" + ";" + formname + ";" + savetype;
        var processajaxParams = str;
        var todata = strjson; //string json data
        var rst = doajax(todata,processajaxParams);  

        return rst;  
    }catch(e){qxalert("save_data: " +e);}  
  } 
  
  //模糊数据查询,参数(formname=表单号;strjson=save data)
  function save_data2(formname,strjson,savetype) //0=new,1=edit,2=del 
  {  
    try{  alert('hi');
        if(savetype==undefined)
        {
            savetype = 1;
        }
        var str = "[save_data]" + ";" + formname + ";" + savetype;
        var processajaxParams = str;
        var todata = strjson; //string json data
        var rst = doajax(todata,processajaxParams);  

        return rst;  
    }catch(e){qxalert("save_data: " +e);}  
  } 
  
  //模糊数据查询,参数(formname=表单号;strjson=save data)
  function do_app(formname,strjson,apptype) //0=approve,1=unapprove,2=reject 
  {  
    try{  
        if(apptype==undefined)
        {
            apptype = 0;
        }
        var str = "[do_app]" + ";" + formname + ";" + apptype;
        var processajaxParams = str;
        var todata = strjson; //string json data
        var rst = doajax(todata,processajaxParams);  

        return rst;  
    }catch(e){qxalert("do_app: " +e);}  
  } 
  
    //手机验证,参数(phonenum=手机号码)
  function verifyphonecode(phonenum)
  {  
    try{
        
        var str = "[verify_phonecode]" + ";" + phonenum;
        var processajaxParams = str;
        var strjson = "";
        var todata = strjson; //string json data
        var rst = doajax(todata,processajaxParams);  
//				console.log(todata);
        return rst;  
    }catch(e){qxalert("verifyphonecode: " +e);}  
  }
  
  //手机验证,参数(phonenum=手机号码,code=验证码)
  function compareverifycode(phonenum,code)
  {  
    try{
        
        var str = "[compare_verifycode]" + ";" + phonenum + ";" + code;
        var processajaxParams = str;
        var strjson = "";
        var todata = strjson; //string json data
        var rst = doajax(todata,processajaxParams);  
//				console.log(todata);
        return rst;  
    }catch(e){qxalert("compareverifycode: " +e);}  
  }
  
  //获取用户 user id
  function get_user_id()
  {  
    try{
        
        var str = "[get_uid]" + ";getuid";
        var processajaxParams = str;
        var strjson = "";
        var todata = strjson; //string json data
        var rst = doajax(todata,processajaxParams);  
//				console.log(todata);
        return rst;  
    }catch(e){qxalert("get_user_id: " +e);}  
  }
  
  //是否认证用户
  function check_valid_user()
  {  
    try{
        
        var str = "[valid_user]" + ";valid_user";
        var processajaxParams = str;
        var strjson = "";
        var todata = strjson; //string json data
        var rst = doajax(todata,processajaxParams);  
//				console.log(todata);
        return rst;  
    }catch(e){qxalert("check_valid_user: " +e);}  
  }
   /*
    //是否财务用户
  function checkisfm()
  {  
    try{
        
        var str = "[valid_isfm]" + ";valid_isfm";
        var processajaxParams = str;
        var strjson = "";
        var todata = strjson; //string json data
        var rst = doajax(todata,processajaxParams);  
//				console.log(todata);
        return rst;  
    }catch(e){qxalert("valid_isfm: " +e);}  
  }
  
 
    //消息模板发送
  function send_weixin_tpl_message(formname,first, keyword1, remark)
  {  
    try{
        
        var str = "[tpl_message]" + ";" + formname + ";" + first + ";" + keyword1 + ";" + remark;
        var processajaxParams = str;
        var strjson = "";
        var todata = strjson; //string json data
        var rst = doajax(todata,processajaxParams);  
//				console.log(todata);
        return rst;  
    }catch(e){qxalert("send_weixin_tpl_message: " +e);}  
  } */
  
function StringIsEmpty(str)
{
	try{   
		var rst = 0;
		if (str == '' || str == undefined || str == null)
		   	 return 1; 
		return rst;
	}catch(e){} 
	
}

 
//对话框
function showdialog(sMessage,sInputName,stitle)
{  
    try{   
        if(StringIsEmpty(stitle) == 1)
        {
           stitle =  '系统提示';
        }
        BootstrapDialog.show({
            title: stitle,
            message: sMessage
            
            ,onhidden: function(dialogRef){ //自定义关闭对话框后的js代码
                //alert('Dialog is popped down.');
                if(StringIsEmpty(sInputName) != 1)
                {
                   
                    document.getElementById(sInputName).focus();
                }
            }
        });
    }catch(e){}  
}