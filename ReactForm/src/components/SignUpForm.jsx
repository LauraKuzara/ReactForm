import { useState } from 'react'



export default function SignUpForm() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Unicorns")

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
            console.log(result);
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
            <input value= {username} onChange={(event) => setUserName(event.target.value)}/> Username:
        </label>
        <label>
            <input value = {password} onChange={(event) => setPassword(event.target.value)}/> Password:
        </label>
        <label>
        <button> Submit</button>
        </label>
    </form>
    </>
    )
} 
