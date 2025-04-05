import React, { useContext, useState } from 'react';
import Usercontext from '../context/provider';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(Usercontext)

    const handleeSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>

            <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='username'/>
            <input   value={password} onChange={(e)=> setPassword(e.target.value)} type="text" placeholder='password'/>
            <button onClick={handleeSubmit}>Submit</button>
        </div>
    );
}

export default Login;
