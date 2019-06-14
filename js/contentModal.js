//grab modal and add/remove content 

const contentModal = document.getElementById("contentModal");

const aboutContent = document.createElement('div');
aboutContent.classList.add("aboutContainer");
aboutContent.setAttribute("id", "displayNone")
contentModal.appendChild(aboutContent);
const aboutTetherInstance = new Tether({
    element: contentModal,
    target: flowerCenter1,
    attachment: 'middle center',
    targetAttachment: 'middle center'
});

const projectsContent = document.createElement('div');
projectsContent.classList.add("projectsContainerAll");
projectsContent.setAttribute("id", "displayNone")
contentModal.appendChild(projectsContent);
const projectsTetherInstance = new Tether({
    element: contentModal,
    target: flowerCenter2,
    attachment: 'middle center',
    targetAttachment: 'middle center'
});

const contactContent = document.createElement('div');
contactContent.classList.add("contactContainer");
contactContent.setAttribute("id", "displayNone")
contentModal.appendChild(contactContent);
const contactTetherInstance = new Tether({
    element: contentModal,
    target: flowerCenter3,
    attachment: 'middle center',
    targetAttachment: 'middle center'
});

//create aboutContent child elements and populate with data
const showAboutContent = (data)=>{

    // create element for about icon 
    let aboutIcon = document.createElement("img");
    aboutIcon.classList.add("contentIcon");
    aboutIcon.setAttribute('src', "assets/svg/about.svg");
    aboutContent.appendChild(aboutIcon);

    //create element for text blurb
    let aboutText = document.createElement("p");
    aboutText.classList.add("briefStatement");
    let statement = document.createTextNode("I approach projects with a dual interest in design and programming, and  work to generate UI that is playful, exploratory,  and idiosyncratic. My fine art background provides a basis for critical thinking and creative  problem solving that undergirds a lifelong impulse to make things.");
    aboutText.appendChild(statement)
    aboutContent.appendChild(aboutText); 

    //tech icons container
    let techContainer = document.createElement("div");
    techContainer.classList.add("aboutTechContainer")
    aboutContent.appendChild(techContainer);

    //loop through 'aboutData' and pull section titles and tech icons
    data.forEach(element => {
        //section headers
        let section = document.createElement("div");
        section.classList.add("section");
        let sectionHeader = document.createElement("h3");
        let sectionHeaderText = document.createTextNode(element.sectionTitle);
        section.appendChild(sectionHeader);
        sectionHeader.appendChild(sectionHeaderText);
        techContainer.appendChild(section);

        let iconContainer = document.createElement("div");
        iconContainer.classList.add("iconContainer")
        section.appendChild(iconContainer);

        //icons
        for(let i = 0; i < element.icons.length; i++){
            let techIcon = document.createElement("i");
            techIcon.setAttribute("class", element.icons[i]);
            techIcon.classList.add("techIcon");
            iconContainer.appendChild(techIcon);
        }
    });
};

showAboutContent(techSections);

//add click listener to 'about' button
aboutSelector.addEventListener('click', (e)=>{
    //check to see if already displayed on page
    //if so: do nothing
    if(aboutContent.getAttribute("id") != "displayNone"){
        return
    }else{
        //if not:
        //reset conentModal so that the transition between conent sets is smooth
        contentModal.classList.add("displayNone");
        //hide projects and contact content
        projectsContent.setAttribute("id", "displayNone");
        contactContent.setAttribute("id", "displayNone");
        //display modal and about content
        setTimeout(function(){
            contentModal.classList.remove("displayNone");
            aboutContent.removeAttribute("id", "displayNone");
            aboutTetherInstance.position();
        }, 2000);
    };
});

