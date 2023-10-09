import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Bar() {

  const navigate = useNavigate()

  function handleNavigate(){
    navigate('/dashboard/design/new')
  }
  return (
    <Container >
      <div>
        <h2>Editor templates</h2>
        <p>version 1.0.0</p>
      </div>

      <button onClick={handleNavigate}>
      <h1>Novo projeto</h1>
      </button>
    </Container>
  )
}