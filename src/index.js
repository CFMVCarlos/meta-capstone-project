import React from "react"; // Importing React library to build components
import ReactDOM from "react-dom/client"; // Importing the ReactDOM library to render the app into the DOM
import App from "./App"; // Importing the App component, which is the main component of the app
import "./index.css"; // Importing the global CSS file for styling the app
import reportWebVitals from "./reportWebVitals"; // Importing the web vitals report function to measure app performance

// Creating a root element where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component inside the root element, wrapped in React.StrictMode
// React.StrictMode helps identify potential problems in the app during development
root.render(
  <React.StrictMode>
    <App /> {/* App is the root component of the app */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, you can pass a function
// to log results (for example: reportWebVitals(console.log)) or send the results to an analytics endpoint.
// reportWebVitals is a utility function to measure app performance and display important metrics.
reportWebVitals();
