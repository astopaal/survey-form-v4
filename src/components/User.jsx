import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";

function User() {

    const [questions, setQuestions] = useState([]);

    const handleSubmit  = () => {

    }

    useEffect(() => {

        try {
            axios.get("http://localhost:8080/question_data").then((response) => {
                let data = response.data;
                setQuestions(Object.values(data));
            })

        } catch (err) {
            console.error("HATA MESAJI : " + err.message);

        }

    }, []);

    return (
        <form
            onSubmit={handleSubmit}
            className="container bg-blue-200 min-h-screen min-w-full flex flex-col items-center">
            <h1 className="text-lg font-bold mb-5">SORULAR</h1>

            {questions[0]?.map((question, index) => (
                <div key={index} className="bg-blue-500 rounded mb-5">
                    <div className="question p-4">
                        <label className="question-text font-bold text-l p-2 bg-blue-200 border border-white border-solid rounded">
                             Soru {index+1} :  {question.question}
                        </label>
                        <div className="question-answers flex flex-col p-2 bg-red-200 mt-5 rounded border-white border-lg border">
                            {question.answers?.map((answer, index2) => (
                                <label key={index2} className="flex text-l font-regular">
                                    <input className="mr-1 " type="radio" name={question.id} value={answer.id}/>
                                    {answer.answer}
                                </label>
                            ))}
                        </div>
                    </div>

                </div>
            ))}

        </form>
    )
};
export default User;