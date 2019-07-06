let about = [
  {
    sectionTitle: "front end",
    class: "frontEndSec",
    icons: [
      "devicon-bootstrap-plain",
      "devicon-css3-plain",
      "devicon-html5-plain",
      "devicon-javascript-plain",
      "devicon-jquery-plain",
      "devicon-react-original"
    ]
  },
  {
    sectionTitle: "back end",
    class: "backEndSec",
    icons: [
      "devicon-express-original",
      "devicon-nodejs-plain",
      "devicon-python-plain"
    ]
  },
  {
    sectionTitle: "server/db",
    class: "serverDbSec",
    icons: [
      "devicon-amazonwebservices-original",
      "devicon-apache-plain",
      "devicon-mysql-plain",
      "devicon-postgresql-plain"
    ]
  },
  {
    sectionTitle: "et al",
    class: "etAlSec",
    icons: [
      "devicon-apple-original",
      "devicon-chrome-plain",
      "devicon-git-plain",
      "devicon-github-plain",
      "devicon-google-plain",
      "devicon-illustrator-plain",
      "devicon-jasmine-plain",
      "devicon-photoshop-plain",
      "devicon-slack-plain",
      "devicon-trello-plain",
      "devicon-visualstudio-plain"
    ]
  }
];

// create container element
const aboutContent = document.createElement("div");
aboutContent.classList.add("aboutContainer");
aboutContent.setAttribute("id", "displayNone");
contentModal.appendChild(aboutContent);

//create aboutContent child elements and populate with data
const showAboutContent = (function(data) {
  //create element for nav sonar effect
  let navSonar = document.createElement("div");
  navSonar.classList.add("sonarWave");
  aboutContent.appendChild(navSonar);

  //create nav button
  let aboutNavButton = document.createElement("img");
  aboutNavButton.setAttribute("src", "assets/svg/down-arrow_v2.svg");
  aboutNavButton.setAttribute("id", "aboutNavArrow");
  aboutNavButton.classList.add("navArrow");
  aboutContent.appendChild(aboutNavButton);

  //create container for about section intro
  let aboutIntroSectionContainer = document.createElement("div");
  aboutIntroSectionContainer.classList.add("aboutIntroSectionContainer");

  // create element for about icon
  // let aboutIcon = document.createElement("img");
  // aboutIcon.classList.add("contentIcon");
  // aboutIcon.setAttribute("src", "assets/svg/about_variant.svg");
  // aboutIntroSectionContainer.appendChild(aboutIcon);

  //create element for text blurb
  let aboutText = document.createElement("p");
  aboutText.classList.add("aboutStatement");
  let statement = document.createTextNode(
    "I approach projects with a dual interest in design and programming, and  work to generate UI that is playful, exploratory,  and idiosyncratic. My fine art background provides a basis for critical thinking and creative  problem solving that undergirds a lifelong impulse to make things."
  );
  aboutText.appendChild(statement);
  aboutIntroSectionContainer.appendChild(aboutText);

  aboutContent.appendChild(aboutIntroSectionContainer);

  //tech icons container
  let techContainer = document.createElement("div");
  techContainer.classList.add("aboutTechContainer");
  aboutContent.appendChild(techContainer);

  //loop through 'aboutData' and pull section titles and tech icons
  data.forEach(element => {
    //section headers
    let aboutSections = document.createElement("div");
    aboutSections.classList.add("aboutSections", element.class);
    let sectionHeader = document.createElement("h3");
    let sectionHeaderText = document.createTextNode(element.sectionTitle);
    aboutSections.appendChild(sectionHeader);
    sectionHeader.appendChild(sectionHeaderText);
    techContainer.appendChild(aboutSections);

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("iconContainer");
    aboutSections.appendChild(iconContainer);

    //icons
    for (let i = 0; i < element.icons.length; i++) {
      let techIcon = document.createElement("i");
      techIcon.setAttribute("class", element.icons[i]);
      techIcon.classList.add("techIcon");
      iconContainer.appendChild(techIcon);
    }
  });
})(about);

// ^ iife

// add click listener to the about selector
aboutSelector.addEventListener("click", e => {
  //check to see if already displayed on page
  //if so: do nothing
  if (aboutContent.getAttribute("id") != "displayNone") {
    return;
  } else {
    //if not:
    //reset conentModal so that the transition between conent sets is smooth
    contentModal.classList.add("displayNone");
    //hide projects and contact content
    projectsContent.setAttribute("id", "displayNone");
    projectsContent.scrollTop = 0;
    contactContent.setAttribute("id", "displayNone");
    //display modal and about content
    setTimeout(function() {
      contentModal.classList.remove("displayNone");
      aboutContent.removeAttribute("id", "displayNone");
      aboutScrollHandler();
    }, 2000);
  }
});
