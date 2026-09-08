/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    const selectedPage =
        document.getElementById(pageName + "-page");

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    closeMobileMenu();

    updateActiveNav(pageName);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   INDEPENDENT PROJECTS
========================================================= */

const ownProjects = [

    {
        id: "quiz-bio",
        number: "01",
        title: "Quiz Bio System",
        type: "Independent Project",

        description:
            "A secure online quiz application with student identification, biometric verification and anti-cheating features.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Face API"
        ],

        overview:
            "Quiz Bio System is an independently developed web application designed for controlled online assessments. The system combines normal quiz functionality with identity verification and anti-cheating mechanisms.",

        features: [
            "Student identification",
            "Timed quiz",
            "Multiple-choice questions",
            "Face detection",
            "Identity verification",
            "Tab switching detection",
            "Violation counting",
            "Automatic submission",
            "Right-click prevention",
            "Copy prevention",
            "Paste prevention"
        ],

        contribution:
            "I independently designed and developed the project. My work included the complete frontend structure, quiz functionality, user interface, timer, anti-cheating system and biometric identity verification.",

        how:
            "The student first provides identification information and completes identity verification. JavaScript then loads the quiz questions and manages the timer, answers and navigation. Browser activity is monitored for suspicious actions and violations are recorded. Face detection is used for identity verification.",

        challenges:
            "The main challenge was combining quiz functionality with security features while keeping the application easy to use. Webcam access and face detection also required careful handling.",

        learning:
            "This project improved my understanding of JavaScript, DOM manipulation, browser events, webcam access, face detection, application state and security-oriented web development.",

        github:
            "https://github.com/rmking205-oss/quiz-bio-system"
    },


    {
        id: "ai-playground",
        number: "02",
        title: "AI Playground",
        type: "Independent Project",

        description:
            "A full-stack AI playground for interacting with AI models using streaming responses, model selection, generation controls and balance management.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Groq API",
            "SSE"
        ],

        overview:
            "AI Playground is a full-stack web application that allows users to interact with AI models through the Groq API. The application provides a simple interface for sending prompts, selecting available models and controlling AI generation settings.",

        features: [
            "AI text generation",
            "Dynamic Groq model loading",
            "Real-time SSE streaming",
            "Temperature control",
            "Top-P control",
            "Max Tokens control",
            "Token usage tracking",
            "User balance system",
            "Balance reservation",
            "Automatic balance refund",
            "Stop generation",
            "Error handling",
            "MongoDB database integration"
        ],

        contribution:
            "I independently designed and developed the application, including the frontend interface, Node.js and Express backend, Groq API integration, SSE streaming, MongoDB integration, dynamic model loading, token and balance management, generation controls and error handling.",

        how:
            "The user enters a prompt and selects the desired AI model and generation settings. The request is sent to the Node.js and Express backend, which communicates with the Groq API. The AI response is streamed to the frontend in real time using Server-Sent Events. The system also tracks token usage and manages the user's balance using reservation and refund logic.",

        challenges:
            "One of the main challenges was implementing real-time AI streaming while also managing token usage and user balance. Handling stopped generations, balance refunds, dynamic models and backend errors required careful server-side logic.",

        learning:
            "This project improved my understanding of AI API integration, Node.js, Express.js, Server-Sent Events, MongoDB, asynchronous programming, token usage, API error handling and full-stack application architecture.",

        github:
            "https://github.com/rmking205-oss/ai-playground"
    },


    {
        id: "student-management",
        number: "03",
        title: "Student Management System",
        type: "Independent Project",

        description:
            "A full-stack student management system for managing student records with CRUD operations using Node.js, Express, MySQL and MongoDB.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MySQL",
            "MongoDB"
        ],

        overview:
            "Student Management System is a full-stack web application designed to manage student records. The application provides functionality for adding, viewing, updating and deleting student information through a web-based interface.",

        features: [
            "Add student records",
            "View student records",
            "Update student information",
            "Delete student records",
            "CRUD operations",
            "MySQL database integration",
            "MongoDB database integration",
            "Node.js backend",
            "Express.js server",
            "REST API endpoints",
            "Student record management"
        ],

        contribution:
            "I independently designed and developed the project, including the frontend interface, Node.js and Express backend, database connectivity, CRUD operations and integration with MySQL and MongoDB.",

        how:
            "The frontend communicates with the Node.js and Express backend through HTTP requests. The backend processes the requests and performs CRUD operations on student records using the database. MySQL is used for structured student data, while MongoDB is integrated for additional application data and database operations.",

        challenges:
            "One of the main challenges was connecting the application with databases and correctly implementing CRUD operations. Handling requests, database queries and errors while keeping the frontend and backend connected was an important part of the project.",

        learning:
            "This project improved my understanding of Node.js, Express.js, REST APIs, CRUD operations, MySQL, MongoDB, database connectivity, asynchronous programming and full-stack web development.",

        github:
            "https://github.com/rmking205-oss/student-management-system"
    }

];


