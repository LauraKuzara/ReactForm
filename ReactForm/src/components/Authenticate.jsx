import React, { useState, useEffect } from 'react'

export default function Authenticate({ token }) {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleClick = async () => {
        try {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            },
        });
        const result = await response.json();
          setUserData(result.data); // Assuming the username is in the data property
        setSuccessMessage(result.message);
        } catch (error) {
        setError(error.message);
        }
    };
    
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            });
            const result = await response.json();
            setUserData(result.data); // Assuming the username is in the data property
            setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }
        }
    
        if (token) {
        fetchData();
        }
    }, [token]);
    
    return (
        <>
        <div>
            <h2>Authenticated!</h2>
            {userData && <p>Welcome, {userData.username}!</p>}
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Button</button>
        </div>
        </>
    );
    }