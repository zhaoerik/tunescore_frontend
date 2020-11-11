import React from 'react';
import styled from 'styled-components'

const background = "https://scontent.xx.fbcdn.net/v/t1.15752-9/124451064_804211567038963_7655467644087937261_n.png?_nc_cat=104&ccb=2&_nc_sid=58c789&_nc_ohc=25CcLOsL3F8AX-uX5Ok&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=58e1993df9082c5c9087670648721ec7&oe=5FCF3D63"

const Result = (props) => {

    return (
        <>
    <Background alt="" src={background} />
        <br/>
        <br/>
        <br/>
        <br/>
        <Div>
            <h1>You scored {props.score} 🎉</h1>
            <h1>Check your Profile to see if you have a new badge! </h1>
        </Div>
        </>
    )
}
export default Result;

const Background = styled.img`
    filter: brightness(50%);
    width: 110%;
    height: 105%;
    z-index: -1;
    position: absolute;
    top: -13px;
`

const Div = styled.div`
    background-color: white;
    text-align: center;
`