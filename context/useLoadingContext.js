import { createContext, useContext, useState } from "react";

const LoadContext = createContext();

export function LoadWrapper({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadContext.Provider value={[loading, setLoading]}>
      {children}
    </LoadContext.Provider>
  );
}
export function useLoadingContext() {
  return useContext(LoadContext);
}
