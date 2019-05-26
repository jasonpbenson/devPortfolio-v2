const contentModal = document.getElementById("modal");

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
})

resetButton.addEventListener('click', (e)=>{
    contentModal.classList.add("displayNone");
})