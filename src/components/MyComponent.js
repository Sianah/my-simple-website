import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log('Fetching data from API...');
        fetch('http://localhost:8000/api/hello/')
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setMessage(data.message);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Welcome to My Simple Website</h1>
            <p>{message}</p>
        </div>
    );
};

export default MyComponent;


