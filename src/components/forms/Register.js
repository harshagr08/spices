import React from 'react';
import axios from 'axios';
export default class Register extends React.Component {
    render() {
        return (
            <div>
                
                <form onSubmit={(e)=>register(e)}>
                Name:<input type="text" id="name"/><br/>
                Email:<input type="email" id="email" /><br/>
                Password:<input type="text" id="password" /><br/>
                Phone:<input type="number"id="phone" /><br/>
                <button type="submit">button</button>
                </form>
            </div>
        );
    }
}

function register(e){
    e.preventDefault();
    let request={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        phone:document.getElementById('phone').value,
    }
    axios.post('http://localhost:3000/signup',request)
    .then(res=>{
        console.log("record inserted");
    })
    .catch(err=>{
        console.log(err);
    })
}