import styled from 'styled-components';
const Thumbnail = styled.img`
margin-top:20px;
margin-left:35%;
width:600px;
border-radius:5px;
border:5px #c0392b solid;
height:auto;
`
const ItemInfos = styled.div`
background-color:#ecf0f1;
padding:10px;
text-align:center;
`
const ProductName = styled.h1`
margin:0;
color:#27ae60;
`
const ProductPrice =styled.h2`
margin:0;
color:#f1c40f;
`
const ProductStock = styled.h3`
font-size:25px;
margin:0;
color:#2980b9;
`
const ItemContact =styled.div`
text-align:center;
`
const ContactTitle = styled.h1`
margin:0;
background-color:#8e44ad;
padding:5px;
margin-bottom:10px;
`
const ContactDetails =styled.p`
margin:0;
padding:1px;
`

export {Thumbnail,ItemInfos,ItemContact,ProductName,ProductPrice,ProductStock,ContactTitle,ContactDetails};