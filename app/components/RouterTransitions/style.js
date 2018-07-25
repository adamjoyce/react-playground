import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Panel = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  right: 0;
`;

export const NavBar = styled.ul`
  display: flex;
  height: 40px;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const NavItem = styled.li`
  flex: 1;
  list-style-type: none;
  padding: 10px;
  text-align: center;
`;

export const ColorPanel = styled.div`
  bottom: 0;
  box-sizing: border-box;
  color: white;
  font-size: 30px;
  left: 0;
  padding-top: 20px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ColorPanelWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  text-align: center;
  top: 40px;
  right: 0;
`;
