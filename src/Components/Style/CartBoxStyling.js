import styled from 'styled-components';
const CartBoxContainer = styled.div`
display:${props=>props.Displayed.IsOpen?"block":"none"};
position:fixed;
max-height:500px;
min-width:250px;
max-width:350px;
background-color:#f39c12; 
right:20px;
border:3px solid black;
border-radius:7px;
border-top-right-radius:0;
padding:20px;
`
const ItemTitle = styled.td`
color:#c0392b;
font-weight:750;
padding:2px;
`
const ItemValue = styled.td`
color:white;
`
const ItemDelBtn = styled.button`
padding:7px;
background-color:#e74c3c;
color:white;
border:none;
border-radius:4px;
`
const AlertNoItems = styled.h1`
margin: 0;
margin-left: 27px;
color:white;
text-align:center;
font-size:15px;
`
export {CartBoxContainer,ItemTitle,ItemValue,ItemDelBtn,AlertNoItems};