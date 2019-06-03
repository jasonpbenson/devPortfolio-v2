//grab modal and add/remove content 

const contentModal = document.getElementById("contentModal");

const aboutContent = document.createElement('div');
aboutContent.classList.add("aboutContainer");
aboutContent.setAttribute("id", "displayNone")
contentModal.appendChild(aboutContent);

const projectsContent = document.createElement('div');
projectsContent.classList.add("projectsContainerAll");
projectsContent.setAttribute("id", "displayNone")
contentModal.appendChild(projectsContent);

const contactContent = document.createElement('div');
contactContent.classList.add("contactContainer");
contactContent.setAttribute("id", "displayNone")
contentModal.appendChild(contactContent);

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
        let section = document.createElement('h3');
        let sectionHeader = document.createTextNode(element.sectionTitle);
        section.appendChild(sectionHeader);
        techContainer.appendChild(section);

        //icons
        for(let i = 0; i < element.icons.length; i++){
            let techIcon = document.createElement("i");
            techIcon.setAttribute("class", element.icons[i]);
            techIcon.classList.add("techIcon");
            techContainer.appendChild(techIcon);
        }
    });
};

showAboutContent(techSections);

//add click listener to 'about' button
aboutSelector.addEventListener('click', (e)=>{
    //reset conentModal so that the transition between conent sets is smooth
    contentModal.classList.add("displayNone");
    //hide projects and contact content
    projectsContent.setAttribute("id", "displayNone");
    contactContent.setAttribute("id", "displayNone");
    //display modal and about content
    setTimeout(function(){
        contentModal.classList.remove("displayNone");
    }, 500);
    aboutContent.removeAttribute("id", "displayNone");
});

//create projectsContent child elements and populate with data
const showProjectsContent = function(data){
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
        }else{
            let demoLink = document.createElement("p");
            let placeHolderText = document.createTextNode("[demo soon]");
            demoLink.appendChild(placeHolderText);
            projectLinks.appendChild(demoLink);
        };

        //project preview image 
        //desktop only or until i think of a better solution 
        //than clip path to maintain the illusion of content
        //being inside circle...
        if(window.screen.width >= 900){
            let projectPreview = document.createElement("img");
            projectPreview.classList.add("projectScreenCap");
            projectPreview.setAttribute("src", element.screenCap);
            projectContainerEach.appendChild(projectPreview);
        }else{
            let projectPreview = null;
        };

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
    //reset conentModal so that the transition between conent sets is smooth
    contentModal.classList.add("displayNone");
    //hide projects and contact content
    aboutContent.setAttribute("id", "displayNone");
    contactContent.setAttribute("id", "displayNone");
    //display modal and projects content
    setTimeout(function(){
        contentModal.classList.remove("displayNone");
    }, 500);
    projectsContent.removeAttribute("id", "displayNone");
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
            let linkLabel = document.createElement("p");
            let labelText = document.createTextNode(element.titles[i]);
            linkLabel.appendChild(labelText);
            contactLink.appendChild(linkLabel);
        };
    });

}

showContactConent(contactInfo);

contactSelector.addEventListener('click', (e)=>{
    //reset conentModal so that the transition between conent sets is smooth
    contentModal.classList.add("displayNone");
    //hide projects and contact content
    aboutContent.setAttribute("id", "displayNone");
    projectsContent.setAttribute("id", "displayNone");
    //display modal and projects content
    setTimeout(function(){
        contentModal.classList.remove("displayNone");
    }, 500);
    contactContent.removeAttribute("id", "displayNone");
});

//reset modal

resetButton.addEventListener('click', (e)=>{
    //hide all 
    contentModal.classList.add("displayNone")
    aboutContent.setAttribute("id", "displayNone")
    projectsContent.setAttribute("id", "displayNone")
    contactContent.setAttribute("id", "displayNone")
});
