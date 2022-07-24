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

$(window).on("scroll", function () {
    const st = $(window).scrollTop();
    if (st > 0) {
        header.addClass("scroll");
    } else {
        header.removeClass("scroll");
    }
});

window.addEventListener("scroll", function () {});
