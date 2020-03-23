import React from "react";

const defaultGlobalState = {
    items: JSON.parse(localStorage.getItem("items")),
    bool: false,
    play: false,
    musicPlayed: {
    _id: '',
    music: '',
    title: '',
    image: ''
    }
  };
  const GlobalStateContext = React.createContext(defaultGlobalState);
  const DispatchStateContext = React.createContext(undefined);
  
  export const useGlobalState = () => [
    React.useContext(GlobalStateContext),
    React.useContext(DispatchStateContext)
  ];

  const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(
      (state, newValue) => ({ ...state, ...newValue }),
      defaultGlobalState
    );
    return (
      <GlobalStateContext.Provider value={state}>
        <DispatchStateContext.Provider value={dispatch}>
          {children}
        </DispatchStateContext.Provider>
      </GlobalStateContext.Provider>
    );
  };
  export default GlobalStateProvider;