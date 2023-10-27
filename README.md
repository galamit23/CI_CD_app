# Learning CI/CD with React Single-Page App

This project is a React single-page application that may not have essential content, but it serves as a valuable learning experience for Continuous Integration and Continuous Deployment (CI/CD) processes. The project showcases how to automatically deploy web applications, and the associated GitHub Actions workflow automates the deployment when changes are pushed to the main branch.

## Key Learning Points

- **Technology Stack:** This project is built with React, and it's intentionally kept minimal to focus on CI/CD learning.

- **GitHub Actions Workflow (workflow.yml):** The workflow is defined in `.github/workflows/workflow.yml`. It is triggered on every push to the `main` branch and performs several essential CI/CD steps:

  1. **Set up Environment:** The workflow runs on an Ubuntu-based runner.
  
  2. **Configure AWS Credentials:** AWS credentials are configured using GitHub secrets for secure access to AWS services.

  3. **Build React App:** The React application is built by installing dependencies and running the build script.

  4. **Deploy to S3:** The deployment step syncs the contents of the `./build` directory to an S3 bucket.

  5. **Invalidate Cache:** After deployment, the workflow creates a cache invalidation for AWS CloudFront, ensuring that the latest content is served to users.

## Learning CI/CD

This project is your first step in understanding the world of Continuous Integration and Continuous Deployment. Here are some key takeaways:

- Automating Deployment: You've learned how to automate the deployment process, reducing manual intervention and ensuring that your web application is always up to date.

- CI/CD Workflow: The workflow file demonstrates how to set up a CI/CD pipeline with GitHub Actions, including environment setup, AWS credential management, building the application, and deploying it.

- Collaboration: CI/CD allows for easier collaboration with team members and ensures that changes are delivered efficiently to your audience.

## How to Use

To leverage this project for your learning journey, follow these steps:

1. Clone this repository to your local machine.

2. Customize the React single-page application as needed.

3. Set up an S3 bucket on AWS to host your web application.

4. Create AWS IAM credentials with access to the S3 bucket. Store these credentials as GitHub secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION`.

5. Push changes to the `main` branch to trigger the automatic deployment workflow.

The GitHub Actions workflow will handle the rest, building and deploying your web application to the specified S3 bucket.

## Questions or Collaboration

If you have questions or would like to collaborate, feel free to reach out:

- Email: gal0688@gmail.com
- LinkedIn: https://www.linkedin.com/in/gal-amit-6945a9257/
