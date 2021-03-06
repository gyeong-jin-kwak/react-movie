import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';
// withRouter : router의 정보를 가져옴

const Header = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  align-items: center;
  color: white;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 80px;
  height: 50px
  text-align: center;
  border-bottom: 5px solid ${props => props.current ? "#3498db" : "transparent"};
  transition: border-bottom 0.5s ease-in-out;
`;
const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    {/* {console.log(props)} */}
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname ==="/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));