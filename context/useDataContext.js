import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataWrapper({ children }) {
  const [data, setData] = useState({
    location: "San Francisco",
    website: "https://github.blog",
    twitter: "Not Available",
    company: "@github",
    repos: 8,
    followers: 3938,
    following: 9,
    bio: "Bio not available",
    avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
    login: "octocat",
    name: "The Octocat",
    date: "2011-01-25T21:27:52Z",
  });

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
}
export function useDataContext() {
  return useContext(DataContext);
}
