import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'


function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e  => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email,password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message)) 

    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>

        <div className="login__container">
            <h1>Sign-in</h1>

            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn}
                 className='login__signInButton'>Sign In</button>

                <p>
                By signing in you agree to AMAZON-CLONE_FAKE DEVELOPED BY "Krishnadev" condition of use and sale.Please see our privacy notice,
                our cookies notice and our interest based ad notice.
                </p>

                <button  onClick={register}
                className="login__registerBtn">create your amazon account</button>

            </form>

        </div>

        </div>
    )
}

export default Login
