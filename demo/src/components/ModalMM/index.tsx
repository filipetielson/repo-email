import React from "react";
import img1 from '../../assets/Screenshot_1.png';
import { ContainerDiv, ContainerModal } from "./styles";


interface ModalProps {
  isTrue: boolean
  handleTogle: () => void
  handleRedirect: (id: string) => void
}

export function ModalMM({ isTrue, handleTogle, handleRedirect }: ModalProps) {

  function handleId(id: string) {
    handleRedirect(id);
  }

  return (
    <ContainerModal {...{ isTrue }}>
      <ContainerDiv>
        <button className="button" onClick={handleTogle}>
          x
        </button>
        
        <div>

          <button className="m" onClick={() => handleId('1')}>
            <img src={img1} alt="" />
          </button>

          <button className="m" onClick={() => handleId('2')}>
            <img src={img1} alt="" />
          </button>

          <button className="m" onClick={() => handleId('1')}>
            <img src={img1} alt="" />
          </button>

          <button className="m" onClick={() => handleId('2')}>
            <img src={img1} alt="" />
          </button>
          <button className="m" onClick={() => handleId('1')}>
            <img src={img1} alt="" />
          </button>

          <button className="m" onClick={() => handleId('2')}>
            <img src={img1} alt="" />
          </button>
        </div>

      </ContainerDiv>
    </ContainerModal>
  )
}