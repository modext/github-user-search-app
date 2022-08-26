import styled from "styled-components";
import { useDataContext } from "../../../context/useDataContext";

const OctoCont = styled.div`
  width: 7rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  align-self: center;
  @media (min-width: 768px) {
    width: 11.7rem;
  }
  @media (min-width: 1440px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: flex-start;
  }
`;
const OctoImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const Octocat = () => {
  const [data, _] = useDataContext();
  return (
    <OctoCont>
      <OctoImg alt="Profile picture" src={data.avatar} />
    </OctoCont>
  );
};

export default Octocat;
