import { useState } from 'react'



export default function SignUpForm(setToken) {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.length < 8 || password.length < 8) {
            setError('Username and password must be at least 8 characters long.');
            return;
        }

        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
            { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json" 
            }, 
            body: JSON.stringify({ 
                username: "some-username", 
                password: "super-secret-999" 
            }) 
            })
            const result = await response.json();
            setToken(result.token)
        }
        catch (error) {
            setError(error.message);
        }
    }


    return ( 
    <> <h2> Sign Up!</h2>

    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
        <label>
        Username: <input value= {username} onChange={(event) => setUserName(event.target.value)}/> 
        </label>
        <label>
        Password: <input value = {password} onChange={(event) => setPassword(event.target.value)}/> 
        </label>
        <label>
        <button> Submit</button>
        </label>
    </form>
    </>
    )
} 
