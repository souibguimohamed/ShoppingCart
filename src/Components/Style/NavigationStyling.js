import styled from 'styled-components';
import {Link} from 'react-router-dom';
const NavContainer = styled.div`
min-height:100px;
background-color:#27ae60;
`
const Title = styled(Link)`
text-decoration:none;
font-size:35px;
font-weight:700;
margin:0; 
padding-top: 30px;
padding-left: 40px;
color:#c0392b;
display:inline-block; 
`
export {NavContainer,Title};