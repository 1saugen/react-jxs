import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'

const user ={
    firstname : 'Saugen',
    lastname : 'Chaudhary'
}

function formatName(user){
    return user.firstname + " " + user.lastname;
}

function getGreeting(user){
    if(user){
        return <h1>Hello {formatName(user)}</h1>
    }
    return <h1>Hello Stranger</h1>
}



const element= getGreeting(user);


ReactDOM.render(element,document.getElementById('root'));