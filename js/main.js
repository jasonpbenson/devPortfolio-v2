const contentModal = document.getElementById("modal");

function aboutModal(){
    aboutSelector.addEventListener('click', (e)=>{
        contentModal.classList.remove("displayNone");
        contentModal.innerHTML = `
        <img class="aboutImage" src="assets/svg/about.svg" />
        <div class="aboutHeader">
            <p class="briefStatement">I approach projects with a dual interest in design and programming, and 
            work to generate UI that is playful, exploratory,  and idiosyncratic. <br />
            My fine art background provides a basis for critical thinking and creative 
            problem solving that undergirds a lifelong impulse to make things.</p>
        </div>
        <div class="aboutTechContainer"> 
            <h3>front-end</h3>
            <div class="frontEnd">
                <div class="techIcon">
                    <i class="devicon-bootstrap-plain"></i>
                    <p>bootstrap</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-css3-plain"></i>
                    <p>css3</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-html5-plain"></i>
                    <p>html5</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-javascript-plain"></i>
                    <p>javascript</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-jquery-plain"></i>
                    <p>jquery</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-react-original"></i>
                    <p>react</p>
                </div>
            </div>
            <h3> back-end</h3>
            <div class="backEnd">
                <div class="techIcon">
                    <i class="devicon-express-original"></i>
                    <p>express</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-nodejs-plain"></i>
                    <p>nodejs</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-python-plain"></i>
                    <p>python<p>
                </div>
            </div>
            <h3> server/db</h3>
            <div class="serverDb">
                <div class="techIcon">
                    <i class="devicon-amazonwebservices-original"></i>
                    <p>aws</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-apache-plain"></i>
                    <p>apache</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-mysql-plain"></i>
                    <p>mysql</p>
                </div>
                <div class="techIcon">
                <i class="devicon-postgresql-plain"></i>
                <p>postgresql</p>
            </div>
            </div>
            <h3>et al</h3>
            <div class="etAl">  
                <div class="techIcon">
                    <i class="devicon-apple-original"></i>
                    <p>apple</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-chrome-plain"></i>
                    <p>chrome</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-git-plain"></i>
                    <p>git</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-github-plain"></i>
                    <p>github</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-google-plain"></i>
                    <p>google</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-illustrator-plain"></i>
                    <p>illustrator</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-jasmine-plain"></i>
                    <p>jasmine</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-photoshop-plain"></i>
                    <p>photoshop</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-slack-plain"></i>
                    <p>slack</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-trello-plain"></i>
                    <p>trello</p>
                </div>
                <div class="techIcon">
                    <i class="devicon-visualstudio-plain"></i>
                    <p>visualstudio</p>
                </div>
            </div> 
        </div>
        `
    });
}

setTimeout(aboutModal(), 1000);
aboutModal();

projectSelector.addEventListener('click', (e)=>{
    contentModal.classList.remove("displayNone");
    contentModal.innerHTML = `
        <div class="projectsContainer">
            <img class="projectsImage" src="assets/svg/projects.svg" />
            <div class="elgContainer">
                <img class="elgLogo" src="./assets/svg/logos/enchanted_splatter_OffRegTrace_ed.svg">
                <div class="elgProjectLinks">
                    <a href="https://github.com/jasonpbenson/enchantedLifeGoods" target="_blank">repo</a>
                </div>
                <img class="elgCap displayNone" src="./assets/screencaps/elg_screen1.png">
                <h3>project description</h3>
                <p>Enchanted Life Goods is a website for a small business that I run with my 
                wife (we primarily make and sell functional ceramics). It’s a work in progress, 
                but hoping to have a working demo available soon. 
                </p>
                <h3>built with</h3>
                <p>css3, jsx, nodejs/express, postgresql, react/redux</p>
            </div>
            <div class="emOceansContainer">
                <img class="emOceansLogo" src="./assets/svg/logos/emOceans-logo-1.svg">
                <div class="projectLinks">
                    <a href="https://github.com/jasonpbenson/backEndProject" target="_blank">repo</a>
                    <a href="https://emoceans.jpbenson.com" target="_blank">demo</a>
                </div>
                <img class="emOceansCap displayNone" src="./assets/screencaps/emOceans_screen2.png">
                <h3>project description</h3>
                <p>
                    emOceans is a simple web application that allows you to take note of your mood 
                    every day using color and language. Each day (and each mood, each memory) forms 
                    a tiny drop in the vast and ever-shifting ocean that is every human. We hope to 
                    make the observation and appreciation of those shifts and waves more accessible, 
                    helpful, and more beautiful.
                </p>
                <h3>built with</h3>
                <p>css3, html5, javascript/jquery, mysql, nodejs/express</p>
            </div>
            <div class="pithosContainer">
                <img class="pithosLogo" src="./assets/svg/logos/pithos-logo-1.svg">
                <div class="projectLinks">
                    <a href="https://github.com/jasonpbenson/FrontEndProject-Pithos" target="_blank">repo</a>
                    <a href="https://pithos.jpbenson.com" target="_blank">demo</a>
            </div>
            <img class="pithosCap displayNone" src="./assets/screencaps/pithos_screen1.png">
            <h3>project description</h3>
            <p>Pithos is a space that allows the user to experience an 'ordinary' 
                thing in an unusual way. We were interested in ecosystems, and wanted to connect our 
                ecosystem to the state of Georgia (home), and also the larger realms of history, mythology, 
                and health; which are their own kinds of ecosystems, or containers. Pithos.</p>
            <h3>built with</h3>
            <p>css3, html5, javascript/jquery</p>
         </div>
    </div>
    `
})

resetButton.addEventListener('click', (e)=>{
    contentModal.scrollTop = 0;
    contentModal.classList.add("displayNone");
})