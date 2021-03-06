import styled from 'styled-components';
import {Link} from 'react-router-dom';
const ItemContainer = styled.div`
display:inline-block;
padding: 9px;
margin:8px;
min-height:245px;
min-width: 245px;
background-color:#2ecc71;
border-radius:5px;
`
const Thumbnail= styled.img`
width: 245px;
height: auto;
border-radius:9px;
`
const ProductName = styled.h3`
color:white;
margin:0;
font-size:27px; 
text-align:center;
text-decoration:none!important;
`
const ProductPrice=styled.h2`
color: #c0392b;
margin:0;
text-align:center;
text-decoration:none!important;
`
const AddToCartBtn=styled.button`
padding:7px;
margin-top:5px;
margin-left:82px;
background-color:#f1c40f;
color:white;
border:none;
border-radius:4px;
`
const LinkBox = styled(Link)`
text-decoration:none;
`

export {ItemContainer,Thumbnail,ProductName,ProductPrice,AddToCartBtn,LinkBox};