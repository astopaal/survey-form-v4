import React from 'react';
import axios from 'axios';

function AdminLogin() {

    const sendLoginData = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let loginData = {
            username: username,
            password: password,
        }
        axios.post('http://localhost:8080/admin-login', loginData)
            .then((response) => {
                    console.log(response);
                }
            )
    }

    return (
        <div className={"bg-blue-200 min-h-screen flex flex-col items-center p-5"}>
            <h1 className={""}>Admin Login</h1>
            <div className = "mt-5">
                <label>Username : </label>
                <input className={"ml-4 text-lg rounded p-1"} type="text" id="username"/>
            </div>
            <div className = "mt-5">
                <label>Password : </label>
                <input className={"ml-5 text-lg mb-5 rounded p-1"} type="password" id="password"/>
            </div>

            <button
                className={"bg-blue-500 text-white p-2 rounded"}
                onClick={() => {
                    sendLoginData();
                }}
            >
                Login
            </button>
        </div>
    );
}

export default AdminLogin;