/* =========================================================
   CONTRIBUTION PROJECTS
========================================================= */

const contributions = [

    {
        id: "weather",
        number: "01",
        title: "Weather Check App",
        type: "Contribution",

        description:
            "A JavaScript-based weather application with a clean, simple and responsive user interface.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        overview:
            "Weather Check App is a frontend web application designed to present weather-related information through a simple and user-friendly interface.",

        features: [
            "Weather information display",
            "Responsive interface",
            "JavaScript functionality",
            "Clean user interface",
            "Mobile-friendly layout"
        ],

        contribution:
            "I contributed to the frontend structure, CSS styling and JavaScript functionality of the application.",

        how:
            "JavaScript handles user interaction and dynamically updates the information displayed on the webpage.",

        challenges:
            "Creating a clean responsive interface while keeping the weather information simple and easy to understand was an important part of the project.",

        learning:
            "I improved my understanding of JavaScript, DOM manipulation, responsive design and frontend development.",

        github:
            "https://github.com/lishay7890/weather-check-app"
    },


    {
        id: "stories",
        number: "02",
        title: "Story Clone Project",
        type: "Contribution",

        description:
            "An Instagram-style stories application with image uploads, database storage and 24-hour story expiration.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB"
        ],

        overview:
            "Story Clone Project recreates the core concept of social media stories. Users can upload images, view stories, navigate between them and manage their uploaded content.",

        features: [
            "Image upload",
            "Story viewer",
            "Story navigation",
            "Progress indicators",
            "Image processing",
            "MongoDB storage",
            "Express API",
            "24-hour expiration",
            "Responsive design",
            "Touch and swipe support"
        ],

        contribution:
            "I contributed to the frontend implementation, story interface, image processing, API integration and MongoDB integration.",

        how:
            "Images are processed on the client side before being sent to the Express backend. Express provides API endpoints that communicate with MongoDB for storing and retrieving story information. Stories are monitored for expiration.",

        challenges:
            "Connecting the frontend with the backend, configuring MongoDB Atlas and implementing story expiration were some of the main challenges.",

        learning:
            "This project gave me practical experience with full-stack development, REST APIs, Express, MongoDB, asynchronous JavaScript and frontend-backend communication.",

        github:
            "https://github.com/lishay7890/story-clone-project"
    },


    {
        id: "theme",
        number: "03",
        title: "Theme Switcher",
        type: "Contribution",

        description:
            "A dynamic theme-switching project that allows users to change the appearance of a website.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        overview:
            "Theme Switcher demonstrates how JavaScript can dynamically change the visual appearance of a web interface based on user interaction.",

        features: [
            "Theme switching",
            "Dynamic styling",
            "Interactive controls",
            "Responsive interface"
        ],

        contribution:
            "I contributed to the frontend styling and JavaScript functionality used to switch between different themes.",

        how:
            "JavaScript listens for user interaction and changes the active theme by updating the relevant styling or classes.",

        challenges:
            "Keeping the interface visually consistent across different themes required careful CSS styling.",

        learning:
            "I improved my understanding of CSS, JavaScript events and dynamic user interface changes.",

        github:
            "https://github.com/fatimatalat98/theme-switcher"
    },


    {
        id: "git",
        number: "04",
        title: "Team Git Practice",
        type: "Contribution",

        description:
            "A collaborative repository created for practicing Git, GitHub, branches, commits and pull requests.",

        technologies: [
            "Git",
            "GitHub",
            "HTML",
            "CSS"
        ],

        overview:
            "Team Git Practice is a collaborative project focused on learning and applying Git and GitHub workflows in a team environment.",

        features: [
            "Git branches",
            "Pull requests",
            "Team collaboration",
            "Version control",
            "Merge workflow",
            "Repository management"
        ],

        contribution:
            "I contributed to the collaborative workflow and practiced branches, commits, pull requests, merges and repository management.",

        how:
            "Team members work on separate branches, make changes and use pull requests to review and merge their work into the shared project.",

        challenges:
            "Understanding branches, merges and collaborative version control was an important part of the project.",

        learning:
            "This project improved my practical Git and GitHub collaboration skills.",

        github:
            "https://github.com/fatimatalat98/team-git-practice"
    },


    {
        id: "task",
        number: "05",
        title: "Task Tracker",
        type: "Contribution",

        description:
            "A task management interface for creating, completing and managing daily tasks.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        overview:
            "Task Tracker provides an interactive interface where users can create and manage a list of tasks.",

        features: [
            "Add tasks",
            "Delete tasks",
            "Complete tasks",
            "Task management",
            "Dynamic updates",
            "Responsive interface"
        ],

        contribution:
            "I contributed to the frontend implementation and task management functionality.",

        how:
            "JavaScript handles task creation, completion and deletion while dynamically updating the webpage using DOM manipulation.",

        challenges:
            "Keeping task information synchronized with user actions required careful handling of JavaScript events and DOM elements.",

        learning:
            "I strengthened my understanding of JavaScript arrays, objects, events and DOM manipulation.",

        github:
            "https://github.com/rmking205-oss/task-tracker"
    },


    {
        id: "temperature",
        number: "06",
        title: "Temperature System",
        type: "Contribution",

        description:
            "An interactive temperature conversion application built using JavaScript.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        overview:
            "Temperature System allows users to enter temperature values and convert them between different units.",

        features: [
            "Temperature input",
            "Unit conversion",
            "Instant results",
            "Input handling",
            "Responsive design"
        ],

        contribution:
            "I contributed to the interface and JavaScript conversion functionality.",

        how:
            "The application receives the user's temperature value and applies the appropriate conversion formula to produce the result.",

        challenges:
            "Handling conversion formulas and different user inputs correctly was the main challenge.",

        learning:
            "This project strengthened my JavaScript fundamentals, mathematical logic and event handling skills.",

        github:
            "https://github.com/rmking205-oss/temperature-system"
    },


    {
        id: "pomodoro",
        number: "07",
        title: "Pomodoro Timer",
        type: "Contribution",

        description:
            "A productivity timer based on focused work sessions and break intervals.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        overview:
            "Pomodoro Timer helps users manage focused work sessions and breaks through timed intervals.",

        features: [
            "Work timer",
            "Break timer",
            "Start controls",
            "Countdown",
            "Timer management",
            "Responsive interface"
        ],

        contribution:
            "I contributed to the frontend interface and JavaScript timer functionality.",

        how:
            "JavaScript controls the countdown, manages timer state and updates the displayed time as the session progresses.",

        challenges:
            "Managing timer state and creating accurate countdown behavior required careful JavaScript logic.",

        learning:
            "I improved my understanding of JavaScript timers, state management and DOM updates.",

        github:
            "https://github.com/lishay7890/pomodoro-timer"
    },


    {
        id: "github-repository",
        number: "08",
        title: "GitHub Repository Finder",
        type: "Contribution",

        description:
            "A web application that uses the GitHub API to find repositories based on programming language.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "GitHub API"
        ],

        overview:
            "GitHub Repository Finder allows users to select a programming language and retrieve repository information through the GitHub API.",

        features: [
            "Language selection",
            "GitHub API integration",
            "Repository search",
            "Dynamic results",
            "Repository discovery",
            "Responsive interface"
        ],

        contribution:
            "I contributed to the frontend interface and JavaScript functionality used to interact with the GitHub API.",

        how:
            "The application sends API requests to GitHub and dynamically displays repository information returned in JSON format.",

        challenges:
            "Working with API requests, handling JSON data and rendering external data dynamically were important challenges.",

        learning:
            "This project improved my understanding of APIs, fetch requests, JSON data and dynamic DOM rendering.",

        github:
            "https://github.com/fatimatalat98/github-repository"
    },


    {
        id: "dropdown",
        number: "09",
        title: "Custom Dropdown",
        type: "Contribution",

        description:
            "A custom dropdown component built using HTML, CSS and JavaScript.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        overview:
            "Custom Dropdown focuses on creating an interactive dropdown component with customized styling and user interaction.",

        features: [
            "Custom dropdown UI",
            "Open and close interaction",
            "Option selection",
            "JavaScript events",
            "Custom styling",
            "Responsive layout"
        ],

        contribution:
            "I contributed to the HTML structure, CSS styling and JavaScript interaction.",

        how:
            "JavaScript manages the dropdown state and responds to user interactions such as opening, closing and selecting options.",

        challenges:
            "Managing dropdown state and creating smooth user interaction were the main challenges.",

        learning:
            "I improved my understanding of event handling, CSS positioning and interactive UI components.",

        github:
            "https://github.com/lishay7890/custom-dropdown"
    },


    {
        id: "quiz",
        number: "10",
        title: "Quiz Project",
        type: "Contribution",

        description:
            "A frontend quiz system with multiple-choice questions and interactive quiz functionality.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        overview:
            "Quiz Project provides an interactive question-and-answer experience through a browser-based quiz system.",

        features: [
            "Multiple-choice questions",
            "Question navigation",
            "Answer selection",
            "Quiz timer",
            "Interactive interface",
            "Responsive design"
        ],

        contribution:
            "I contributed to the quiz functionality, frontend behavior and JavaScript logic.",

        how:
            "JavaScript manages the question data, user selections, navigation and overall quiz state.",

        challenges:
            "Managing question state across multiple questions required careful JavaScript logic.",

        learning:
            "This project strengthened my understanding of arrays, objects, DOM manipulation and application state.",

        github:
            "https://github.com/fatimatalat98/quiz-project"
    }

];


