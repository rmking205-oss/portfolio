
const fs = require("fs");
const path = require("path");

/* =========================================================
   LOAD PORTFOLIO DATA
========================================================= */

const portfolioData = fs.readFileSync(
    path.join(__dirname, "portfolio-data.txt"),
    "utf8"
);


/* =========================================================
   ALL PROJECTS
========================================================= */

const allProjects = [
    "Quiz Bio System",
    "Weather Check App",
    "Story Clone Project",
    "Theme Switcher",
    "Team Git Practice",
    "Task Tracker",
    "Temperature System",
    "Pomodoro Timer",
    "GitHub Repository Finder",
    "Custom Dropdown",
    "Quiz Project"
];


/* =========================================================
   SHORT ANSWERS
========================================================= */

function getShortAnswer(question) {

    const q = question.toLowerCase().trim();


    /* =====================================================
       ALL PROJECTS
    ===================================================== */

    if (
        q.includes("what projects") ||
        q.includes("which projects") ||
        q.includes("projects have you worked") ||
        q.includes("projects did you work") ||
        q.includes("list your projects") ||
        q.includes("show your projects") ||
        q.includes("tell me your projects")
    ) {

        return (
            "I have worked on 11 projects: " +
            allProjects.join(", ") +
            "."
        );
    }


    /* =====================================================
       MAIN FOCUS
    ===================================================== */

    if (
        q.includes("main focus") ||
        q.includes("development area")
    ) {

        return "Web Development.";
    }


    /* =====================================================
       DATABASE
    ===================================================== */

    if (
        q.includes("what database") ||
        q.includes("which database") ||
        q.includes("databases")
    ) {

        return "MongoDB and MongoDB Atlas.";
    }


    /* =====================================================
       INDEPENDENT PROJECT
    ===================================================== */

    if (
        q.includes("independent project") ||
        q.includes("independently")
    ) {

        return "Quiz Bio System.";
    }


    /* =====================================================
       FRONTEND
    ===================================================== */

    if (
        q.includes("frontend technologies") ||
        q.includes("frontend skills")
    ) {

        return "HTML5, CSS3 and JavaScript.";
    }


    /* =====================================================
       BACKEND
    ===================================================== */

    if (
        q.includes("backend technologies") ||
        q.includes("backend skills")
    ) {

        return "Node.js, Express.js and MongoDB.";
    }


    /* =====================================================
       TOOLS
    ===================================================== */

    if (
        q.includes("what tools") ||
        q.includes("tools do i use") ||
        q.includes("development tools")
    ) {

        return "Git, GitHub, GitHub API and VS Code.";
    }


    /* =====================================================
       TOTAL PROJECTS
    ===================================================== */

    if (
        q.includes("how many projects") ||
        q.includes("total projects") ||
        q.includes("number of projects")
    ) {

        return "11 projects.";
    }


    /* =====================================================
       CONTRIBUTION PROJECTS
    ===================================================== */

    if (
        q.includes("how many contributions") ||
        q.includes("contribution projects") ||
        q.includes("how many contribution projects")
    ) {

        return "10 contribution projects.";
    }


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    if (
        q.includes("main technologies") ||
        q.includes("technologies do i use") ||
        q.includes("what technologies") ||
        q.includes("which technologies")
    ) {

        return (
            "HTML, CSS, JavaScript, Node.js, Express, " +
            "MongoDB, Git, GitHub, GitHub API and Face API."
        );
    }


    /* =====================================================
       FACE DETECTION
    ===================================================== */

    if (
        q.includes("face detection") ||
        q.includes("biometric")
    ) {

        return "Quiz Bio System.";
    }


    /* =====================================================
       API
    ===================================================== */

    if (
        q.includes("which project uses api") ||
        q.includes("api project") ||
        q.includes("projects use api")
    ) {

        return "GitHub Repository Finder and Story Clone Project.";
    }


    /* =====================================================
       MONGODB PROJECT
    ===================================================== */

    if (
        q.includes("which project uses mongodb") ||
        q.includes("mongodb project") ||
        q.includes("projects use mongodb")
    ) {

        return "Story Clone Project.";
    }


    return null;
}


/* =========================================================
   PROJECT KEYWORDS
========================================================= */

const projectKeywords = [

    "quiz bio",
    "weather check",
    "weather",
    "story clone",
    "theme switcher",
    "team git",
    "task tracker",
    "temperature",
    "pomodoro",
    "github repository",
    "custom dropdown",
    "quiz project"

];


/* =========================================================
   SEARCH PORTFOLIO
========================================================= */

function searchPortfolio(question) {

    /* =====================================================
       FIRST CHECK PREDEFINED ANSWERS
    ===================================================== */

    const shortAnswer = getShortAnswer(question);

    if (shortAnswer) {

        return [shortAnswer];

    }


    const lowerQuestion = question
        .toLowerCase()
        .trim();


    /* =====================================================
       SPLIT PORTFOLIO INTO SECTIONS
    ===================================================== */

    const sections = portfolioData
        .split(/\n\s*\n/)
        .filter(section => section.trim().length > 0);


    /* =====================================================
       PROJECT SEARCH
    ===================================================== */

    const selectedProject = projectKeywords.find(project =>
        lowerQuestion.includes(project)
    );


    if (selectedProject) {

        const projectResults = sections.filter(section =>
            section
                .toLowerCase()
                .includes(selectedProject)
        );


        if (projectResults.length > 0) {

            return projectResults.slice(0, 2);

        }

    }


    /* =====================================================
       NORMAL SEARCH
    ===================================================== */

    const words = lowerQuestion
        .replace(/[?!.,]/g, "")
        .split(/\s+/)
        .filter(word => word.length > 2);


    const scoredResults = sections.map(section => {

        const text = section.toLowerCase();

        let score = 0;


        words.forEach(word => {

            if (text.includes(word)) {

                score++;

            }

        });


        return {
            section,
            score
        };

    });


    /* =====================================================
       RETURN BEST MATCHES
    ===================================================== */

    const results = scoredResults
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map(item => item.section);


    return results;

}


/* =========================================================
   EXPORT
========================================================= */

module.exports = {
    searchPortfolio
};
