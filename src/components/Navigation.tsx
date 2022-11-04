import { BiCircle, BiLeftArrow, BiSquareRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 10px;
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;

  a {
    all: unset;
    cursor: pointer;
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Link to="/">
        <BiCircle />
      </Link>
      <Link to="/">
        <BiSquareRounded />
      </Link>
      <Link to={-1 as any}>
        <BiLeftArrow />
      </Link>
    </StyledNav>
  );
};

export default Navigation;
