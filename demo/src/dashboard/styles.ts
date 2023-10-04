import styled, { keyframes } from "styled-components";

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

export const ContainerDiv = styled.div`
    display: flex;

    animation: ${fadeMM} 2.5s ;
    transition:
    opacity 0.4s ,
    visibility 0.4s ;
`