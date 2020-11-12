import React, { useEffect, useState } from 'react';
import Quiz from '../Components/Quiz';
import QuizArray from '../Components/QuizApi'
import Result from '../Components/Result';
import styled from 'styled-components'

const USER_URL = "http://localhost:3000/users/"

const QuizContainer = (props) => {

    const [quizQuestion, setQuizQuestion] = useState([]);
    const [score, setScore] = useState(0);
    const [responses, setResponses] = useState(0);

    const getQuestions = () => {
        let questionBank = QuizArray.map(question => ({sort: Math.random(), value: question})).sort((question1, question2) => question1.sort - question2.sort).map((question => question.value))
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
            // console.log('i am correct')
            setScore(score + 1)
        }
        setResponses(responses < 5 ? responses + 1 : 5)
    }

    useEffect(() => {
        if (responses === 5) {
            props.updateBadge(score, props.user.id)
        }
        
    }, [responses, score])

    return (
        <>
        <Div>
            <LyricGame>Lyric Game</LyricGame>
            <Subtitle>Finish the lyrics for a chance to earn a new badge!</Subtitle>
        </Div>
            {quizQuestion.length > 0 && responses < 5 && quizQuestion.map((question) => <Quiz question={question.lyric} key={question.id} options={question.choices} selected={choice => computeAnswer(choice, question.answer)} album={question.album} track={question.track} image={question.image} artist={question.artist} />)}
            {responses ===  5 ? <Result user={props.user} score={score}/> : null}        
        </>
    )
}

export default QuizContainer;

const LyricGame = styled.h1`
    margin-top: 7%;
    margin-bottom: 1%;
    backgroud-color: white;
    text-align: center;
`

const Subtitle = styled.h2`
    text-align: center;   
    margin-bottom: 3%;
`

const Div = styled.div`
    background-color: white;
    text-align: center;
    padding-top: .5%;
    padding-bottom: .5%;
`