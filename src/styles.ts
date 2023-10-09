import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  #editor-2 {
    height: 100%;

  }
  iframe {
    width: 100%;
    height: 100%;

    body {
      
      #editor{
        a {
          display: none !important;
        }
        
        .blockbuilder-branding {
          display: none !important;
        }
      }

    }
  }
`;
