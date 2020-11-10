import React from 'react';
import styled from 'styled-components';

const Search = props => {
    return (
        <Input onChange={props.onChange} placeholder="  Search for Album"/>
    )
}

export default Search;

const Input = styled.input`
    margin-top: 7%;
    margin-left: 47px;
    width: 15%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url('https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/124048444_1530701030450263_2229707172482289313_n.png?_nc_cat=107&ccb=2&_nc_sid=58c789&_nc_ohc=EMPF8jdHF-kAX_SMTfc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4d72ea684e8fac0ab3ec0cbea9cefabc&oe=5FCFB806');
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    &:focus {
        width: 25%;
      }
`
