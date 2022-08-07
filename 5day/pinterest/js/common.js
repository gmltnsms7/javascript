// prettier-ignore
fetch("../data/typo.json")
.then(function(response){
  return response.json();
})
.then(function(data){
 //console.log(data)
 const items = data.typoList;
 const imgPath = data.imageFolder
 const itemList = $(".itemList");
 let tempHtml="";
 $.each(items, function(idx, item){
  tempHtml+= `<li class="item ${item.category}">
    <a href ="${imgPath+item.img}" data-fancybox="${item.category}" data-caption="${item.title}">
  <div class="img">
  <img src="${imgPath+item.img}">
    </div>
    <div class ="info">
      <h2> ${item.title}</h2>
      <p class="desc">${item.desc}</p>
      <p class="point"><span class="num">${item.point}</span></p>
    </div>
    </a>
  </li>`
 });
 itemList.html(tempHtml);
 
 const grid = itemList.isotope({
  // options
  itemSelector: ".item",
  layoutMode: "masonry",
    getSortData: {
    point : ".point .num parseFloat",
  }
});

// init Isotope
// layout Isotope after each image loads
const total = 30;
let imgCount = 0;
grid.imagesLoaded().progress( function(instance, image) {

  console.log(`${imgCount}/${total}`)
  grid.isotope('layout');
});

$("#filter ul li").on("click" ,function(){
  $(this).addClass("on").siblings().removeClass("on")
  const filterItem = $(this).data("filter")
  grid.isotope({filter: `.${filterItem}`, 
  sortBy: "point",
  sortAscending: false
})
  
})
})

$(window).on(
    "mousemove",
    _.throttle(function (e) {
        $(".cursor").css({ left: e.clientX, top: e.clientY });

        gsap.to(".cursor", { left: e.clientX, top: e.clientY, ease: "power5", duration: 1 });
    }, 10),
);

$(".itemList").on("mouseenter", function () {
    $(".cursor .txt").text("View")
    gsap.to(".cursor", {
      width: 100, 
      height: 100, 
      backgroundColor: "#f00" , 
      ease : "elastic", 
      duration: 1. 
    });
});

$(".itemList").on("mouseleave", function () {
  $(".cursor .txt").text("")
  gsap.to(".cursor", {
    width: 20, 
    height: 20, 
    backgroundColor: "#fff" , 
    ease : "elastic", 
    duration: 1. 
  });
});

$("#filter ul li").on("mouseenter", function () {
  $(".cursor .txt").text("FILTER")
  gsap.to(".cursor", {
    width: 100, 
    height: 100, 
    backgroundColor: "#ff0" , 
    ease : "elastic", 
    duration: 1. 
  });
});
$("#filter ul li").on("mouseleave", function () {
  $(".cursor .txt").text("")
  gsap.to(".cursor", {
    width: 20, 
    height: 20, 
    backgroundColor: "#fff" , 
    ease : "elastic", 
    duration: 1. 
  });
});