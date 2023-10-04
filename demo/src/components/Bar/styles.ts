import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  
  border-bottom: 1px solid #cbc6c657;
  box-shadow: -2px -14px 22px black;

  div{
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  h2{
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: #00000087;
  }

  button{
    padding: 0px 10px;
    border: none;
    height: 40px;
    display: flex;
    align-items: center;
    
    background: #05acc6;
  
    border-radius: 5px;
    align-items: center;
    justify-content: center;

      cursor: pointer;
      transition: all 1s ;

      &:hover{
        background: #0398af
      }

h1{
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 14px;
      color: white;
      
}
    }

  img{
    width: 80px;
  }

  p{
    border: 1px solid rgb(135 140 150);;
    border-radius: 18px;
    padding: 3px 6px;

    font-size: 13px;
    color: rgb(135 140 150);;
  }
`