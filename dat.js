
 function zqtj(that){
    window.open("lookdat.html")
 }
 /*==========*/
  function postlocal(data){
       var dastring=JSON.stringify(data)//数据转化
            var ajax = new XMLHttpRequest();
            ajax.open("post","https://a-8g8lf9v81c656487-1308861396.ap-shanghai.app.tcloudbase.com/sdxm");
            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajax.send(dastring);
            ajax.onreadystatechange = function () {
              if (ajax.readyState == 4 && ajax.status == 200) {
                var  poaa=ajax.responseText;  
                 if(poaa=="ok"){
                  alert("提交成功");
                  window.history.back();
                 }
                 }
               }
  }
  
 function tj(){
  var asa=document.getElementById("name").value;/*名字，暗号*/
  var asb=document.getElementById("loaa").value;
  var hjk=document.getElementById("radio").checked
  if(hjk){
     /*判断是否为空*/
     /*post提交数据*/
     /*转化object*/
     if(asa.length>0&&asb.length>0){
         var aa=new Date();
         var ab=aa.toLocaleString()
       var data={
         "name":asa,
         "content":asb,
         "key":"0",
         "cooking":"您的ip地址:"+returnCitySN['cip'],/*手机状态码*/
         "time":ab
         }
      postlocal(data)
      
      
     }else{
      alert("提交失败,请检查");
     }
    }else{
     alert('请点击'+'"我已阅读留言协议"');
    }
    
    
 }
/*============================================*/
    function sso(){
     var sa= document.getElementById("loua-int").value;
     if(sa.length!=0){
       var data={
         "key":"1",/*查询*/
         "dat":sa,
          "cooking":"您的ip地址:"+returnCitySN['cip']/*手机状态码*/
         }
            var dastring=JSON.stringify(data)//数据转化
            var ajax = new XMLHttpRequest();
            ajax.open("post","https://a-8g8lf9v81c656487-1308861396.ap-shanghai.app.tcloudbase.com/sdxm");
            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajax.send(dastring);
            ajax.onreadystatechange = function () {
              if (ajax.readyState == 4 && ajax.status == 200) {
                var  poaa=ajax.responseText;  
                var ssa=JSON.parse(poaa)
                var mko="";
                if(ssa.data!=""){
                  /*网页把""改为null*/
                  for(var i in ssa.data){
                 var io=Number(i)
                 var soaa=io+1;
                 document.getElementById("lodbpre").innerText="共有"+soaa+"条结果"
                 var sooa='<div class="lodbnn-a"><div class="lodbnn-aa" name="data"><div class="lodbnn-aa-a" name="名字(暗号)"><h2>'+ssa.data[i].name+'</h2>'
                 var soob='</div><div class="lodbnn-aa-b" name="内容(data)"><p class="hhas">'+ssa.data[i].content+'</p></div></div><div class="lodbnn-ab" name="备注">'
                 var sooc=' <pre class="lodbnn-ab-p">'+ssa.data[i].timea+'</pre></div></div>'
                 mko+=sooa+soob+sooc;
                 document.getElementById("lodb-a").innerHTML=mko;
                  }
                
                }else{
                document.getElementById("lodbpre").innerText="没查询到结果(🤔🤔是不是输错了)"
                document.getElementById("lodb-a").innerHTML=' <p class="kkryp">空空如也/赶紧来投稿吧</p>'
                }
                
               }
     }
     }else{
       alert("请输入暗号呦");
     }
    }
 /*===============================*/
 function jslocal(){
  var io;
     var aa=new Date();
     var ab=aa.toLocaleString()
     for(var i=0;i<5;i++){
        io+= Math.floor(Math.random()*9)
        io=String(io)
     }
    var ko=io.substr(3,)
    var kl=ab.split("/")[0]+ab.split("/")[1]+ko;
    return kl
 }