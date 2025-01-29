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
