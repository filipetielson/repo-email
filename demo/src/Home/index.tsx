import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/Screenshot_1.png';
import img2 from '../assets/Screenshot_2.png';
import img3 from '../assets/Screenshot_3.png';
import img4 from '../assets/Screenshot_4.png';
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
          <img src={img2} alt="" />
        </button>

        <button onClick={() => handleRedirect('2')}>
          <img src={img1} alt="" />
        </button>
        <button onClick={() => handleRedirect('3')}>
          <img src={img3} alt="" />
        </button>

        <button onClick={() => handleRedirect('4')}>
          <img src={img4} alt="" />
        </button>
      </ContainerList>
    </Container >
  )
}