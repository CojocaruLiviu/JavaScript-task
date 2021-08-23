window.onload = function(){

   var oTab = document.getElementById('tab1');

   var oName = document.getElementById('name');

   var oBtn = document.getElementById('btn1');
   
   var index= oTab.tBodies[0].rows.length;
   
   
   oBtn.onclick = function (){
   
       var oTr =document.createElement('tr');
       index++;
   
       var oTd1 = document.createElement('td');
   
   
       var oTd2 = document.createElement('td');
       oTd2.innerHTML = oName.value;
       oTr.appendChild(oTd2);
       
      
       
       var oTd4 = document.createElement('td');
        oTd4.innerHTML = '<a href="javascript:;"> X </a>';
       oTr.appendChild(oTd4);
       
       
       oTd4.getElementsByTagName('a')[0].onclick=function(){
           oTab.tBodies[0].removeChild(this.parentNode.parentNode);
       }

       oTab.tBodies[0].appendChild(oTr);	
   }

}
