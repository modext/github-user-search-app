import styled from "styled-components";
import { useDataContext } from "../../../context/useDataContext";
import { Location, Website, Twitter, Company } from "../../../images/images";

const LinkContainer = styled.footer`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  @media (min-width: 1440px) {
    grid-column: 2 / 3;
  }
`;
const Separator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Link = styled.a`
  all: unset;
  font-family: var(--font);
  color: ${({ theme }) => theme.lowerText};
  font-size: 1.3rem;
  line-height: 1.92rem;
  padding-left: 3rem;
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  &.not_available {
    opacity: 0.5;
  }
  &.lightmode {
    filter: brightness(0) invert(1);
  }
  @media (min-width: 768px) {
    margin-right: ${(props) => (props.IsLeft ? "6.5rem" : "0")};
    font-size: 1.5rem;
    line-height: 2.22rem;
  }
  @media (min-width: 768px) {
    min-width: 14.9rem;
  }
  @media (min-width: 1440px) {
    &::after {
      display: block;
      content: "";
      border-bottom: solid 2px #000000;
      mix-blend-mode: normal;
      opacity: 0.5;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      // outline: 3px solid;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

const Links = (props) => {
  const [data, _] = useDataContext();
  const lightMode = props.theme === "dark" && "lightmode";
  return (
    <LinkContainer>
      <Separator>
        <Link
          className={`${lightMode} ${!data.location ? "not_available" : ""}`}
          IsLeft
          bgImg={Location}
        >
          {data.location || "Not Available"}
        </Link>
        <Link
          href={
            data.website === "Not Available" || !data.website
              ? ""
              : data.website
          }
          className={`${lightMode} ${!data.website ? "not_available" : ""}`}
          bgImg={Website}
          onClick={(e) => {
            if (!data.website || data.website === "Not Available")
              e.preventDefault();
          }}
          target="_blank"
        >
          {data.website || "Not Available"}
        </Link>
      </Separator>
      <Separator>
        <Link
          target="_blank"
          href={
            data.twitter === "Not Available" || !data.twitter
              ? ""
              : `https://twitter.com/${data.twitter}`
          }
          onClick={(e) => {
            if (!data.twitter || data.twitter === "Not Available")
              e.preventDefault();
          }}
          className={`${lightMode} ${!data.twitter ? "not_available" : ""}`}
          IsLeft
          bgImg={Twitter}
        >
          {data.twitter || "Not Available"}
        </Link>
        <Link
          className={`${lightMode} ${!data.company ? "not_available" : ""}`}
          bgImg={Company}
        >
          {data.company || "Not Available"}
        </Link>
      </Separator>
    </LinkContainer>
  );
};

export default Links;
