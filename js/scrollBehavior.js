const aboutNavArrow = document.getElementById("aboutNavArrow");

// counter to track nav clicks and disable/enable nav 'buttons'
let scrollPosition = 0;
console.log("initial scroll value: " + scrollPosition);

// scroll animation for 'about' section
function aboutScrollHandler() {
  aboutNavArrow.addEventListener("click", function scroller() {
    console.log("current scroll value: " + scrollPosition);
    scrollPosition += 1;
    if (scrollPosition <= 4) {
      aboutNavArrow.setAttribute("src", "assets/svg/down-arrow_variant.svg");
      anime({
        targets: ".section",
        translateY: [
          {
            value: "-=100%",
            duration: 1000,
            easing: "easeInOutQuad"
          }
        ]
      });
    }
    if (scrollPosition == 5) {
      anime({
        targets: "#aboutNavArrow",
        rotate: "180deg",
        duration: 500
      });
    }
    if (scrollPosition > 5) {
      anime({
        targets: ".section",
        translateY: [
          {
            value: "+=400%",
            duration: 1000,
            easing: "easeInOutQuad"
          }
        ]
      });
      anime({
        targets: "#aboutNavArrow",
        rotate: "360deg",
        duration: 500,
        delay: 1000
      });
      scrollPosition = 0;
    }
  });
}
