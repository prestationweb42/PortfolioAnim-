// import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
});
// body color
scroll.on("scroll", () => {
    // console.log("ça scroll !!!");
    if (document.querySelector("#color.is-inview")) {
        document.body.style.background = "#000101";
        document.body.style.color = "#fefefe";
    } else {
        document.body.style.background = "#fefefe";
        document.body.style.color = "#000101";
    }
});
