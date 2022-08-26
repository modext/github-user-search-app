import styled from "styled-components";

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 2.6rem;
  line-height: 3.85rem;
`;

const Title = () => {
  return <StyledTitle>devfinder</StyledTitle>;
};

export default Title;
