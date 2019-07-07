const aboutNavArrow = document.getElementById("aboutNavArrow");
const projectsNavArrow = document.getElementById("projectsNavArrow");

// would like to eventually refactor
// and consolidate to one function

// scroll handler for 'about' section*
function aboutScrollHandler() {
  let scrollPosition = 0;
  const handler = function() {
    anime({
      targets: ".navArrow",
      direction: "alternate",
      duration: 50,
      easing: "easeInOutCirc",
      scale: 0.5
    });
    if (scrollPosition == 1) {
      document.querySelector(".frontEndSec").scrollIntoView({
        behavior: "smooth"
      });
    }
    if (scrollPosition == 2) {
      document.querySelector(".backEndSec").scrollIntoView({
        behavior: "smooth"
      });
    }
    if (scrollPosition == 3) {
      document.querySelector(".serverDbSec").scrollIntoView({
        behavior: "smooth"
      });
    }
    if (scrollPosition == 4) {
      document.querySelector(".etAlSec").scrollIntoView({
        behavior: "smooth"
      });
    }
    if (scrollPosition == 5) {
      anime({
        targets: ".navArrow",
        rotate: "180deg"
      });
    }
    if (scrollPosition > 5) {
      document.querySelector(".aboutIntroSectionContainer").scrollIntoView({
        behavior: "smooth"
      });
      anime({
        targets: ".navArrow",
        delay: 1000,
        rotate: "360deg"
      });
      scrollPosition = 0;
    }
  };

  // reset function if another menu item is selected before the sequence resets
  const reset = function() {
    document.querySelector(".aboutIntroSectionContainer").scrollIntoView({
      behavior: "smooth"
    });
    anime({
      targets: ".navArrow",
      rotate: "360deg"
    });
    scrollPosition = 0;
  };

  // add click handler to nav element
  // on click advance counter and run handler function
  aboutNavArrow.addEventListener("click", function scroller(e) {
    scrollPosition++;
    handler();
  });

  //add reset function to other menu items and header
  projectSelector.addEventListener("click", e => {
    reset();
    console.log(scrollPosition);
  });
  contactSelector.addEventListener("click", e => {
    reset();
  });
  resetButton.addEventListener("click", e => {
    reset();
  });
}

// scroll handler for 'projects' section*
function projectsScrollHandler() {
  let scrollPosition = 0;
  const handler = function() {
    anime({
      targets: ".navArrow",
      direction: "alternate",
      duration: 50,
      easing: "easeInOutCirc",
      scale: 0.5
    });
    if (scrollPosition == 1) {
      document.querySelector(".enchantedLifeGoods").scrollIntoView({
        behavior: "smooth"
      });
    }
    if (scrollPosition == 2) {
      document.querySelector(".emoceans").scrollIntoView({
        behavior: "smooth"
      });
    }
    if (scrollPosition == 3) {
      document.querySelector(".pithos").scrollIntoView({
        behavior: "smooth"
      });
    }
    if (scrollPosition == 4) {
      anime({
        targets: "#projectsNavArrow",
        rotate: "180deg"
      });
    }
    if (scrollPosition > 4) {
      document.querySelector(".projectsIntroSectionContainer").scrollIntoView({
        behavior: "smooth"
      });
      anime({
        targets: "#projectsNavArrow",
        delay: 1000,
        rotate: "360deg"
      });
      scrollPosition = 0;
    }
  };

  // reset function if another menu item is selected before the sequence resets
  const reset = function() {
    document.querySelector(".projectsIntroSectionContainer").scrollIntoView({
      behavior: "smooth"
    });
    anime({
      targets: "#projectsNavArrow",
      delay: 1000,
      rotate: "360deg"
    });
    scrollPosition = 0;
  };

  // add click handler to nav element
  // on click advance counter and run handler function
  projectsNavArrow.addEventListener("click", function scroller() {
    console.log("starting count: " + scrollPosition);
    scrollPosition++;
    handler();
    console.log("ending count: " + scrollPosition);
  });

  //add reset function to other menu items
  aboutSelector.addEventListener("click", e => {
    reset();
  });
  contactSelector.addEventListener("click", e => {
    reset();
  });
  resetButton.addEventListener("click", e => {
    reset();
  });
}
