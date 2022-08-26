import styled from "styled-components";
import Octocat from "./Octocat";
import StatsContainer from "./StatsContainer";
import UserData from "./UserData";
import Links from "./Links";
import { useLoadingContext } from "../../../context/useLoadingContext";
import { Fragment } from "react";
import Spinner from "../../helpers/Spinner";

const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.main};
  border-radius: 1.5rem;
  margin: 0.8rem 2.4rem 0;
  padding: 1.6rem 2.4rem 4.8rem;
  display: grid;
  grid-template-columns: 25% 75%;
  gap: 1.95rem;
  min-height: 52.7rem;
  @media (min-width: 768px) {
    margin: 0rem 9.8rem 23.6rem 9.7rem;
    padding: 4rem;
    min-height: 48.1rem;
  }
  @media (min-width: 1440px) {
    margin: 0 35.5rem 14.5rem 35.5rem;
  }
  @media (min-width: 1440px) {
    height: 42.4rem;
    width: 51%;
    grid-template-columns: 20% 80%;
    grid-template-rows: 33% 33% 33%;
    padding: 3.8rem 4.8rem 4.8rem 4.8rem;
    gap: 2.5rem;
  }
  @media (min-width: 1500px) {
    margin-right: auto;
    margin-left: auto;
  }
  &.lightmode {
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  }
`;

const MainContainer = (props) => {
  const [loading, _] = useLoadingContext();
  return (
    <StyledMain className={props.theme === "light" && "lightmode"}>
      {loading && <Spinner />}
      {!loading && (
        <Fragment>
          <Octocat />
          <UserData />
          <StatsContainer />
          <Links theme={props.theme} />
        </Fragment>
      )}
    </StyledMain>
  );
};

export default MainContainer;
