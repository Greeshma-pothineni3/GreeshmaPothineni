document.addEventListener("DOMContentLoaded", function () {
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
            duration: "Oct 2020 - Feb 2022",
            details: [
                "Managed network configurations, including VLANs, routers, and subnetting.",
                "Implemented advanced firewall security and intrusion prevention systems.",
                "Built ETL pipelines and automated SQL-based reporting.",
                "Developed Power BI dashboards for real-time business intelligence.",
                "Enhanced cloud security protocols and risk management."
            ],
            skills: "Azure Cloud, SQL Server, Python, ETL, Power BI"
        }
    };

    function handleClick(data, titleId, detailsId, skillsId, displayId) {
        document.getElementById(titleId).textContent = data.title;
        document.getElementById(detailsId).innerHTML = data.details.map(point => `<li>${point}</li>`).join("");
        document.getElementById(skillsId).textContent = data.skills;
        document.getElementById(displayId).style.display = "block";
    }

    document.querySelectorAll(".experience-btn").forEach(button =>
        button.addEventListener("click", () => handleClick(experienceData[button.dataset.experience], "experience-title", "experience-details", "experience-skills", "experience-display")));
});
