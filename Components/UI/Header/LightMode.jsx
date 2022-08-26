import styled from "styled-components";
import { Sun, Moon } from "../../../images/images";

const LightIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  height: 1.6rem;
  filter: invert(100%) brightness(1%);
  cursor: pointer;
  &.darkMode {
    filter: brightness(100%);
    h2 {
      color: var(--white);
    }
    img {
      filter: brightness(100%);
    }
    &:hover {
      filter: brightness(50%);
      transition: filter 0.5s ease;
    }
  }

  h2 {
    color: white;
    font-size: 1.3rem;
    letter-spacing: 0.25rem;
    font-weight: 700;
    line-height: 1.95rem;
  }
  &:hover {
    filter: invert(0) brightness(50%);
    transition: all 0.5s ease;
  }
`;

const LightMode = (props) => {
  const modeImg = props.theme === "light" ? Moon : Sun;

  return (
    <LightIcon
      className={props.theme === "dark" ? "darkMode" : ""}
      onClick={props.toggleButton}
    >
      <h2>{props.theme === "light" ? "DARK" : "LIGHT"}</h2>
      <img src={modeImg} alt="Light and Dark mode" />
    </LightIcon>
  );
};

export default LightMode;
