module.exports.home = function (req, res, next) {
    res.render('index',
        {
            title: 'Home Page',
            username: 'KHALIFA'
        }
    );
}

module.exports.about = function (req, res, next) {
    res.render('index',
        {
            title: 'About',
            username: 'khalifa'
        }
    );
}

module.exports.project = function (req, res, next) {
    res.render('project',
        {
            title: 'Project',
            username: 'khalifa'
        }
    );
}

module.exports.aboutP = function (req, res, next) {
    res.render('aboutP',
        {
            title: 'About Our Real Estate Website Project',
            projectN: 'Real Estate Website',
            description: 'We embarked on a captivating real estate website development venture, leveraging the power of HTML5, CSS3, and JavaScript. Our objective was to craft an aesthetically pleasing and intuitive front-end user interface. HTML5 provided the foundation for structured content, CSS3 adorned the layout with stylish fonts and delightful colors, while JavaScript added dynamic features, delivering an exceptional user experience.',
            descriptiona: 'Our real estate website development project was an exciting and intricate endeavor that brought together the latest web technologies—HTML5, CSS3, and JavaScript. The primary goal was to create a compelling, user-centric platform for individuals seeking properties, homes, or investments. ',
            descriptionb:'The real magic happened with the integration of JavaScript. Leveraging this versatile language, we were able to bring life to the static interface. We implemented dynamic features that enriched the user experience. Features such as interactive property search filters, image carousels showcasing properties, and smooth transitions between pages were all made possible with JavaScript. The result was a website that felt fluid and intuitive, making property browsing a delight for our users.',
            descriptionc:' In addition to the technical aspects, we meticulously designed the user interface (UI) to ensure a seamless and enjoyable browsing experience. User-centric design principles were applied throughout the project. We focused on intuitive navigation, clear call-to-actions, and a visually pleasing interface that instills confidence in our users. The interface was optimized for various devices, including desktops, tablets, and smartphones, to ensure a consistent experience regardless of the platform being used.',
            descriptiond:'Overall, this real estate website development project was a testament to our teams dedication, creativity, and technical expertise. It stands as a showcase of our ability to blend cutting-edge technologies with thoughtful design to create a platform that fulfills the needs and aspirations of our users in the competitive real estate market.'
        
        }
    );
}
module.exports.aboutP1 = function (req, res, next) {
    res.render('aboutP',
        {
            title:'About Our Bank System Development Project',
            projectN:'Bank System Development',
            description:'Our Bank System Development project was a pioneering initiative that involved the design and construction of a comprehensive banking system utilizing C# and focusing on Object-Oriented Programming (OOP) principles. The cornerstone of our approach was to develop a robust and modular system, promoting code reusability and scalability.',
            descriptiona:'Leveraging C#, we meticulously implemented a range of classes that encapsulated essential components such as accounts, customers, transactions, and employees. This choice not only ensured a structured foundation but also facilitated efficient account management and financial operations within the bank.',
            descriptionb:'Emphasizing Object-Oriented Programming (OOP) principles allowed us to craft a solution that was both modular and extensible. We strived for a high degree of modularity, ensuring that each class had a well-defined purpose and could be modified or extended without impacting other parts of the system. This, in turn, led to a scalable solution capable of accommodating future enhancements and changes.',
            descriptionc:'The outcome of our efforts was a state-of-the-art, well-structured solution that addressed the complex requirements of efficient financial operations and customer account management. Our bank system served as a testament to our teams expertise in both C# and Object-Oriented Programming (OOP), showcasing our ability to develop robust and adaptable software solutions for the financial sector.',
            descriptiond:''

        }
        );
    }
    module.exports.aboutP2 = function (req, res, next) {
        res.render('aboutP',
            {
                title:'About Bug Smasher Game Project',
                projectN:'Bug Smasher Game ',
                description:'The Bug Smasher game project was an exciting venture that allowed me to unleash my creativity and programming skills. Using JavaScript and HTML5/CSS3, I designed and developed an interactive and entertaining game that captivated players with its engaging gameplay.',
                descriptiona:'The heart of this project lay in leveraging JavaScript to create a dynamic gaming experience. Players were immersed in the game, tasked with the enjoyable challenge of "smashing" virtual bugs. The application of JavaScript not only facilitated game interactivity but also showcased my proficiency in the language and its potential for game development.',
                descriptionb:'HTML5 and CSS3 played crucial roles in shaping the games structure and design. HTML5 provided a solid foundation for the games structure, enabling seamless integration with JavaScript, while CSS3 allowed me to craft an appealing visual interface that enhanced the gaming experience. The fusion of these technologies resulted in a game that was both aesthetically pleasing and highly interactive.',
                descriptionc:'This project stands as a testament to my skills in game design and development. It not only showcased my proficiency in JavaScript but also demonstrated my ability to bring creative ideas to life through engaging and enjoyable gaming experiences. The Bug Smasher game was a delightful journey into the realm of interactive entertainment, and I am proud of the results that were achieved.',
                descriptiond:''
            }
            );
        }
        module.exports.service = function (req, res, next) {
            res.render('services',
                {
                    title: 'services',
                }
            );
        }
        