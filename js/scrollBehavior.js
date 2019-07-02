const aboutNavArrow = document.getElementById("aboutNavArrow");
const projectsNavArrow = document.getElementById("projectsNavArrow");

// scroll animation for 'about' section*
function aboutScrollHandler() {
  let aboutScrollPosition = 0;
  //   console.log("initial about scroll value: " + aboutScrollPosition);
  aboutNavArrow.addEventListener("click", function scroller(e) {
    aboutScrollPosition++;
    // console.log("current about scroll value: " + aboutScrollPosition);
    if (aboutScrollPosition <= 4) {
      // scroll sections
      anime({
        targets: ".aboutSections",
        translateY: [
          {
            value: "-=100%"
          }
        ]
      });
    }
    if (aboutScrollPosition == 5) {
      anime({
        targets: "#aboutNavArrow",
        rotate: "180deg"
      });
    }
    if (aboutScrollPosition > 5) {
      anime({
        targets: ".aboutSections",
        translateY: [
          {
            value: "+=400%"
          }
        ]
      });
      anime({
        targets: "#aboutNavArrow",
        rotate: "360deg"
      });
      aboutScrollPosition = 0;
    }
  });
}

// scroll animation for 'projects' section*
function projectsScrollHandler() {
  let projectsScrollPosition = 0;
  //   console.log("initial projects scroll value: " + projectsScrollPosition);
  projectsNavArrow.addEventListener("click", function scroller() {
    // console.log("current project scroll value: " + projectsScrollPosition);
    projectsScrollPosition += 1;
    if (projectsScrollPosition <= 3) {
      anime({
        targets: ".projectSections",
        translateY: [
          {
            value: "-=100%"
          }
        ]
      });
    }
    if (projectsScrollPosition == 4) {
      anime({
        targets: "#projectsNavArrow",
        rotate: "180deg"
      });
    }
    if (projectsScrollPosition > 4) {
      anime({
        targets: ".projectSections",
        translateY: [
          {
            value: "+=300%"
          }
        ]
      });
      anime({
        targets: "#projectsNavArrow",
        rotate: "360deg"
      });
      projectsScrollPosition = 0;
      //   console.log("current project scroll value: " + projectsScrollPosition);
    }
  });
}

// *would like to consolidate into single function, but I'm not sure that
// would be practical or possible with the animejs library