/* =========================================================
   FIND PROJECT
========================================================= */

function findProject(id) {

    let project = ownProjects.find(
        project => project.id === id
    );

    if (!project) {

        project = contributions.find(
            project => project.id === id
        );

    }

    return project;
}


/* =========================================================
   CREATE PROJECT CARD
========================================================= */

function createProjectCard(project, featured = false) {

    const card =
        document.createElement("article");

    card.className =
        featured
            ? "project-card featured-card"
            : "project-card";


    card.innerHTML = `

        <div class="project-top">

            <div class="project-number">
                PROJECT ${project.number}
            </div>

            <div class="project-type">
                ${project.type}
            </div>

        </div>


        <h4>
            ${project.title}
        </h4>


        <p>
            ${project.description}
        </p>


        <div class="tech-list">

            ${project.technologies.map(
                tech => `
                    <span class="tech">
                        ${tech}
                    </span>
                `
            ).join("")}

        </div>


        <div class="project-actions">

            <span
                class="details-link"
                role="button"
                tabindex="0">

                View Case Study →

            </span>


            <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="github-link">

                GitHub ↗

            </a>

        </div>

    `;


    const detailsLink =
        card.querySelector(".details-link");


    if (detailsLink) {

        detailsLink.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                openProject(project.id);

            }
        );


        detailsLink.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openProject(project.id);

                }

            }
        );

    }


    card.addEventListener(
        "click",
        function (event) {

            if (
                event.target.closest(".github-link")
            ) {
                return;
            }

            openProject(project.id);

        }
    );


    return card;
}


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects() {

    const ownGrid =
        document.getElementById(
            "ownProjectsGrid"
        );

    const contributionGrid =
        document.getElementById(
            "contributionsGrid"
        );


    if (ownGrid) {
        ownGrid.innerHTML = "";
    }


    if (contributionGrid) {
        contributionGrid.innerHTML = "";
    }


    if (ownGrid) {

        ownProjects.forEach(
            (project, index) => {

                const card =
                    createProjectCard(
                        project,
                        true
                    );

                card.style.animationDelay =
                    `${index * 0.12}s`;

                ownGrid.appendChild(card);

            }
        );

    }


    if (contributionGrid) {

        contributions.forEach(
            (project, index) => {

                const card =
                    createProjectCard(
                        project,
                        false
                    );

                card.style.animationDelay =
                    `${index * 0.08}s`;

                contributionGrid.appendChild(card);

            }
        );

    }

}


