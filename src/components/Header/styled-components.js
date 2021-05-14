import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const LinkItem = styled(Link)`
  align-self: center;
  margin: 0 10px;
  color: #001A23;
  text-decoration: none;
  outline: none;

  &:hover {
    border-bottom: 2px solid #9DD9D2;
  }
`;
