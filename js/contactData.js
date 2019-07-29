// data for contact section
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
  contactIcon.setAttribute("alt", "butterfly graphic");
  contactContent.appendChild(contactIcon);

  data.forEach(element => {
    //create links
    let linkContainer = document.createElement("div");
    linkContainer.classList.add("linkContainer");
    contactContent.appendChild(linkContainer);

    for (let i = 0; i < element.links.length; i++) {
      //create <button> and nest <a> element for external links
      let contactLinkButton = document.createElement("button");
      let contactLink = document.createElement("a");
      contactLink.setAttribute("href", element.links[i]);
      contactLink.setAttribute("target", "blank");
      contactLinkButton.appendChild(contactLink);
      linkContainer.appendChild(contactLinkButton);

      //create text node from data object and append to <a> element
      let labelText = document.createTextNode(element.titles[i]);
      contactLink.appendChild(labelText);
    }
    //create <p> for email and phone#
    for (let i = 0; i < element.info.length; i++) {
      let infoText = document.createElement("p");
      let infoTextContent = document.createTextNode(element.info[i]);
      infoText.appendChild(infoTextContent);
      contactContent.appendChild(infoText);
    }
  });
})(contactInfo); // < iife -- runs immediately

// add click listener to the contact selector
contactSelector.addEventListener("click", e => {
  //check to see if already displayed on page
  //if so: do nothing
  if (contactContent.getAttribute("id") != "displayNone") {
    return;
  } else {
    //if not:
    //reset conentModal so that the transition between content sets is smooth
    contentModal.classList.add("displayNone");
    //hide any displayed content containers
    //in this case set attributes for about container and projects container if either happens to be displayed
    aboutContent.setAttribute("id", "displayNone");
    projectsContent.setAttribute("id", "displayNone");
    //display modal and contact container with timeout set to sync with animation
    setTimeout(function() {
      contentModal.classList.remove("displayNone");
      contactContent.removeAttribute("id", "displayNone");
    }, 2000);
  }
});
