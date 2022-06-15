import React, { createContext } from "react";
import { appState } from "./AppState";


export const appContext = createContext(appState);