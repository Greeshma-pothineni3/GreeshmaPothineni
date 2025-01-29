const experienceData = {
    iConsult: {
        title: "Data Analyst | iConsult Collaborative",
        duration: "Aug 2024 – Present",
        details: [
            "Performed data validation and cleaning for operational reporting.",
            "Automated workflows and optimized reporting processes.",
            "Developed dashboards using Tableau and Power BI for 50+ stakeholders.",
            "Provided actionable insights through data visualization.",
            "Streamlined decision-making processes."
        ],
        skills: ["Excel", "Power BI", "Tableau", "EDA"]
    },
    Accenture: {
        title: "Cloud Data Analyst | Accenture",
        duration: "Feb 2022 – July 2023",
        details: [
            "Optimized Azure cloud storage for enterprise applications.",
            "Developed dashboards and analytics pipelines.",
            "Integrated Salesforce with Databricks for real-time insights.",
            "Managed Azure Active Directory security measures.",
            "Implemented performance optimization strategies."
        ],
        skills: ["Azure", "SQL", "Salesforce", "Databricks"]
    },
    HCL: {
        title: "Analyst | HCL Technologies",
        duration: "Oct 2020 - Feb 2022",
        details: [
            "Managed cloud storage and SQL database administration.",
            "Developed Power BI dashboards to enhance business insights.",
            "Built ETL pipelines for data processing and automation.",
            "Optimized data storage for better performance.",
            "Designed predictive models using machine learning techniques."
        ],
        skills: ["Python", "SQL", "ETL", "Power BI", "Data Analysis"]
    }
};

const projectData = {
    SentimentAnalysis: {
        title: "Sentiment Analysis on Movie Reviews",
        description: "Conducted sentiment analysis on Rotten Tomatoes reviews to classify sentiments.",
        details: [
            "Preprocessed movie review data including tokenization and stopword removal.",
            "Implemented NLP models like Logistic Regression and Naïve Bayes.",
            "Engineered features such as Bag-of-Words and sentiment lexicons.",
            "Achieved an accuracy of 62% using Gradient Boosting.",
            "Evaluated models using precision, recall, and cross-validation."
        ],
        skills: ["NLP", "Python", "NLTK", "Scikit-Learn", "Machine Learning"]
    },
    RecipeSharing: {
        title: "Recipe Sharing Platform",
        description: "Developed a cloud-based platform for users to share and explore recipes.",
        details: [
            "Built a scalable backend using AWS EC2 and S3 for image storage.",
            "Implemented Azure Blob Storage for efficient data handling.",
            "Designed an intuitive user interface for recipe exploration.",
            "Integrated Power Apps for seamless user interactions.",
            "Created interactive visualizations to track user engagement."
        ],
        skills: ["Azure SQL", "AWS S3", "Power BI", "Microsoft Power Apps", "Data Analytics"]
    },
    DataWarehouse: {
        title: "Data Warehouse for Chinook Dataset",
        description: "Transformed the Chinook dataset into a Snowflake-based data warehouse.",
        details: [
            "Designed dimensional models to optimize data storage.",
            "Implemented ETL workflows using dbt for data processing.",
            "Created interactive Power BI dashboards for insights.",
            "Improved data accessibility and retrieval efficiency.",
            "Applied Kimball methodology for better data structuring."
        ],
        skills: ["SQL", "Snowflake", "dbt", "ETL", "Power BI"]
    },
    EnergyAnalysis: {
        title: "Energy Consumption Analysis and Prediction",
        description: "Developed predictive models for energy consumption using R Shiny.",
        details: [
            "Collected and cleaned large-scale energy usage data.",
            "Built linear regression models achieving 90.25% accuracy.",
            "Created interactive dashboards to visualize energy trends.",
            "Conducted demand analysis for energy-saving recommendations.",
            "Developed a Shiny web application for stakeholders."
        ],
        skills: ["R", "Shiny", "Data Cleaning", "Linear Regression", "Predictive Modeling"]
    },
    KitchenChronicle: {
        title: "Kitchen Chronicle",
        description: "Developed a food database management system for recipe exploration.",
        details: [
            "Engineered a SQL-powered database for storing recipes.",
            "Implemented user rating features to highlight best dishes.",
            "Conducted data analytics to identify popular cuisines.",
            "Built a Power BI dashboard for recipe insights.",
            "Integrated Power Apps for interactive user engagement."
        ],
        skills: ["SQL", "Power BI", "Microsoft Power Apps", "Data Analysis", "Azure"]
    },
    StudyBuddy: {
        title: "Study Buddy Matching System",
        description: "Designed a system to match students for study sessions at Syracuse University.",
        details: [
            "Developed a matching algorithm based on study preferences.",
            "Implemented real-time scheduling and chat features.",
            "Designed an entity-relationship (E-R) model for data management.",
            "Built interactive dashboards for administrative use.",
            "Created UI wireframes to enhance user experience."
        ],
        skills: ["SQL", "ER Diagrams", "Microsoft Project", "UI Design", "Data Modeling"]
    }
};

// Event Listeners for Experience
document.querySelectorAll(".experience-btn").forEach(button => {
    button.addEventListener("click", function () {
        const data = experienceData[this.dataset.experience];
        document.getElementById("experience-title").textContent = data.title;
        document.getElementById("experience-duration").textContent = data.duration;
        document.getElementById("experience-details").innerHTML = data.details.map(item => `<li>${item}</li>`).join("");
        document.getElementById("experience-skills").innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join("");
        document.getElementById("experience-display").style.display = "block";
    });
});

// Event Listeners for Projects
document.querySelectorAll(".project-btn").forEach(button => {
    button.addEventListener("click", function () {
        const data = projectData[this.dataset.project];
        document.getElementById("project-title").textContent = data.title;
        document.getElementById("project-description").textContent = data.description;
        document.getElementById("project-details").innerHTML = data.details.map(item => `<li>${item}</li>`).join("");
        document.getElementById("project-skills").innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join("");
        document.getElementById("project-display").style.display = "block";
    });
});
