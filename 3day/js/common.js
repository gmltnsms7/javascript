console.log($);

const gnb = $("#gnb .list > li");
//const depth02 = $("#gnb .list > li .depth02")
gnb.on("mouseenter", function () {
    const depth02 = $(this).find(".depth02");
    // depth02.stop().fadeIn(500);
    depth02.stop().slideDown(500);
    /* const depth02vanilla = this;
  console.log("🚀 ~ file: common.js ~ line 9 ~ gnb.on ~ depth02vanilla", depth02vanilla)*/
    //const depth02 = this;
    //depth02.css({display: "block"});
});

gnb.on("mouseleave", function () {
    const depth02 = $(this).find(".depth02");
    //depth02.stop().fadeOut(100);
    depth02.stop().slideUp(100);
});
/*const gnb = document.querySelectorAll("#gnb .list > li");
gnb.forEach(function (item, idx) {
  item.addEventListener("mouseenter" , function(){
    console.log("mouseenter");
  });
}); */

////////////this 알아보기.
// foo , bar
/*const foo = () => {
  console.log(this);
  
};
const jjang = {age : 30 , weight:80 , height:180};
const Kim = {age : 20 , weight:70 , height:175};
const choi = {age : 25 , weight:75 , height:165};

console.log (`나이는 ${jjang.age} , 몸무게는${jjang.weight}`)


const class_201= [
  {age : 30 , weith:80 , height:180},
  {age : 20 , weith:70 , height:175},
  {age : 25 , weith:75 , height:165},
]

console.log(class_201[0].age)
console.log(class_201[0]["age"])

const obj = {objFoo: foo, name: "강희수"};
obj.objFoo();
foo();*/
