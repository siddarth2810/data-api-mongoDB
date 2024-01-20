import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Import JSON data directly in a React component
        const postData = await import('../postData.json');
        
        // Define the fetch parameters
        const fetchParams = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        };

        // Make the fetch request
        const response = await fetch('https://asia-south1.gcp.data.mongodb-api.com/app/application-0-adzlt/endpoint/createData', fetchParams);

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect once on component mount

  return <div>My React Component</div>;
};

export default MyComponent;
