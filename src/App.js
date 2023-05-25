import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="title">Deploying React App to S3 and CloudFront</h1>
      <p className="description">
        Welcome to my project! I have developed a React application and automated its deployment process using GitHub Actions.
      </p>
      <p className="description">
        The app is deployed to Amazon S3, a scalable and secure object storage service, which allows for efficient content delivery. To further optimize performance and enable fast global distribution, I have set up CloudFront, a content delivery network (CDN) provided by AWS.
      </p>
      <p className="description">
        The deployment is automated using GitHub Actions. Whenever changes are pushed to the main branch of the repository, the GitHub Actions workflow triggers a build process that generates a production-ready version of the React app. This build is then uploaded to an S3 bucket and distributed via CloudFront, ensuring that the latest version of the app is accessible to users worldwide.
      </p>
      <p className="description">
        This streamlined deployment process enables efficient updates, scalability, and enhanced user experience for the React app.
      </p>
    </div>
  );
}

export default App;
