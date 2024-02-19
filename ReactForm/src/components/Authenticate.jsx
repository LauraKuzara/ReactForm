import React from 'react';

export default function Authenticate({ userData }) {
return (
    <div>
    <h2>Authenticated!</h2>
    {userData && <p>Welcome, {userData.username}!</p>}
    </div>
);
}