import { Fragment } from "react";
import styled from "styled-components";
import { useDataContext } from "../../../context/useDataContext";
import transformDate from "../../../helpers/convertDate";
import useWindowSize from "../../../hooks/use-window-size";

const DataSection = styled.section`
  margin: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1440px) {
    display: grid;
    align-items: center;
    margin: 0;
    height: 10.15rem;
  }
`;
const UserName = styled.h1`
  font-size: 1.6rem;
  line-height: 2.37rem;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    font-size: 2.6rem;
    line-height: 3.85rem;
  }
  @media (min-width: 1400px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: flex-start;
  }
`;
const ArrobaUser = styled.h3`
  font-size: 1.3rem;
  color: var(--blue);
  line-height: 1.92rem;
  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.37rem;
  }
  @media (min-width: 1400px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: flex-start;
  }
`;
const UserDate = styled.h4`
  color: ${({ theme }) => theme.lowerText};
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.92rem;
  padding-top: 0.6rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2.22rem;
  }
  @media (min-width: 1400px) {
    padding: 0;
    margin-right: 3rem;
  }
`;
const UserDesc = styled.p`
  color: ${({ theme }) => theme.lowerText};
  font-size: 1.3rem;
  grid-column: 1 / 3;
  line-height: 2.5rem;
  width: 90%;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1440px) {
    width: 100%;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    align-self: flex-start;
    margin-top: 2rem;
    /* min-height: 5rem; */
  }
  /* @media (min-width: 1600px) {
    min-width: 61.3rem;
  } */
`;

const UserData = () => {
  const size = useWindowSize();
  const [data, _] = useDataContext();
  const outputDate = transformDate(data.date);
  return (
    <Fragment>
      <DataSection>
        <UserName>{data.name || "No Username Found"}</UserName>
        <ArrobaUser>{`@${data.login}`}</ArrobaUser>
        <UserDate>{outputDate}</UserDate>
        {size.width >= 1440 && (
          <UserDesc>
            {data.bio ||
              "This user has no current bio, maybe you want to contact him/her and ask to set one? :)"}
          </UserDesc>
        )}
      </DataSection>
      {size.width < 1440 && (
        <UserDesc>
          {data.bio ||
            "This user has no current bio, maybe you want to contact him/her and ask to set one? :)"}
        </UserDesc>
      )}
    </Fragment>
  );
};

export default UserData;
