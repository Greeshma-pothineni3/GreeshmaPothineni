document.addEventListener("DOMContentLoaded", function () {
    // Experience Section
    const experiences = {
        "iConsult": {
            title: "Data Analyst | iConsult Collaborative",
            duration: "Aug 2024 – Present | Syracuse, NY",
            details: [
                "Developed automated workflows and dashboards in Power BI and Tableau, reducing manual reporting efforts.",
                "Enhanced stakeholder decision-making by improving data accessibility and visualization for 50+ users.",
                "Optimized ETL processes to ensure high data accuracy and consistency.",
                "Analyzed large datasets to generate insights that improved business strategies.",
                "Worked with SQL databases to extract, transform, and load (ETL) data efficiently."
            ],
            skills: ["SQL", "Power BI", "Tableau", "ETL"]
        },
        "Accenture": {
            title: "Cloud Data Analyst | Accenture",
            duration: "Jan 2023 – Jul 2024",
            details: [
                "Migrated enterprise data to Azure-based cloud storage.",
                "Automated reporting pipelines using Python and SQL.",
                "Optimized query performance for large datasets.",
                "Developed dashboards for real-time business intelligence.",
                "Collaborated on cloud security best practices."
            ],
            skills: ["Azure", "SQL", "Python", "Data Engineering"]
        },
        "HCL": {
            title: "Analyst | HCL Technologies",
            duration: "Jul 2021 – Dec 2022",
            details: [
                "Led data analysis projects, improving efficiency by 20%.",
                "Built predictive models to forecast business trends.",
                "Developed ETL workflows to automate data integration.",
                "Implemented database performance tuning strategies.",
                "Collaborated with cross-functional teams to optimize data solutions."
            ],
            skills: ["Data Analysis", "ETL", "SQL", "Python"]
        }
    };

    const experienceButtons = document.querySelectorAll(".experience-btn");
    const experienceTitle = document.getElementById("experience-title");
    const experienceDuration = document.getElementById("experience-duration");
    const experienceDetails = document.getElementById("experience-details");
    const experienceSkills = document.getElementById("experience-skills");
    const experienceDisplay = document.getElementById("experience-display");

    experienceButtons.forEach(button => {
        button.addEventListener("click", function () {
            const experienceKey = this.getAttribute("data-experience");
            const experience = experiences[experienceKey];

            experienceTitle.innerText = experience.title;
            experienceDuration.innerText = experience.duration;
            experienceDetails.innerHTML = experience.details.map(point => `<li>${point}</li>`).join("");
            experienceSkills.innerHTML = experience.skills.map(skill => `<span class="badge bg-primary me-2">${skill}</span>`).join("");

            experienceDisplay.style.display = "block";
        });
    });

    // Projects Section
    const projects = {
        "SentimentAnalysis": {
            title: "Sentiment Analysis on Movie Reviews",
            description: "A project analyzing Rotten Tomatoes reviews to classify sentiment.",
            details: [
                "Used NLP techniques like tokenization and sentiment lexicons (AFINN, LIWC).",
                "Implemented machine learning models: Logistic Regression, Naïve Bayes, and Gradient Boosting.",
                "Achieved 62% accuracy using Logistic Regression.",
                "Addressed class imbalance and sparse data challenges.",
                "Evaluated model performance using precision, recall, and F1-score."
            ],
            skills: ["Python", "NLP", "Scikit-Learn", "Machine Learning"]
        },
        "RecipeSharing": {
            title: "Recipe Sharing Platform",
            description: "A cloud-based online recipe-sharing platform with personalized recommendations.",
            details: [
                "Developed a scalable cloud-based architecture integrating AWS and Azure.",
                "Implemented personalized recipe recommendations based on user interaction.",
                "Used Power BI for data visualization of recipe trends.",
                "Designed a user-friendly interface with Azure SQL Database integration.",
                "Optimized backend with EC2 and S3 for performance."
            ],
            skills: ["AWS", "Azure", "Power BI", "SQL"]
        },
        "DataWarehouse": {
            title: "Data Warehouse for Chinook Dataset",
            description: "A project transforming the Chinook dataset into a data warehouse.",
            details: [
                "Designed a dimensional model using Kimball methodology.",
                "Developed ETL pipelines using dbt for Snowflake integration.",
                "Implemented Power BI dashboards for business analytics.",
                "Ensured efficient data storage and retrieval strategies.",
                "Improved data accessibility and analytical capabilities."
            ],
            skills: ["Snowflake", "ETL", "Power BI", "dbt"]
        },
        "EnergyAnalysis": {
            title: "Energy Consumption Analysis",
            description: "A predictive model for energy usage trends with an interactive Shiny app.",
            details: [
                "Developed a linear regression model with 90.25% R² accuracy.",
                "Implemented dashboards for energy-saving insights.",
                "Conducted demand analysis for high-consumption zones.",
                "Proposed strategies for energy efficiency optimization.",
                "Built an interactive Shiny app for real-time data visualization."
            ],
            skills: ["R", "Shiny", "Predictive Modeling", "Data Visualization"]
        }
    };

    const projectButtons = document.querySelectorAll(".project-btn");
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");
    const projectDetails = document.getElementById("project-details");
    const projectSkills = document.getElementById("project-skills");
    const projectDisplay = document.getElementById("project-display");

    projectButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectKey = this.getAttribute("data-project");
            const project = projects[projectKey];

            projectTitle.innerText = project.title;
            projectDescription.innerText = project.description;
            projectDetails.innerHTML = project.details.map(point => `<li>${point}</li>`).join("");
            projectSkills.innerHTML = project.skills.map(skill => `<span class="badge bg-success me-2">${skill}</span>`).join("");

            projectDisplay.style.display = "block";
        });
    });
});
