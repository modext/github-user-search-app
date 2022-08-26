import styled from "styled-components";
import { useDataContext } from "../../../context/useDataContext";

const StatsCont = styled.section`
  background-color: ${({ theme }) => theme.container};
  grid-column: 1 / 3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 8.5rem;
  margin-right: 2rem;
  border-radius: 1rem;
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 3.2rem;
    gap: 9.9rem;
  }
  @media (min-width: 1440px) {
    grid-column: 2 / 3;
    width: 100%;
    align-self: center;
    margin: 0;
  }
`;
const SeparatorDiv = styled.div`
  /* padding: 1.8rem 1.4rem 1.9rem 1.4rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 4.8rem;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
const DataTitle = styled.h4`
  font-size: 1.1rem;
  line-height: 1.62rem;
  font-weight: 400;
  color: ${({ theme }) => theme.lowerText};
  @media (min-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.92rem;
  }
`;
const DataNumer = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.37rem;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    font-size: 2.2rem;
    line-height: 3.25rem;
  }
  @media (min-width: 1440px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

const StatsContainer = () => {
  const [data, setData] = useDataContext();
  return (
    <StatsCont>
      <SeparatorDiv>
        <DataTitle>Repos</DataTitle>
        <DataNumer>{data.repos}</DataNumer>
      </SeparatorDiv>
      <SeparatorDiv>
        <DataTitle>Followers</DataTitle>
        <DataNumer>{data.followers}</DataNumer>
      </SeparatorDiv>
      <SeparatorDiv>
        <DataTitle>Following</DataTitle>
        <DataNumer>{data.following}</DataNumer>
      </SeparatorDiv>
    </StatsCont>
  );
};

export default StatsContainer;
