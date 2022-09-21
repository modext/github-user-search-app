import styled from "styled-components";
import Inputs from "./Inputs";
import LightMode from "./LightMode";
import Title from "./Title";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2.4rem 1.6rem 2.4rem;
  @media (min-width: 1440px) {
    margin: 0 0 3.6rem 0;
  }
`;
const AppHeader = styled.header`
  @media (min-width: 768px) {
    margin: 1rem 9.8rem 1.8rem 9.7rem;
  }
  @media (min-width: 1440px) {
    margin: 1.4rem 35.5rem 1.8rem 35.5rem;
    width: 51%;
  }
  @media (min-width: 1500px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

const Header = (props) => {
  return (
    <AppHeader>
      <StyledHeader>
        <Title />
        <LightMode theme={props.theme} toggleButton={props.toggle} />
      </StyledHeader>
      <Inputs theme={props.theme} />
    </AppHeader>
  );
};

export default Header;
