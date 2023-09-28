import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import EmailEditor, { EditorRef, EmailEditorProps } from '../../../src'; // use react-email-editor instead
import img1 from '../assets/logo-plugoo.png';
import { HoverMenu } from '../components/HoverMenu';
import { ContainerDiv } from './styles';

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
  padding: 10px 32px;
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
    width: 200px;
    justify-content: space-around;
    display: flex;
}



  li.szh-menu__item.sc-gswNZR.wwBVH {
    padding: 0px;
}

label{
  color: #000;
  font-size: 14px;
    font-weight: bold;
    background: none;
    color: #000;

    height: 36px;
    display: flex;
    align-items: center;

    cursor: pointer;
}
  button {
   
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    background: none;
    color: #000;
    background: none;
    border: 5px;
    width: 100%;
    cursor: pointer;
    justify-content: center;
    

    a{
      text-decoration: none;
      color: #000;
      display: flex;
      justify-content: center;
    }
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
    align-items: center;
    justify-content: center;
  }

  .img1{
    width: 113px;
  }
`;



const DesignEdit = () => {
  const emailEditorRef = useRef<EditorRef | null>(null);
  const [preview, setPreview] = useState(false);
  const [jsonData, setJsonData] = useState(null); // Para armazenar os dados do JSON

  // Função para lidar com a carga do arquivo JSON
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonString = e.target.result;
        try {
          const jsonData = JSON.parse(jsonString);
          setJsonData(jsonData); // Atualize o estado com os dados do JSON
          emailEditorRef.current?.editor.loadDesign(jsonData); // Carregue os dados no editor
        } catch (error) {
          console.error('Erro ao analisar o arquivo JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  // Função para salvar os dados como um arquivo JSON
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

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.saveDesign((design) => {
      console.log('saveDesign', design);
      alert('Design JSON has been logged in your developer console.');
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

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { html } = data;
      console.log('exportHtml', html);
      alert('Output HTML has been logged in your developer console.');
    });
  };

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    console.log('onLoad', unlayer);
    unlayer.addEventListener('design:loaded', onDesignLoad);
    unlayer.loadDesign(jsonData);
  };

  console.log(onload)

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    console.log('onReady', unlayer);
  };



  return (
    <Container>
      <Bar>
        <img src={img1} alt="" className='img1' />

        <ContainerDiv>
          <HoverMenu>

            <label htmlFor="file">Carregar projeto</label>
            <input id="file" style={{ display: 'none' }} type="file" accept=".json" onChange={handleFileUpload} />
            <button onClick={saveToJsonFile}>Baixar projeto</button>
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

export default DesignEdit;
