let contactInfo = [
  {
    links: [
      "https://github.com/jasonpbenson",
      "https://www.linkedin.com/in/jason-benson-960861180/",
      "files/Benson_DevResume_2019.pdf"
    ],
    titles: ["github", "linkedin", "resume"],
    info: ["jasonbenson3rd@gmail.com", "410.812.4303"]
  }
];

// create container element
const contactContent = document.createElement("div");
contactContent.classList.add("contactContainer");
contactContent.setAttribute("id", "displayNone");
contentModal.appendChild(contactContent);

//create contactContent child elements and populate with data
const showContactConent = (function(data) {
  // create element for about icon
  let contactIcon = document.createElement("img");
  contactIcon.classList.add("contentIcon");
  contactIcon.setAttribute("src", "assets/svg/contact_variant.svg");
  contactContent.appendChild(contactIcon);

  data.forEach(element => {
    //create links
    let linkContainer = document.createElement("div");
    linkContainer.classList.add("linkContainer");
    contactContent.appendChild(linkContainer);

    for (let i = 0; i < element.links.length; i++) {
      //create a tags and set href
      let contactLink = document.createElement("a");
      contactLink.setAttribute("href", element.links[i]);
      contactLink.setAttribute("target", "blank");
      linkContainer.appendChild(contactLink);

      //label a tags
      let labelText = document.createTextNode(element.titles[i]);
      contactLink.appendChild(labelText);
    }
    for (let i = 0; i < element.info.length; i++) {
      let infoText = document.createElement("p");
      let infoTextContent = document.createTextNode(element.info[i]);
      infoText.appendChild(infoTextContent);
      contactContent.appendChild(infoText);
    }
  });
})(contactInfo);

// ^ iife

// add click listener to the contact selector

contactSelector.addEventListener("click", e => {
  //check to see if already displayed on page
  //if so: do nothing
  if (contactContent.getAttribute("id") != "displayNone") {
    return;
  } else {
    //if not:
    //reset conentModal so that the transition between content sets is smooth
    setTimeout(() => {
      contentModal.classList.add("displayNone");
      //hide projects and contact content
      aboutContent.setAttribute("id", "displayNone");
      projectsContent.setAttribute("id", "displayNone");
    });
    //display modal and projects content
    setTimeout(function() {
      contentModal.classList.remove("displayNone");
      contactContent.removeAttribute("id", "displayNone");
    }, 2000);
  }
});
