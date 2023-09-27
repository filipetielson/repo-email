import { Menu, MenuButton, useMenuState } from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import React, { useRef } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Container, MenuItem } from "./styles";

export const HoverMenu = ({ children }) => {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });

  return (
    <Container>
      <Menu menuButton={<MenuButton style={{color:'white'}}> Menu <MdKeyboardArrowDown /> </MenuButton>} transition >
        {children.map((child, index) => (
          <MenuItem key={index}>{child}</MenuItem>
        ))}
      </Menu>


    </Container>
  );
};