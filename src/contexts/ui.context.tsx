import React, { useMemo } from "react";

export interface State {
  displayUserInfo: boolean;
}

const initialState = {
  displayUserInfo: false,
};

type Action =
  | {
      type: "OPEN_USER_INFO";
    }
  | {
      type: "CLOSE_USER_INFO";
    };

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_USER_INFO": {
      return {
        ...state,
        displayUserInfo: true,
      };
    }
    case "CLOSE_USER_INFO": {
      return {
        ...state,
        displayUserInfo: false,
      };
    }
  }
}

type Props = {
  children: React.ReactNode;
};

export const UIProvider: React.FC<Props> = (props: Props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openUserInfo = () => dispatch({ type: "OPEN_USER_INFO" });
  const closeUserInfo = () => dispatch({ type: "CLOSE_USER_INFO" });

  const value = useMemo(
    () => ({
      ...state,

      openUserInfo,
      closeUserInfo,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
