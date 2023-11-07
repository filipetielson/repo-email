import React, { useRef, useState } from 'react';
import styled from 'styled-components';


import EmailEditor, { EditorRef, EmailEditorProps } from '../../../src'; // use react-email-editor instead
import { HoverMenu } from '../components/HoverMenu';
import { ContainerDiv } from './styles';

import { useNavigate, useParams } from 'react-router-dom';
import { ModalMM } from '../components/ModalMM';
import sample2 from './folder/design (19).json';
import sample3 from './folder/design (20).json';
import sample5 from './folder/design (21).json';
import sample4 from './folder/design (22).json';
import sample from './folder/design.json';
import sample1 from './folder/sample.json';

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
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
    background: #05acc6;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }

  .img1{
    width: 113px;
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

`;



const DesignEdit = () => {
  const emailEditorRef = useRef<EditorRef | null>(null);
  const [preview, setPreview] = useState(false);
  const [jsonData, setJsonData] = useState(null); // Para armazenar os dados do JSON

  const params = useParams()
  const navigate = useNavigate()

  // Função para lidar com a carga do arquivo JSON

  function handleNavigate() {
    navigate('/dashboard/design/new/')
    const confirm = window.confirm('Salve as alterações antes de seguir pra um novo template')
    if (confirm) {
      setJsonData(null)
      window.location.reload();
    }
  }

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
      
      // Crie um elemento de área de texto oculto para copiar o HTML
      const textArea = document.createElement('textarea');
      textArea.value = html;
      
      // Adicione o elemento à árvore do documento
      document.body.appendChild(textArea);
      
      // Selecione o texto no elemento de área de texto
      textArea.select();
      
      // Copie o texto para a área de transferência
      document.execCommand('copy');
      
      // Remova o elemento de área de texto, pois não é mais necessário
      document.body.removeChild(textArea);
      
      alert('HTML copiado para a área de transferência.');
    });
  };

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    console.log('onLoad', unlayer);
    unlayer.addEventListener('design:loaded', onDesignLoad);

    unlayer.loadDesign(jsonData);

    if (params.id == '1') {
      unlayer.loadDesign(sample);
    }

    if (params.id == '2') {
      unlayer.loadDesign(
        sample1
      );
    }
    if (params.id == '3') {
      unlayer.loadDesign(
        sample2
      );
    }
    if (params.id == '4') {
      unlayer.loadDesign(
        sample3
      );
      }
    if (params.id  == '5') {
      unlayer.loadDesign(
        sample4
      );
    }
    if (params.id  == '6') {
      unlayer.loadDesign(
        sample5
      );
    }
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    console.log('onReady', unlayer);
  };

const [isTrue, setIsTrue] = useState(false)

function handleTogle(){
  setIsTrue(!isTrue)
}

function handleRedirect(id: string) {
  navigate(`/dashboard/design/new/${id}`)
  window.location.reload()
}

  return (
    <Container>

      <Bar >
        <div>
          <h2>Editor templates</h2>
          <p>version 1.0.0</p>
        </div>

          
        <ContainerDiv>
            <input id="file" style={{ display: 'none' }} type="file" accept=".json" onChange={handleFileUpload} />
          <button className='ll' onClick={handleTogle}> Temas</button>
          <HoverMenu>
            <label htmlFor="file">Carregar template</label>
            <button onClick={saveToJsonFile}>Baixar template</button>
            <button onClick={handleNavigate}>Novo template</button>
            <button onClick={exportHtml}>Exportar HTML</button>
          </HoverMenu>

          <button className='ll' onClick={togglePreview}>
            {preview ? 'Ocultar' : 'Mostrar'} Visualização
          </button>
        </ContainerDiv>
        <ModalMM isTrue={isTrue} handleTogle={handleTogle} handleRedirect={ handleRedirect} />
      </Bar>
     

      <React.StrictMode>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </React.StrictMode>
    </Container>
  );
};

export default DesignEdit;
