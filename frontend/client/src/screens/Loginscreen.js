import React, { useState } from 'react'
import axios from 'axios';
import Loader from "../components/Loader";
import Error from "../components/Error";

function Loginscreen() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

    async function login() {

        const user = {
            email, password
        }
        try {
            setloading(true)
            const result = (await axios.post('/api/users/login', user)).data
            setloading(false)
            localStorage.setItem('currentUser', JSON.stringify(result))
            window.location.href = '/home'
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(true)
        }

    }


    return (
        <div>
            {loading && (<Loader />)}


            <div className="row justify-content-center mt-5">
                <div className="col-md-5">

                    <div className='bs'>
                        {error && (<Error message="Invalid username or password" />)}
                        <h2>Login</h2>
                        <input type="email" className="form-control mt-2" placeholder='Enter Email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="password" className="form-control mt-2" placeholder='Enter Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />

                        <button className='btn btn-primary mt-3' onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginscreen