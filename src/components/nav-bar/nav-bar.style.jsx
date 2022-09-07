import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  margin-bottom: 70px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:hover{
    filter: invert(80%);
  }
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  padding: 20px;
  width: 100px;
  border: none;
  background-color: inherit;
  color: black;
  text-decoration:none;

  &:hover {
    /* background-color: black;
    color: white; */
    filter: invert(100%);
  }
`;
