import { useContext } from "react";
import {ProjectContext} from '../context/projectContext'

export const useProjectsContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("You must call useProject inside a projectContextProvider");
  }
  return context;
};
