import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import EmailEditor, { EditorRef, EmailEditorProps } from '../../../src'; // use react-email-editor instead
import img1 from '../assets/logo-plugoo.png';
import { copyToClipboard } from '../components/CopyToClipboard';
import { HoverMenu } from '../components/HoverMenu';
import { ContainerDiv } from '../dashboard/styles';
import sample from './sample.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #ffffff;
  color: #000;
  padding: 10px 30px;
  display: flex;
  max-height: 40px;
  justify-content: space-between;
  border-bottom: 1px solid #d7d6d6;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  li.szh-menu__item.sc-gswNZR.wwBVH {
    padding: 0px;
  }

 


  button {
   
    padding: 2px 10px;
    font-size: 14px;
    font-weight: bold;
    background: none;
    color: #000;
    background: none;
    border: 5px;
    width: 100%;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    

    a{
      text-decoration: none;
      color: #000;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  li.szh-menu__item.sc-gswNZR.wwBVH {
    width: 170px;
    justify-content: space-around;
    display: flex;
}

  .ll  {
    flex: 1;
    padding: 2px 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background: #54cce5;
    color: white;
    border-radius: 5px;
    max-width: 150px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }

  .img1{
    width: 113px;
  }
`;

const Example = () => {
  const emailEditorRef = useRef<EditorRef | null>(null);
  const [preview, setPreview] = useState(false);



  const saveToJsonFile = () => {
    const unlayer = emailEditorRef.current?.editor;

    if (unlayer) {
      unlayer.saveDesign((design) => {
        const jsonString = JSON.stringify(design, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'design.json';
        a.click();
        URL.revokeObjectURL(url);
      });
    } else {
      console.error('Editor não encontrado para salvar.');
    }
  };


  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml((data) => {
      const { design, html } = data;

      copyToClipboard(html);
      alert('Html copiado.');
    });
  };


  const togglePreview = () => {
    const unlayer = emailEditorRef.current?.editor;

    if (preview) {
      unlayer?.hidePreview();
      setPreview(false);
    } else {
      unlayer?.showPreview('desktop');
      setPreview(true);
    }
  };

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    console.log('onLoad', unlayer);
    unlayer.addEventListener('design:loaded', onDesignLoad);
    unlayer.loadDesign(sample);
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    console.log('onReady', unlayer);
  };

  return (
    <Container>
      <Bar>

       <img src={img1} alt="" className='img1'/>

       <ContainerDiv>
        <HoverMenu>
          <button onClick={saveToJsonFile}>Baixar Projeto</button>
          <button>
            <Link to={`/dashboard/design/new`}>Novo Projeto</Link>
          </button>
        </HoverMenu>
        <button className='ll' onClick={togglePreview}>
          {preview ? 'Ocultar': 'Mostrar'} Visualização
        </button>
        </ContainerDiv>
      </Bar>


      <React.StrictMode>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </React.StrictMode>
    </Container>
  );
};


export default Example;
