import styled from "styled-components";

export const Button = styled.button`

padding:1.4rem 2.4rem;
border:none;
text-transform:uppercase;
text-align:center;
background-color:rgb(98,84,243);
color:rgb(255,255,255);
cursor:pointer;
text-decoration:none;
max-width:auto;
margin-top:4rem;
transition:all 0.3s ease;
    &:hover,&:active{
        transform:scale(0.96);
    }

    a{
        font-size:1.8rem;
        color:rgb(255,255,255);
    }


`;
