document.addEventListener("DOMContentLoaded", function () {
    // Experience Data
    const experienceData = {
        iConsult: {
            title: "Data Analyst | iConsult Collaborative",
            duration: "Aug 2024 – Present",
            details: [
                "Performed data validation and cleaning to ensure accuracy for operational reporting.",
                "Automated workflows, improving efficiency and reducing manual efforts.",
                "Developed dashboards using Power BI and Tableau for 50+ stakeholders.",
                "Provided actionable insights through advanced data visualization.",
                "Enhanced data accessibility, streamlining decision-making processes."
            ],
            skills: "Power BI, Tableau, Excel, SQL, EDA"
        },
        Accenture: {
            title: "Cloud Data Analyst | Accenture",
            duration: "Feb 2022 – July 2023",
            details: [
                "Optimized Azure SQL databases, improving query performance by 30%.",
                "Implemented data storage and recovery strategies using Azure Blob Storage.",
                "Integrated Salesforce with Databricks for efficient CRM workflows.",
                "Configured Azure Active Directory and Firewall for enhanced security.",
                "Led server updates for McAfee and Amcore, reducing security risks."
            ],
            skills: "Azure SQL, Databricks, Salesforce, Azure Blob Storage"
        },
        HCL: {
            title: "Analyst | HCL Technologies",
            duration: "Oct 2020 – Feb 2022",
            details: [
                "Configured and maintained network infrastructure, optimizing performance.",
                "Implemented advanced firewall rules and VPN setups for security.",
                "Automated reporting using SQL Server and Salesforce integration.",
                "Developed robust ETL pipelines, improving efficiency by 20%.",
                "Created Power BI and Tableau dashboards for real-time data insights."
            ],
            skills: "SQL Server, ETL, Power BI, Salesforce, Python"
        }
    };

    // Projects Data
    const projectData = {
        SentimentAnalysis: {
            title: "Sentiment Analysis on Movie Reviews",
            duration: "Dec 2024 – Jan 2025",
            details: [
                "Classified movie review phrases into sentiment categories using NLP techniques.",
                "Utilized advanced preprocessing (tokenization, stopword removal, negation handling).",
                "Engineered features using Bag-of-Words, bigrams, and sentiment lexicons.",
                "Implemented machine learning models (Logistic Regression, Naïve Bayes, Gradient Boosting).",
                "Achieved 62% accuracy, optimizing models using precision, recall, and cross-validation."
            ],
            skills: "Python, NLP, Scikit-Learn, Sentiment Analysis"
        },
        RecipeSharing: {
            title: "Recipe Sharing Platform",
            duration: "Oct 2024 – Dec 2024",
            details: [
                "Designed a cloud-based online recipe-sharing platform with personalized recommendations.",
                "Developed secure authentication for users and interactive UI for recipe exploration.",
                "Leveraged Azure and AWS services for high-performance storage and scalability.",
                "Created interactive dashboards using Power BI for analyzing recipe popularity.",
                "Integrated Power Apps with Azure SQL Database for seamless data interactions."
            ],
            skills: "Azure SQL, AWS, Power BI, Power Apps, Blob Storage"
        },
        DataWarehouse: {
            title: "Data Warehouse for Chinook Dataset",
            duration: "Feb 2024 – May 2024",
            details: [
                "Transformed the Chinook dataset into a Snowflake data warehouse.",
                "Designed and implemented ETL pipelines using dbt for efficient data processing.",
                "Developed a dimensional model to enhance data querying and reporting.",
                "Created Power BI dashboards to provide actionable insights from the data warehouse.",
                "Applied Kimball methodology for optimal data storage and retrieval performance."
            ],
            skills: "Snowflake, dbt, ETL, Power BI, Data Warehousing"
        },
        EnergyAnalysis: {
            title: "Energy Consumption Analysis with Shiny App",
            duration: "Jan 2024 – Apr 2024",
            details: [
                "Built predictive models for energy usage variations due to global warming.",
                "Developed interactive dashboards in R Shiny for data visualization.",
                "Created regression models with 90.25% accuracy and MAPE of 14.25%.",
                "Analyzed high-consumption zones and provided energy-saving recommendations.",
                "Proposed demand reduction strategies such as solar power integration."
            ],
            skills: "R, Shiny App, Linear Regression, Predictive Modeling, Data Visualization"
        },
        KitchenChronicle: {
            title: "Kitchen Chronicle",
            duration: "Oct 2023 – Dec 2023",
            details: [
                "Engineered a comprehensive food database management system for recipe discovery.",
                "Implemented a unique rating system to highlight top-rated cuisines.",
                "Designed personalized recommendations using user behavior analytics.",
                "Developed interactive Power BI dashboards for user engagement analysis.",
                "Integrated SQL-based database management for efficient data handling."
            ],
            skills: "SQL, Power Apps, Power BI, Database Management, Azure"
        },
        StudyBuddy: {
            title: "Study Buddy Matching System",
            duration: "Aug 2023 – Nov 2023",
            details: [
                "Designed a system to match students based on courses and study habits.",
                "Developed a matching algorithm to pair students effectively.",
                "Implemented real-time chat functionality and scheduling tools.",
                "Created an administrative dashboard for managing user data.",
                "Built a relational database (E-R Model) to handle study session data."
            ],
            skills: "SQL, E-R Diagrams, UI Design, Microsoft Project, Wireframing"
        }
    };

    // Experience Section Interaction
    document.querySelectorAll(".experience-btn").forEach(button => {
        button.addEventListener("click", function () {
            const experienceId = this.getAttribute("data-experience");
            if (experienceData[experienceId]) {
                document.getElementById("experience-title").textContent = experienceData[experienceId].title;
                document.getElementById("experience-duration").textContent = experienceData[experienceId].duration;
                document.getElementById("experience-details").innerHTML = experienceData[experienceId].details.map(detail => `<li>${detail}</li>`).join("");
                document.getElementById("experience-skills").innerHTML = `<strong>Skills:</strong> ${experienceData[experienceId].skills}`;
                document.getElementById("experience-display").style.display = "block";
            }
        });
    });

    // Projects Section Interaction
    document.querySelectorAll(".project-btn").forEach(button => {
        button.addEventListener("click", function () {
            const projectId = this.getAttribute("data-project");
            if (projectData[projectId]) {
                document.getElementById("project-title").textContent = projectData[projectId].title;
                document.getElementById("project-description").textContent = projectData[projectId].duration;
                document.getElementById("project-details").innerHTML = projectData[projectId].details.map(detail => `<li>${detail}</li>`).join("");
                document.getElementById("project-skills").innerHTML = `<strong>Skills:</strong> ${projectData[projectId].skills}`;
                document.getElementById("project-display").style.display = "block";
            }
        });
    });
});
