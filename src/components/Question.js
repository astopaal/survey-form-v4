import React from 'react';
import {useState} from 'react';
import fs from 'fs';

const Question = () => {

    const [questions, setquestions] = useState([]);

    const addQuestion = () => {
        const newQuestion = {
            id: questions.length + 1,
            question: '',
            answers: [],
        };
        setquestions([...questions, newQuestion]);
    }

    const addAnswer = (questionId) => {
        const newAnswer = {
            id: (String(questionId) + "-" + String(Number(questions[questionId - 1].answers.length) + 1)),
            qid: questionId,
            answer: '',
        };

        const newQuestions = questions.map((question) => {
            if (question.id === questionId) {
                question.answers?.push(newAnswer);
            }
            return question;
        });
        setquestions(newQuestions);
    }

    const deleteAnswer = (questionId, answerId) => {
        const newQuestions = questions.map((question) => {
            if (question.id === questionId) {
                question.answers = question.answers.filter((answer) => answer.id !== answerId);
            }
            return question;
        });
        setquestions(newQuestions);
    }

    const deleteQuestion = (questionId) => {
        const newQuestions = questions.filter((question) => question.id !== questionId);
        setquestions(newQuestions);
    }

    const saveSurveyForm = () => {
        let questionsData = questions;

        questionsData.map((question, index) => {

            question.question = document.getElementById(String(index+1)).value;
            question.answers?.map((answer, index2) => {
                answer.answer = document.getElementById("answer-" + String(index+1) +"-"+ String(index2+1)).value;
            })
        })

        console.log(JSON.parse(JSON.stringify(questionsData)));


    }

    return (
        <div className="bg-blue-400 flex flex-col items-center p-5 h-screen">
            <h1 className="h1 font-bold text-lg text-gray-900">ANKET OLUŞTUR</h1>
            <button id="btn-question-ekle"
                    className=" bg-green-700 hover:bg-green-900 text-white font-bold w-36 py-2 rounded focus:outline-none transition duration-500 focus:shadow-outline"
                    onClick={() => {
                        addQuestion();
                    }}>
                Soru Ekle
            </button>
            <div>
                {questions?.map((question) => (
                    <div
                        className=" flex flex-col shadow-lg bg-white mt-5 shadow-gray-700/100 rounded p-5 mb-5 transition ease-in-out delay-500"
                        key={question.id}>

                        <div
                            className="flex flex-row items-center bg-blue-400 shadow-lg shadow-gray-700/100 rounded p-2 mb-5">
                            <input
                                className="shadow appearance-none border border-white-200 rounded w-full mt-3 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                id={question.id}
                                name="question"
                                placeholder="Soru içeriğini girin..."
                            />

                            <button
                                id="btn-cevap-ekle"
                                className="bg-blue-500 transition duration-500 hover:bg-blue-700 text-white font-bold w-36 py-2 ml-5 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => {
                                    addAnswer(question.id);
                                    console.log(questions)
                                }
                                }>
                                Cevap Ekle
                            </button>

                            <button
                                id="btn-delete-question"
                                className="bg-red-500 hover:bg-red-700 transition duration-500 text-white font-bold w-32 py-2 ml-5 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => {
                                    deleteQuestion(question.id);
                                }}
                            >
                                Soru Sil
                            </button>

                        </div>
                        <div className="shadow shadow-outline shadow-gray-700 m-5 p-3 bg-blue-400">
                            {/* cevapları gösteren inputlar */}

                            {question.answers.length !== 0 ? question.answers?.map((answer) => (
                                <div key={answer.id}>
                                    <div>
                                        <input
                                            placeholder="Cevap girin..."
                                            className="shadow appearance-none p-1 border border-white-200 rounded w-96 text-l mb-1 mt-1"
                                            type="text"
                                            id={"answer-" + answer.id}
                                            name="answer"
                                        />
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white w-12 transition duration-500 ml-5 rounded focus:outline-none focus:shadow-outline"
                                            id="btn-cevap-sil" onClick={() => {
                                            deleteAnswer(question.id, answer.id);
                                        }}>
                                            Sil
                                        </button>
                                    </div>

                                </div>

                            )) : <h1 className="text-white font-bold">Cevap Ekleyin</h1>}

                        </div>
                    </div>

                ))}
            </div>
            <button

                className="bg-purple-500 hover:bg-purple-700 transition mt-3 ease-in-out duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                id="btn-anket-kaydet"
                onClick={() => {
                    saveSurveyForm();
                }}
            >
                Anketi Kaydet
            </button>
        </div>

    );
};

export default Question;
