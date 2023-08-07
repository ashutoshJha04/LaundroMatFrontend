import { createGlobalStyle } from "styled-components";
import '../App.css'

 const GlobalStyle = createGlobalStyle `

*{
    margin : 0;
    padding : 0;
    box-sizing: 'border-box';
    font-family:



}

html{
    font-size:62.5%;
   
    overflow-x : hidden:
}
h1{
    color:${({theme})=>theme.colors.heading};
    font-size:6rem;
    font-weight:900;
    white-space:normal;
    // text-align:center;
}
h2{
    color:${({theme})=>theme.colors.heading};
    font-size:4.4rem;
    font-weight:300;
    white-space:normal;
    // text-align:center;
}
h3{
    color:${({theme})=>theme.colors.heading};
    font-size:1.8rem;
    font-weight:400;
    white-space:normal;
    // text-align:center;
}
p{
    color:${({theme})=>theme.colors.text};
    opacity:.7;
    font-size:1.65rem;
   margin-top:1rem;
    white-space:normal;
    // text-align:center;
}

a{
    text-decoration:none;
}
li{
    list-style:none;
}
.active{
    // border:2px solid black;
    border-bottom:2px solid blue;

    
}
.container{
    max-width:120rem;
    margin:0 auto ;
}
.grid{
    display:grid;
    gap:9rem;
}
.grid-two-column{
    grid-template-columns:repeat(2,1fr);
}
.grid-three-column{
    grid-template-columns:repeat(3,1fr);
}
.grid-four-column{
    grid-template-columns:repeat(4,1fr);
}
.center{
    display:flex;
    
    align-items:center;
    justify-content:center;
}
.m-auto{
    margin:auto;
    margin-top:4rem;
    margin-bottom:4rem;
}
`;


export default GlobalStyle;