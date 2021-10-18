import React from "react";
import styled from "styled-components";

export const NavWrapper = styled.div`
  font-size: 22px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
  .top {
    justify-content: space-between;
    background-color: #8b2269;
    padding: 0 2em;
  }
  .bt > p {
    padding-right: 1em;
  }
  .bt {
    background-color: white;
    padding: 0 2em;
  }
`;

export default function Navbar() {
  return (
    <NavWrapper>
      <div className="top">
        <p>Lynn Care,</p>
        <p> Daily Record</p>
      </div>
      <div className="bt">
        <p>James</p>
        <p>James</p>
        <p>James</p>
      </div>
    </NavWrapper>
  );
}