/* =========================================================
   OPEN PROJECT DETAIL
========================================================= */

function openProject(id) {

    const project =
        findProject(id);

    if (!project) {
        return;
    }


    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active-page"
            );

        });


    const detailPage =
        document.getElementById(
            "project-detail"
        );


    if (detailPage) {

        detailPage.classList.add(
            "active-page"
        );

    }


    const detailContent =
        document.getElementById(
            "detailContent"
        );


    if (!detailContent) {
        return;
    }


    detailContent.innerHTML = `

        <span
            class="detail-back"
            role="button"
            tabindex="0">

            ← Back to Projects

        </span>


        <div class="detail-title">

            <div class="project-type">
                ${project.type}
            </div>

            <h1>
                ${project.title}
            </h1>

            <p>
                ${project.description}
            </p>

        </div>


        <div class="detail-grid">


            <div class="detail-main">


                <h2>
                    Project Overview
                </h2>

                <p>
                    ${project.overview}
                </p>


                <h2>
                    Key Features
                </h2>

                <ul>

                    ${project.features.map(
                        feature => `
                            <li>
                                ${feature}
                            </li>
                        `
                    ).join("")}

                </ul>


                <h2>
                    My Contribution
                </h2>

                <p>
                    ${project.contribution}
                </p>


                <h2>
                    How It Works
                </h2>

                <p>
                    ${project.how}
                </p>


                <h2>
                    Challenges
                </h2>

                <p>
                    ${project.challenges}
                </p>


                <h2>
                    What I Learned
                </h2>

                <p>
                    ${project.learning}
                </p>


                <div class="detail-github">

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary">

                        View GitHub Repository ↗

                    </a>

                </div>


            </div>


            <aside class="detail-sidebar">

                <div class="sidebar-title">
                    Technologies
                </div>


                ${project.technologies.map(
                    tech => `
                        <div class="sidebar-item">
                            ${tech}
                        </div>
                    `
                ).join("")}


                <br>


                <div class="sidebar-title">
                    Project Type
                </div>


                <div class="sidebar-item">
                    ${project.type}
                </div>


                <div class="sidebar-item">
                    Web Development
                </div>

            </aside>


        </div>

    `;


    const backButton =
        detailContent.querySelector(
            ".detail-back"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            function () {

                showPage("projects");

            }
        );


        backButton.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    showPage("projects");

                }

            }
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (navLinks) {

        navLinks.classList.toggle(
            "active"
        );

    }

}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

