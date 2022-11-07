import React, {useState} from 'react';
import axios from 'axios';

function AddAdmin() {

    const saveNewAdmin = () => {

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let password_again = document.getElementById('password-again').value;
        let email = document.getElementById('e-mail').value;

        let newAdmin = {
            username: username,
            password: password,
            password_again: password_again,
            email: email,
        }

        axios.post("http://localhost:8080/add_admin", newAdmin)
            .then((response) => {
                    console.log(response);
                }
            )
    }

    return (
        <div className={"container bg-blue-200 min-h-screen flex flex-col items-center min-w-full"}>
            <div>
                <h1 className={"text-2xl font-bold"}>Admin Ekle</h1>
            </div>
            <div className={"flex flex-col"}>
                <label className={"text-lg font-bold"}>Kullanıcı Adı</label>
                <input id='username' className={"border border-gray-300 rounded p-2"}/>
            </div>
            <div className={"flex flex-col"}>
                <label className={"text-lg font-bold"}>Şifre</label>
                <input id='password' className={"border border-gray-300 rounded p-2"}/>
            </div>
            <div className={"flex flex-col"}>
                <label className={"text-lg font-bold"}>Şifre Tekrar</label>
                <input id='password-again' className={"border border-gray-300 rounded p-2"}/>
            </div>
            <div className={"flex flex-col"}>
                <label className={"text-lg font-bold"}>E-Posta</label>
                <input id='e-mail' className={"border border-gray-300 rounded p-2"}/>
            </div>
            <div className={"flex flex-col"}>
                <button
                    type="submit"
                    className="bg-green-400 text-white p-2 rounded-lg mt-5"
                    onClick={() => {
                        saveNewAdmin();
                    }}
                >
                    Kaydet
                </button>
            </div>

        </div>
    );
}

export default AddAdmin;