import { Menu, MenuButton, useMenuState } from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';

import React, { useRef } from "react";

import { Container, MenuItem } from "./styles";

export const HoverMenu = ({ children }) => {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });

  return (
    <Container>
      <Menu menuButton={<MenuButton style={{color:'white'}}> Menu </MenuButton>}
       transition 
       direction='bottom'
       align='center'
       position='anchor'
       gap={10}
       viewScroll='initial'
       arrow={true}
       >
        {children.map((child, index) => (
          <MenuItem key={index}>{child}</MenuItem>
        ))}
      </Menu>


    </Container>
  );
};