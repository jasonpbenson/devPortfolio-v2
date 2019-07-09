let screenCapPath = "assets/screencaps/";
let logoPath = "assets/svg/logos/";
let builtWith = "built with: ";

let projects = [
  {
    logo: `${logoPath}enchanted_splatter_OffRegTrace_ed_variant.svg`,
    title: "enchantedLifeGoods",
    repoLink: "https://github.com/jasonpbenson/enchantedLifeGoods",
    demoLink: null,
    screenCap: `${screenCapPath}elg_screen1.png`,
    description: `Enchanted Life Goods is a website for a small business that I run with my 
                       wife (we primarily make and sell functional ceramics). It’s a work in progress, 
                        but hoping to have a working demo available soon.`,
    tech: [
      builtWith,
      "css3, ",
      "jsx, ",
      "nodejs/express, ",
      "postgresql, ",
      "react/redux"
    ]
  },
  {
    logo: `${logoPath}/emOceans-logo-1_variant.svg`,
    title: "emoceans",
    repoLink: "https://github.com/jasonpbenson/backEndProject",
    demoLink: "https://emoceans.jpbenson.com",
    screenCap: `${screenCapPath}emOceans_screen2.png`,
    description: `emOceans is a simple web application that allows you to take note of your mood 
                        every day using color and language. Each day (and each mood, each memory) forms 
                        a tiny drop in the vast and ever-shifting ocean that is every human. We hope to 
                        make the observation and appreciation of those shifts and waves more accessible, 
                        helpful, and more beautiful.`,
    tech: [
      builtWith,
      "css3, ",
      "html5, ",
      "javascript/jquery, ",
      "mysql, ",
      "nodejs/express"
    ]
  },
  {
    logo: `${logoPath}/pithos-logo-1_variant.svg`,
    title: "pithos",
    repoLink: "https://github.com/jasonpbenson/FrontEndProject-Pithos",
    demoLink: "https://pithos.jpbenson.com",
    screenCap: `${screenCapPath}pithos_screen1.png`,
    description: `Pithos is a space that allows the user to experience an 'ordinary' 
                    thing in an unusual way. We were interested in ecosystems, and wanted to connect our 
                    ecosystem to the state of Georgia (home), and also the larger realms of history, mythology, 
                    and health; which are their own kinds of ecosystems, or containers. Pithos.`,
    tech: [builtWith, "css3, ", "html5, ", "javascript/jquery "]
  }
];

// create container element
const projectsContent = document.createElement("div");
projectsContent.classList.add("projectsContainer");
projectsContent.setAttribute("id", "displayNone");
contentModal.appendChild(projectsContent);

//create projectsContent child elements and populate with data
const showProjectsContent = (function(data) {
  //create element for nav sonar effect
  let navSonar = document.createElement("div");
  navSonar.classList.add("sonarWave");
  projectsContent.appendChild(navSonar);

  //create nav button
  let projectsNavArrow = document.createElement("img");
  projectsNavArrow.setAttribute("src", "assets/svg/down-arrow_v2.svg");
  projectsNavArrow.setAttribute("id", "projectsNavArrow");
  projectsNavArrow.classList.add("navArrow");
  projectsContent.appendChild(projectsNavArrow);

  //create container for projects section intro
  let projectsIntroSectionContainer = document.createElement("div");
  projectsIntroSectionContainer.classList.add("projectsIntroSectionContainer");

  //create icon
  // let projectsIcon = document.createElement("img");
  // projectsIcon.setAttribute("src", "assets/svg/projects_variant.svg");
  // projectsIcon.classList.add("contentIcon");
  // projectsIntroSectionContainer.appendChild(projectsIcon);

  //create element for text blurb
  let projectText = document.createElement("p");
  projectText.classList.add("projectStatement");
  let statement = document.createTextNode(
    "Selection of recent team and solo projects to which I contributed UI design, graphic design, and development using various languages and frameworks."
  );
  projectText.appendChild(statement);
  projectsIntroSectionContainer.appendChild(projectText);

  projectsContent.appendChild(projectsIntroSectionContainer);

  data.forEach(element => {
    //create container for each project
    let projectContainerEach = document.createElement("div");
    projectContainerEach.classList.add("projectContainerEach", element.title);

    // create element and set attributes for project logos
    let projectLogo = document.createElement("img");
    projectLogo.classList.add("projectLogo");
    projectLogo.setAttribute("src", element.logo);
    projectLogo.setAttribute("name", element.title);
    projectsContent.appendChild(projectContainerEach);
    projectContainerEach.appendChild(projectLogo);

    //project links container
    let projectLinks = document.createElement("div");
    projectLinks.classList.add("projectLinks");
    projectContainerEach.appendChild(projectLinks);

    //repo and demo links
    let repoLink = document.createElement("a");
    repoLink.setAttribute("href", element.repoLink);
    repoLink.setAttribute("target", "_blank");
    let repoText = document.createTextNode("repo");
    repoLink.appendChild(repoText);
    projectLinks.appendChild(repoLink);

    //check for demo link (not all projects live...)
    if (element.demoLink != null) {
      let demoLink = document.createElement("a");
      demoLink.setAttribute("href", element.demoLink);
      demoLink.setAttribute("target", "_blank");
      let demoText = document.createTextNode("demo");
      demoLink.appendChild(demoText);
      projectLinks.appendChild(demoLink);
    }

    //project preview image
    let projectPreviewContainer = document.createElement("div");
    projectPreviewContainer.classList.add("projectPreviewContainer");
    let projectPreview = document.createElement("img");
    projectPreview.classList.add("projectPreviewImg");
    projectPreview.setAttribute("src", element.screenCap);
    projectContainerEach.appendChild(projectPreview);
    projectContainerEach.appendChild(projectPreviewContainer);

    //project desctiption
    let projectDescription = document.createElement("p");
    projectDescription.classList.add("projectDescription", "displayNone");
    let descriptionText = document.createTextNode(element.description);
    projectDescription.appendChild(descriptionText);
    projectContainerEach.appendChild(projectDescription);

    //built with
    let builtWithItems = document.createElement("p");
    for (let i = 0; i < element.tech.length; i++) {
      builtWithItems.classList.add("projectTech");
      builtWithText = document.createTextNode(element.tech[i]);
      builtWithItems.appendChild(builtWithText);
      projectContainerEach.appendChild(builtWithItems);
    }
  });
})(projects);
// ^ iife

// add click listener to the projects selector
projectSelector.addEventListener("click", e => {
  //check to see if already displayed on page
  //if so: do nothing
  if (projectsContent.getAttribute("id") != "displayNone") {
    return;
  } else {
    //if not:
    //reset conentModal so that the transition between content sets is smooth
    setTimeout(function() {
      contentModal.classList.add("displayNone");
      //hide projects and contact content
      aboutContent.setAttribute("id", "displayNone");
      contactContent.setAttribute("id", "displayNone");
    });
    //display modal and projects content
    setTimeout(function() {
      contentModal.classList.remove("displayNone");
      projectsContent.removeAttribute("id", "displayNone");
      projectsScrollHandler();
    }, 2000);
  }
});
