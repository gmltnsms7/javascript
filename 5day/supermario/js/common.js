//prettier-ignore
$.ajax({url: "../data/mario.json" })
.done(function(response){
  console.log(response)
});

const promise = new Promise(function(resolve,reject){
 console.log("나는 무조건 성공하는 execute 함수 입니다.")
  // resolve("성공")
  // reject("실패")
  setTimeout(function(){
    reject("json파일 받아오기 실패")
  }, 2000)
})

promise
  .then(function(data){
    console.log(data);
})
  .catch(function(error){
    console.log(error);
  })
console.log("나는 프라미스보다 먼저 실행합니다.");

//fetch는 promise 반환
//prettier-ignore

let itemSlider = null;
function loadJson(json){
const myFetch = fetch(json)
.then((response) => {
 return response.json(); //promise return
})
.then(function(data){
 const items = data.items;
 const itemList = $("#itemList");
 const imgPath = data.imgPath
 let tempHtml = "";
 $.each(items ,function(idx , item){
  tempHtml += `<li class="swiper-slide" style="background:${item.bg}">
  <div class ="info">
    <h2 class ="title">${item.title}</h2>
    <p>${item.desc}</p>
    <a href="${item.link}" target="${item.target}">more</a>
  </div>
  <div class="img">
  <img src = "${imgPath+item.img}"
  </div>
  </li>`
 })
 //console.log(tempHtml);
 itemList.html(tempHtml);
  if(itemSlider !== null) {
    itemSlider.destroy();
  }
  
  itemSlider = new Swiper("#main",{
  slidesPerView : "auto",
  loop : true ,
  mousewheel :true,
  centeredSlides : true,
  effect : 'coverflow' ,
  coverflowEffect : {
    rotate : 0,
    slidesShadows : false,
    depth : 500, 
  }
 })
})
};
loadJson("../data/mario.json");

$("#gnb ul li").on("click", function(e){
  e.preventDefault();
  if($(this).hasClass("selected")) {
    return false;
  }
  $(this).addClass("selected").siblings().removeClass("selected")
  const json = $(this).data("json")
  loadJson(json)
})
  /*const myFetch = fetch("../data/mario.json")
  .then((response) => response.json()) //promise return
 
  .then((data) => console.log(data));
  .catch((error) => console.log(error));
  console.log(myFetch)
  */