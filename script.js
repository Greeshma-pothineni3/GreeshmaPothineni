document.addEventListener("DOMContentLoaded", function () {
    const experienceData = {
        iConsult: {
            title: "Data Analyst | iConsult Collaborative",
            duration: "Aug 2024 – Present",
            details: [
                "Performed data validation and cleaning to ensure accuracy and reliability for operational reporting and product development.",
                "Automated workflows and optimized reporting processes, reducing manual effort and improving efficiency.",
                "Developed dashboards using Tableau and Power BI, enhancing departmental planning and data accessibility for 50+ stakeholders.",
                "Provided actionable insights through dynamic and customizable visualizations, streamlining decision-making."
            ]
        },
        Accenture: {
            title: "Cloud Data Analyst | Accenture",
            duration: "Feb 2022 – July 2023",
            details: [
                "Streamlined data storage and processing for 1,000+ users with Azure cloud infrastructure.",
                "Optimized Azure SQL databases, achieving 30% faster retrieval and ensuring application availability.",
                "Managed datasets with Azure Blob Storage and implemented recovery strategies with Azure Backup.",
                "Integrated Salesforce with Databricks, improving lead tracking accuracy and enabling scalable reporting solutions.",
                "Deployed network security groups (NSGs) and Azure Firewall rules, protecting resources and maintaining compliance."
            ]
        },
        HCL: {
            title: "Analyst | HCL Technologies",
            duration: "Oct 2020 - Feb 2022",
            details: [
                "Configured and maintained critical routers, switches, VLANs, and subnetting, ensuring efficient data flow.",
                "Implemented advanced firewall rules, VPN setups, and intrusion prevention systems to reduce security risks.",
                "Automated detailed reports by integrating Salesforce and SAP with SQL Server.",
                "Built robust ETL pipelines, reducing manual effort and improving operational efficiency by 20%.",
                "Created Power BI and Tableau dashboards to analyze data trends and generate actionable insights."
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

            if (data) {
                experienceTitle.textContent = data.title;
                experienceDuration.textContent = data.duration;
                experienceDetails.innerHTML = data.details.map(point => `<li>${point}</li>`).join("");
                experienceDisplay.style.display = "block";
            }
        });
    });
});
