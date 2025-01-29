document.addEventListener("DOMContentLoaded", function () {
    const experienceData = {
        iConsult: {
            title: "Data Analyst | iConsult Collaborative",
            duration: "Aug 2024 – Present",
            details: [
                "Performed data validation and cleaning to ensure accuracy and reliability for operational reporting and product development.",
                "Automated workflows and optimized reporting processes, reducing manual effort and improving efficiency.",
                "Developed dashboards using Tableau and Power BI for 50+ stakeholders.",
                "Provided actionable insights through dynamic and customizable visualizations.",
                "Streamlined decision-making processes for operational success."
            ]
        },
        Accenture: {
            title: "Cloud Data Analyst | Accenture",
            duration: "Feb 2022 – July 2023",
            details: [
                "Streamlined data storage and processing for 1,000+ users with Azure cloud infrastructure.",
                "Optimized Azure SQL databases, achieving 30% faster retrieval and ensuring application availability.",
                "Managed datasets with Azure Blob Storage, enabling advanced analysis and visualization.",
                "Integrated Salesforce with Databricks for improved CRM workflows.",
                "Implemented Azure Firewall and NSGs for enhanced security compliance."
            ]
        },
        HCL: {
            title: "Analyst | HCL Technologies",
            duration: "Oct 2020 - Feb 2022",
            details: [
                "Configured and maintained critical routers, switches, VLANs, and subnetting.",
                "Implemented advanced firewall rules, VPN setups, and intrusion prevention systems.",
                "Automated detailed reports integrating Salesforce and SAP with SQL Server.",
                "Developed robust ETL pipelines, boosting operational efficiency by 20%.",
                "Created Power BI and Tableau dashboards for real-time data insights."
            ]
        }
    };

    const experienceButtons = document.querySelectorAll(".experience-btn");
    const experienceDisplay = document.getElementById("experience-display");
    const experienceTitle = document.getElementById("experience-title");
    const experienceDuration = document.getElementById("experience-duration");
    const experienceDetails = document.getElementById("experience-details");

    experienceButtons.forEach(button => {
        button.addEventListener("click", function () {
            const experienceKey = this.getAttribute("data-experience");
            const data = experienceData[experienceKey];

            experienceTitle.textContent = data.title;
            experienceDuration.textContent = data.duration;
            experienceDetails.innerHTML = data.details.map(point => `<li>${point}</li>`).join("");

            experienceDisplay.style.display = "block";
        });
    });
});
