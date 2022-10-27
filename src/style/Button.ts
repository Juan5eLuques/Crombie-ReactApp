import styled from "styled-components";

export const Button = styled.button`
background-color : ${props => props.color};
height: 30px;
width: 150px;
transition : scale 1000ms;
border: none;
border-radius: 10px;
:hover {
scale: 1.03;
}
cursor: pointer;
`