//create projectsContent child elements and populate with data
const showProjectsContent = function(data){
    //create icon
    let projectsIcon = document.createElement("img");
    projectsIcon.setAttribute('src', "assets/svg/projects.svg");
    projectsIcon.classList.add("contentIcon");
    projectsContent.appendChild(projectsIcon);

    data.forEach(element => {
        //create container for each project
        let projectContainerEach = document.createElement("div");
        projectContainerEach.classList.add("projectContainerEach")

        // create element and set attributes for project logos
        let projectLogo = document.createElement("img");
        projectLogo.classList.add("projectLogo");
        projectLogo.setAttribute('src', element.logo);
        projectLogo.setAttribute('name', element.title);
        projectsContent.appendChild(projectContainerEach);
        projectContainerEach.appendChild(projectLogo);

        //project links container
        let projectLinks = document.createElement("div");
        projectLinks.classList.add("projectLinks");
        projectContainerEach.appendChild(projectLinks);

        //repo and demo links
        let repoLink = document.createElement("a");
        repoLink.setAttribute("href", element.repoLink);
        repoLink.setAttribute("target", "_blank")
        let repoText = document.createTextNode("repo");
        repoLink.appendChild(repoText);
        projectLinks.appendChild(repoLink);

        //check for demo link (not all projects live...)
        if(element.demoLink != null){
            let demoLink = document.createElement("a");
            demoLink.setAttribute("href", element.demoLink);
            demoLink.setAttribute("target", "_blank")
            let demoText = document.createTextNode("demo");
            demoLink.appendChild(demoText);
            projectLinks.appendChild(demoLink);
        };

        //project preview image [removed for now]
        // let projectPreviewContainer = document.createElement('div');
        // projectPreviewContainer.classList.add("projectPreviewContainer", "displayNone")
        // let projectPreview = document.createElement("img");
        // projectPreview.classList.add("`${element.title}Img`", "ProjectPreviewImg", "displayNone");
        // projectPreview.setAttribute("src", element.screenCap);
        // projectContainerEach.appendChild(projectPreview);
        // projectContainerEach.appendChild(projectPreviewContainer);

        //project desctiption
        let projectDescription = document.createElement("p");
        projectDescription.classList.add("projectDescription");
        let descriptionText = document.createTextNode(element.description);
        projectDescription.appendChild(descriptionText);
        projectContainerEach.appendChild(projectDescription); 

        //built with 
        let builtWithItems = document.createElement("p");
        for(let i = 0; i < element.tech.length; i++){
            builtWithItems.classList.add("projectTech");
            builtWithText = document.createTextNode(element.tech[i]);
            builtWithItems.appendChild(builtWithText);
            projectContainerEach.appendChild(builtWithItems);
        };
    });
};

showProjectsContent(projects);

projectSelector.addEventListener('click', (e)=>{
    //check to see if already displayed on page
    //if so: do nothing
    if(projectsContent.getAttribute("id") != "displayNone"){
        return
    }else{
        //if not:
        //reset conentModal so that the transition between conent sets is smooth
        contentModal.classList.add("displayNone");
        //hide projects and contact content
        aboutContent.setAttribute("id", "displayNone");
        contactContent.setAttribute("id", "displayNone");
        //display modal and projects content
        setTimeout(function(){
            contentModal.classList.remove("displayNone");
            projectsContent.removeAttribute("id", "displayNone");
            projectsTetherInstance.position();
        }, 2000);
    }
});

//create contactContent child elements and populate with data
const showContactConent = function(data){

    // create element for about icon 
    let contactIcon = document.createElement("img");
    contactIcon.classList.add("contentIcon");
    contactIcon.setAttribute('src', "assets/svg/contact.svg");
    contactContent.appendChild(contactIcon);

    data.forEach(element => {
        //create links
        let linkContainer = document.createElement("div");
        linkContainer.classList.add("linkContainer")
        contactContent.appendChild(linkContainer);

        for(let i = 0; i < element.links.length; i++){

            //create a tags and set href
            let contactLink = document.createElement("a");
            contactLink.setAttribute('href', element.links[i]);
            contactLink.setAttribute('target', "blank");
            linkContainer.appendChild(contactLink)

            //label a tags
            let labelText = document.createTextNode(element.titles[i]);
            contactLink.appendChild(labelText);
        };
        for(let i = 0; i < element.info.length; i++){
            let infoText = document.createElement("p");
            let infoTextContent = document.createTextNode(element.info[i]);
            infoText.appendChild(infoTextContent);
            contactContent.appendChild(infoText);
        }
    });

}

showContactConent(contactInfo);

contactSelector.addEventListener('click', (e)=>{
     //check to see if already displayed on page
    //if so: do nothing
    if(contactContent.getAttribute("id") != "displayNone"){
        return
    }else{
        //if not:
        //reset conentModal so that the transition between conent sets is smooth
        contentModal.classList.add("displayNone");
        //hide projects and contact content
        aboutContent.setAttribute("id", "displayNone");
        projectsContent.setAttribute("id", "displayNone");
        //display modal and projects content
        setTimeout(function(){
            contentModal.classList.remove("displayNone");
            contactContent.removeAttribute("id", "displayNone");
            contactTetherInstance.position();
        }, 2000);
    }
});

//reset modal

resetButton.addEventListener('click', (e)=>{
    //hide modal container and content
    contentModal.classList.add("displayNone")
    aboutContent.setAttribute("id", "displayNone");
    projectsContent.setAttribute("id", "displayNone");
    contactContent.setAttribute("id", "displayNone");
});