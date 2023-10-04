import styled, { keyframes } from 'styled-components';

type IsTruetype = {
  isTrue: boolean
}

const fadeMM = keyframes`
  from {
    opacity: 0;
    transform: translateY(-150px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const ContainerModal = styled.div<IsTruetype>`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000a1;
    left: 0;
    top: 0;

    animation: ${fadeMM} 2.5s ;
    transition:
    opacity 0.4s ,
    visibility 0.4s ;

    display: flex;
    align-items: center;
    justify-content: center;
    
    opacity: ${(props) => props.isTrue === true  ? '1' : '0'} !important;
    visibility: ${(props) => props.isTrue === true  ? 'visible' : 'hidden'} !important;

    

    .button{
    position: relative;
    left: 650px;
    top: -243px;
    width: 35px;
    height: 35px;

  font-size: 1.2rem;
    }

`

export const ContainerDiv = styled.div`

div{
  margin: auto;
background: #ffff;
width: 40rem;
flex-wrap: wrap;
justify-content: center;
padding: 50px 10px;

border-radius: 5px;
border: 1px solid #000000b5;
gap: 25px !important;
}




.m {
    display: flex;
    flex-direction: column;
    border: 1px solid #e1e1e1;
    padding: 0;
    border-radius: 3px;
    width: 10rem;
    height: 13rem;
    cursor: pointer;

    background: none;

    transition: transform .3s ;

    img{
      width: 10rem;
      height: 13rem;
      border-radius: 3px;
    }
    
  &:hover{
  transform: scale(1.1);
  }}
`
