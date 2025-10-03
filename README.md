The pipeline consists of 10 distinct stages, each designed to automate a critical step in the application lifecycle:
1.	Checkout – Clones the repository and ensures a clean workspace.
2.	Build – Installs dependencies and creates a production-ready artifact.
3.	Test – Runs automated tests using Jest.
4.	Code Quality – Performs linting checks via ESLint.
5.	Security – Conducts security audit using npm audit.
6.	Archive Artifact – Archives the artifact for deployment and tracking.
7.	Deploy (Staging) – Deploys the application to a staging environment with health verification.
8.	Release (Production) – Deploys the application to production with automated health checks and process management.
9.	Monitoring & Alerting – Performs health checks for both staging and production and ensures monitoring.
10.	Final Summary / Email Notification – Sends a consolidated email report summarizing the status of all stages.
Each stage includes success/failure handling and is fully automated, ensuring a reliable CI/CD process from code commit to production release.

Note - In "Jekins Pipeline Script.txt" contains the inline pipeline script for the task. 
Hope this project was informative and insightufl :)
