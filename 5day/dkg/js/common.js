Splitting();
$("#main").fullpage({});
$("#gnb .list > li").on("mouseleave", function () {
    $("#header").removeClass("on");
});

/*
let tempHtml = "";
const txt = "abcd";
const txtArray = $("#mainVisual .txtBox h2")
    .text()
    .split("")
    .map(function (item) {
        return `<span class="txt">${item}</span>`;
    });
const _Html = txtArray.join("");
txtArray.forEach(function (item, idx) {
    //console.log(item)
    tempHtml += `<span>${item}</span>`;
});
console.log(tempHtml);
$("#mainVisual .txtBox h2").html(_Html);

const nums = [1, 2, 3, 4, 5];
const doubling = nums.map(function (item) {
    return item * 2;
});

console.log(doubling);

const even = nums.filter(function (item) {
    return item % 2 ===0? true : false;
});
console.log(even);
*/

const mainVisualTL = gsap.timeline();

mainVisualTL
    .from("#mainVisual .txtBox h2 .char", {
        y: 100,
        ease: "power4",
        duration: 1,
        stagger: {
            each: 0.02,
        },
    })
    .from("#mainVisual .txtBox p .char", {
        y: 100,
        ease: "power4",
        duration: 1,
        stagger: {
            each: 0.02,
        },
    })
    .from(CSSRulePlugin.getRule("#mainVisual .txtBox strong:after"), {
        cssRule: {
            scaleX: 0,
        },
    });

const businessTL = gsap.timeline();

businessTL
    .from("#business .txtBox h2 .char", {
        y: 100,
        ease: "power4",
        duration: 1,
        stagger: {
            each: 0.02,
        },
    })
    .from("#business .txtBox p .char", {
        y: 100,
        ease: "power4",
        duration: 1,
        stagger: {
            each: 0.02,
        },
    })
    .from(CSSRulePlugin.getRule("#business .txtBox strong:after"), {
        cssRule: {
            scaleX: 0,
        },
    })
    .from("#business .iconBox", {
        opacity: 0,
        y: 100,
        ease: "power4",
        duration: 1,
        stagger: {
            each: 0.02,
        },
    });
$("#main").fullpage({
    afterLoad: function (origin, destination, direction, trigger) {
        mainVisualTL.pause(0);
        businessTL.pause(0);
        if (destination.index === 0) {
            mainVisualTL.restart();
        } else if (destination.index === 1) {
            businessTL.pause();
        }
    },
});
