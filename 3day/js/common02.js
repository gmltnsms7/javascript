const gnb = $("#gnb .list > li");
const header = $("#header");

gnb.on("mouseenter", function () {
    header.addClass("on");
});
gnb.on("mouseleave", function () {
    header.removeClass("on");
});

//popup
const popup = $("#popup");
const btnClose = $("#popup #btnClose");
const btnTodayClose = $("#popup #btnTodayClose");
btnClose.on("click", function () {
    popup.removeClass("on");
});

btnTodayClose.on("click", function () {
    popup.removeClass("on");
    Cookies.set("today", "ok", { expires: 1 });
});
console.log(Cookies.get("today"));
if (Cookies.get("today") !== "ok") {
    popup.addClass("on");
}

$(window).on("resize", function () {
    console.log($(window).width());
});

$(window).on(
    "scroll",
    _.throttle(function () {
        const st = $(window).scrollTop();
        if (st > 0) {
            header.addClass("scroll");
        } else {
            header.removeClass("scroll");
        }
    }, 100),
);

//window.addEventListener("scroll", function () {});
const mainSlider = new Swiper("#mainVisual", {
    speed : 1000,
    loop : true,
    effect: "fade",
        navigation: {
          nextEl: '#mainVisual .next',
          prevEl: '#mainVisual .prev',
        },
    autoplay:{
        delay: 5000,
        disableOnInteractin:false,
    },
    pagination:{
        el: "#mainVisual .pagination",
        type: 'bullets',
        clickable : true,
      },

    // cube , fade , coverflow , creative , cards, flip
});
console.log(mainSlider.speed);