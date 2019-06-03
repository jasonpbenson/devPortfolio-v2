let screenCapPath = 'assets/screencaps/';
let logoPath = 'assets/svg/logos/'
let builtWith = 'built with: '

let projects = [
    {
        logo: `${logoPath}enchanted_splatter_OffRegTrace_ed.svg`,
        repoLink: 'https://github.com/jasonpbenson/enchantedLifeGoods',
        demoLink: null,
        screenCap: `${screenCapPath}elg_screen1.png`,
        description: `Enchanted Life Goods is a website for a small business that I run with my 
                       wife (we primarily make and sell functional ceramics). It’s a work in progress, 
                        but hoping to have a working demo available soon.`,
        tech: [builtWith, 'css3, ', 'jsx, ' , 'nodejs/express, ', 'postgresql, ', 'react/redux'],
    },
    {
        logo: `${logoPath}/emOceans-logo-1.svg`,
        repoLink: 'https://github.com/jasonpbenson/backEndProject',
        demoLink: 'https://emoceans.jpbenson.com',
        screenCap: `${screenCapPath}emOceans_screen2.png`,
        description: `emOceans is a simple web application that allows you to take note of your mood 
                        every day using color and language. Each day (and each mood, each memory) forms 
                        a tiny drop in the vast and ever-shifting ocean that is every human. We hope to 
                        make the observation and appreciation of those shifts and waves more accessible, 
                        helpful, and more beautiful.`,
        tech: [builtWith, 'css3, ', 'html5, ', 'javascript/jquery, ', 'mysql, ', 'nodejs/express'],

    },
    {
        logo: `${logoPath}/pithos-logo-1.svg`,
        repoLink: 'https://github.com/jasonpbenson/FrontEndProject-Pithos',
        demoLink: 'https://pithos.jpbenson.com',
        screenCap: `${screenCapPath}pithos_screen1.png`,
        description: `Pithos is a space that allows the user to experience an 'ordinary' 
                    thing in an unusual way. We were interested in ecosystems, and wanted to connect our 
                    ecosystem to the state of Georgia (home), and also the larger realms of history, mythology, 
                    and health; which are their own kinds of ecosystems, or containers. Pithos.`,
        tech: [builtWith, 'css3, ', 'html5, ', 'javascript/jquery '],
    }
]