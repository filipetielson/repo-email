import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/Screenshot_1.png';
import { Bar } from "../components/Bar";
import { Container, ContainerList } from "./styles";

export function Home() {

  const navigate = useNavigate()

  function handleRedirect(id: string) {
    navigate(`/dashboard/design/new/${id}`)
  }
  return (
    <Container>
      <Bar />

      <h1>Escolha um modelo</h1>
      <ContainerList>
        
        <button onClick={() => handleRedirect('1')}>
          <img src={img1} alt="" />
        </button>

        <button onClick={() => handleRedirect('1')}>
          <img src={img1} alt="" />
        </button>
        <button onClick={() => handleRedirect('1')}>
          <img src={img1} alt="" />
        </button>

        <button onClick={() => handleRedirect('1')}>
          <img src={img1} alt="" />
        </button>
        <button onClick={() => handleRedirect('1')}>
          <img src={img1} alt="" />
        </button>

        <button onClick={() => handleRedirect('1')}>
          <img src={img1} alt="" />
        </button>

      </ContainerList>
    </Container >
  )
}