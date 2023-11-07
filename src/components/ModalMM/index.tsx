import React from "react";
import img1 from '../../assets/Screenshot_1.png';
import img2 from '../../assets/Screenshot_2.png';
import img3 from '../../assets/Screenshot_3.png';
import img4 from '../../assets/Screenshot_4.png';
import img5 from '../../assets/Screenshot_5.png';
import img6 from '../../assets/Screenshot_6.png';
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
            <img src={img2} alt="" />
          </button>

          <button className="m" onClick={() => handleId('2')}>
            <img src={img1} alt="" />
          </button>

          <button className="m" onClick={() => handleId('3')}>
            <img src={img3} alt="" />
          </button>

          <button className="m" onClick={() => handleId('4')}>
            <img src={img4} alt="" />
          </button>
          <button className="m" onClick={() => handleId('5')}>
            <img src={img6} alt="" />
          </button>
          <button className="m" onClick={() => handleId('6')}>
            <img src={img5} alt="" />
          </button>
        </div>

      </ContainerDiv>
    </ContainerModal>
  )
}