function closeMobileMenu() {

    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (navLinks) {

        navLinks.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   NAVIGATION LINK EVENTS
========================================================= */

function setupNavigation() {

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function updateActiveNav(pageName) {

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );


        const target =
            link.getAttribute(
                "data-page"
            );


        if (target === pageName) {

            link.classList.add(
                "active"
            );

        }

    });

}


/* =========================================================
   PORTFOLIO RAG CHATBOT
   STRUCTURED OUTPUT
========================================================= */

async function askPortfolio(question) {

    try {

        /* -----------------------------------------------
           Validate question
        ------------------------------------------------ */

        if (
            typeof question !== "string" ||
            question.trim() === ""
        ) {

            return {
                answer: "Please enter a question.",
                found: false,
                category: "other",
                results: [],
                source: "Frontend Validation"
            };

        }


        /* -----------------------------------------------
           Send request to backend
        ------------------------------------------------ */

        const response =
            await fetch(
                "/api/ask",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        question:
                            question.trim()
                    })
                }
            );


        /* -----------------------------------------------
           Check HTTP response
        ------------------------------------------------ */

        if (!response.ok) {

            throw new Error(
                "Server returned HTTP " +
                response.status
            );

        }


        /* -----------------------------------------------
           Read JSON
        ------------------------------------------------ */

        const data =
            await response.json();


        console.log(
            "Structured Chatbot Response:",
            data
        );


        /* -----------------------------------------------
           Make sure response is an object
        ------------------------------------------------ */

        if (
            !data ||
            typeof data !== "object"
        ) {

            throw new Error(
                "Server did not return JSON object"
            );

        }


        /* -----------------------------------------------
           Accept structured response
        ------------------------------------------------ */

        return {

            answer:
                typeof data.answer === "string"
                    ? data.answer
                    : "No answer received.",

            found:
                typeof data.found === "boolean"
                    ? data.found
                    : false,

            category:
                typeof data.category === "string"
                    ? data.category
                    : "other",

            results:
                Array.isArray(data.results)
                    ? data.results
                    : [],

            source:
                typeof data.source === "string"
                    ? data.source
                    : ""

        };


    } catch (error) {

        console.error(
            "Chatbot Error:",
            error
        );


        return {

            answer:
                "Server se connection nahi ho raha.",

            found: false,

            category:
                "other",

            results: [],

            source:
                "Frontend Error"

        };

    }

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderProjects();

        setupNavigation();

        updateActiveNav("home");

    }
);