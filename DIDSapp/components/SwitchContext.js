import React, { createContext, useContext, useState } from 'react';

const SwitchContext = createContext();

export const SwitchProvider = ({ children }) => {
  const [switchValues, setSwitchValues] = useState({
    switchValue5: false,
    switchValue: false,
    switch1Value: false,
    switch2Value: false,
    switch3Value: false,
    switch4Value: false,
  });

  const setSwitchValue = (name, value) => {
    setSwitchValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <SwitchContext.Provider value={{ switchValues, setSwitchValue }}>
      {children}
    </SwitchContext.Provider>
  );
};

export const useSwitchContext = () => {
  return useContext(SwitchContext);
};
