import React,{useState} from 'react';
import './Login.css';
import {Button} from '@mui/material'
import {auth,provider} from './firebase'

export default function Login(){
    // const []
     const signIn=() => {
         auth.signInWithPopup(provider).then(result => )
     };

    return (
        <div className="login">
            <div className="login_container">
            <img src="https://i.pinimg.com/564x/92/4f/3c/924f3c760e37afd50a342b7903cfc0e6.jpg"
                alt="WhatsApp Logo" />
                <div class="login_text">
                    <h1>Sign in to use WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign In With Google </Button>
        </div>
        </div>
    )
}
