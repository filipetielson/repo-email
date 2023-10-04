import styled, { keyframes } from "styled-components";

const fadeMM = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`


export const Container = styled.div`
margin: auto;

animation: ${fadeMM} 1.3s ;
  transition:
    opacity 0.4s ,
    visibility 0.4s ;

  h1{
    font-family: 'Poppins', sans-serif;
    padding: 10px 30px;
    color: #474646;
  }
`

export const ContainerList = styled.div`
gap: 3rem;
display: flex;
flex-wrap: wrap;
padding: 10px 30px;

animation: ${fadeMM} 1.3s ;
  transition:
    opacity 0.6s ,
    visibility 0.6s ;



  button{
    display: flex;
    flex-direction: column;
    border: 1px solid #e1e1e1;
    padding: 0;
    border-radius: 10px;
    width: 14rem;
      height: 20rem;
      cursor: pointer;

    background: none;
    gap: 1rem;

    transition: transform .3s ;

    img{
      width: 14rem;
      height: 20rem;
      border-radius: 10px;
    }
    
  &:hover{
  transform: scale(1.1);
  }}


`

