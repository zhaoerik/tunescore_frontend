import React, { useState } from 'react';
import styled from 'styled-components'

const Quiz = ({ question, options, selected, album, image, track, artist }) => {

  const [answer, setAnswer] = useState(options);
  const [selectedAnswer, setSelectedAnswer] = useState();

  return (
    <ParentDiv>
      <AlbumContainer className="questionBox">
        <br />
        <AlbumImage alt={album} src={image} /> <br />
        <b>{album}</b> <br />
        <b>{track}</b> <br />
        <b>{artist}</b> <br />
      </AlbumContainer>
      <QuestionContainer>
        <Question className="question"><b>{question}...</b></Question>
        {answer && answer.map((text, index) => (
          <Button
            key={index}
            className="answerBtn"
            onClick={() => {
              setAnswer();
              setSelectedAnswer(text);
              selected(text);
            }}> ...{text}
          </Button>
        ))}
        {selectedAnswer &&
          <SelectAnswer>{selectedAnswer}</SelectAnswer>
        }
      </QuestionContainer>
    </ParentDiv>
  )
}

export default Quiz;

const ParentDiv = styled.div`
  display: flex
`

const AlbumImage = styled.img`
  height: 310px;
  width: 310px;
`

const Button = styled.button`
    padding: 10px;
    background-color: #0b40ff;
    display: inline-block;
    margin: 10px;
    outline: none;
    border: none;
    font-size: 1em;
    color: rgb(255, 255, 255);
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    width: 50%;
`

const AlbumContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 24%;
`

const Question = styled.div`
    height: 50px;
    width: 100%;
    margin-top: 2%;
    flexDirection: column;
    display: flex;
    margin-left: 1%;
`

const SelectAnswer = styled.p`
  position: relative;
  padding: 10px;
  background-color: #0b40ff;
  display: inline-block;
  margin: 10px;
  outline: none;
  border: none;
  font-size: 1em;
  color: rgb(255, 255, 255);
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  width: 50%;
`

const QuestionContainer = styled.div`
  display: flex;
  flex: 3;
  padding: 10px;
  flex-direction: column;
`