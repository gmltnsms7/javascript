const coronaList = $("#chart02 ul");

$.ajax({
  url: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=rZLh9aZdMc4yehvwazSNE%2BqU8e4JQDoMcfIb31wFY%2BR40pfyZxIqZZlshgIW5%2BbGJIMH1NjDMG%2FgyGrNz2shmw%3D%3D&_type=json",
  data:{
   serviceKey:"rZLh9aZdMc4yehvwazSNE+qU8e4JQDoMcfIb31wFY+R40pfyZxIqZZlshgIW5+bGJIMH1NjDMG/gyGrNz2shmw==",
   _type:"json",
 }, 
 }).done(function(data){
   //console.log(data.response.body.items.item);
   const itemList = data.response.body.items.item;
   const cities = [];
   const incDecList = [];
   let tempHtml = "";
   $.each(itemList, function(idx,item){
     tempHtml += `<li><p class = "city"> 
     ${item.gubun}</p><p class = "incDec">
     ${item.incDec}</p></li>`;
   
   });
  
   coronaList.html(tempHtml)
   console.log(tempHtml)
  })