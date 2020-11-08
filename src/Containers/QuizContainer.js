import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Quiz from '../Components/Quiz';
import QuizArray from '../Components/QuizApi'
import Result from '../Components/Result';

const USER_URL = "http://localhost:3000/users/"

const QuizContainer = (props) => {

    const [quizQuestion, setQuizQuestion] = useState([]);
    const [score, setScore] = useState(5);
    const [responses, setResponses] = useState(0);

    const getQuestions = () => {
        let questionBank = QuizArray.map(question => ({sort: Math.random(), value: question})).sort((question1, question2) => question1.sort - question2.sort).map((question => question.value))

        // questionBank.map((lyric, choices, answer, id) => console.log(id))
        return (
            questionBank.slice(0, 5)
        )
    }

    useEffect(() => {
        let questionBank = getQuestions()
        setQuizQuestion(questionBank)
    }, [])

    const computeAnswer = (answer, correctAns) => {
        if (answer === correctAns) {
            console.log('i am correct')
            //setScore(score + 1)
        }
        setResponses(responses < 5 ? responses + 1 : 5)
    }

    useEffect(() => {
        if (responses === 5) {
            props.updateBadge(score, props.user.id)
        }
        
    //     if (responses === 5 ) {
    //         if (score === 5) {
    //         fetch(USER_URL + `${props.user.id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "content-type": "application/json",
    //                 "accepts": "application/json"
    //             },
    //             body: JSON.stringify({badge: "Master"})
    //     })
    //     } else if (score === 4) {
    //         fetch(USER_URL + `${props.user.id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "content-type": "application/json",
    //                 "accepts": "application/json"
    //             },
    //             body: JSON.stringify({badge: "Advanced"})
    // })}}
    }, [responses, score])

    return (
        // props.user ?
        <>
            <h1>Lyric Game</h1>
            {quizQuestion.length > 0 && responses < 5 && quizQuestion.map((question) => <Quiz question={question.lyric} key={question.id} options={question.choices} selected={choice => computeAnswer(choice, question.answer)} />)}
            {responses ===  5 ? <Result score={score}/> : null}        
        </>
        // :
        // <Redirect to='/login' />
    )
}

export default QuizContainer;