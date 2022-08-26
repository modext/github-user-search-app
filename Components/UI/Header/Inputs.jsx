import styled from "styled-components";
import { Search } from "../../../images/images";
import { useRef } from "react";
import { useDataContext } from "../../../context/useDataContext";
import { useState } from "react";
import { useLoadingContext } from "../../../context/useLoadingContext";

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 2.4rem;
  border-radius: 1rem;
  gap: 0.7rem;
  background: url(${Search});
  background-repeat: no-repeat;
  background-position: 1.6rem 50%;
  background-color: ${({ theme }) => theme.main};

  @media (min-width: 768px) {
    margin: 0;
  }
  &.lightmode {
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  }
`;
const InputText = styled.input`
  all: unset;
  height: 6rem;
  width: 60rem;
  color: ${({ theme }) => theme.lowerText};
  text-align: center;
  font-family: var(--font);
  &:focus::placeholder {
    color: transparent;
  }

  &::placeholder {
    color: ${({ theme }) => theme.lowerText};
    font-family: var(--font);
    font-size: 1.3rem;
    text-align: right;
    line-height: 2.5rem;
    font-style: normal;
    opacity: 1;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 768px) {
    width: 130rem;
    height: 6.9rem;
    &::placeholder {
      font-size: 1.8rem;
      line-height: 2.5rem;
      text-align: center;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;
const InputSubmit = styled.input`
  all: unset;
  background-color: var(--blue);
  color: var(--white);
  text-align: center;
  border-radius: 1rem;
  font-family: var(--font);
  font-weight: 700;
  font-size: 1.4rem;
  padding: 1.25rem 1.6rem;
  margin-right: 0.7rem;
  @media (min-width: 768px) {
    /* margin: 0.95rem 1rem 0.95rem 0; */
    padding: 1.25rem 2.3rem 1.35rem 2.4rem;
    font-size: 1.6rem;
    line-height: 2.37rem;
  }
  &:hover {
    background-color: #61abff;
    cursor: pointer;
    transition: all 0.5s ease;
  }
`;
const ErrorSpan = styled.span`
  position: absolute;
  color: #f74646;
  font-family: var(--font);
  font-size: 1rem;
  font-weight: 700;
  animation: 0.8s shake alternate;
  cursor: pointer;
  right: 13rem;
  @media (min-width: 768px) {
    right: 25rem;
    font-size: 1.5rem;
  }
  @media (min-width: 1440px) {
    right: 60rem;
  }
`;

const Inputs = (props) => {
  const [_, setData] = useDataContext();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, isLoading] = useLoadingContext();
  const inputRef = useRef();
  const setErrorHandler = () => {
    setError(false);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    if (message !== inputRef) setError(false);
  };
  const onSubmitHandler = (e) => {
    isLoading(true);
    e.preventDefault();
    const fetchLocation = async () => {
      if (!inputRef) return;
      try {
        const response = await fetch(
          `https://api.github.com/users/${inputRef.current.value}`
        );
        if (!response.ok) {
          setError(true);
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        setError(false);
        setData({
          location: responseData.location,
          website: responseData.blog,
          twitter: responseData.twitter_username,
          company: responseData.company,
          repos: responseData.public_repos,
          date: responseData.created_at,
          followers: responseData.followers,
          following: responseData.following,
          bio: responseData.bio,
          avatar: responseData.avatar_url,
          login: responseData.login,
          name: responseData.name,
        });
      } catch (error) {
        console.log(error);
      }
      isLoading(false);
    };
    fetchLocation();
  };
  return (
    <SearchForm
      onSubmit={onSubmitHandler}
      className={props.theme === "light" && "lightmode"}
    >
      <InputText
        ref={inputRef}
        type="text"
        placeholder="Search GitHub username…"
        onClick={setErrorHandler}
        onChange={handleMessage}
      />
      {error && <ErrorSpan>No results</ErrorSpan>}
      <InputSubmit type="submit" value="Search" />
    </SearchForm>
  );
};

export default Inputs;
