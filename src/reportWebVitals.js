// Function to measure and report web performance metrics
const reportWebVitals = (onPerfEntry) => {
  // Check if the onPerfEntry function is provided and is a valid function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library to get the performance metrics
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each web vitals function with the provided onPerfEntry function to log the metrics
      getCLS(onPerfEntry); // Cumulative Layout Shift (CLS) - measures visual stability
      getFID(onPerfEntry); // First Input Delay (FID) - measures interaction latency
      getFCP(onPerfEntry); // First Contentful Paint (FCP) - measures render speed
      getLCP(onPerfEntry); // Largest Contentful Paint (LCP) - measures loading performance
      getTTFB(onPerfEntry); // Time to First Byte (TTFB) - measures server response time
    });
  }
};

// Export the function to be used elsewhere in the app
export default reportWebVitals;
