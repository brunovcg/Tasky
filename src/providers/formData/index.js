import { createContext, useState } from 'react';

export const InputDataContext = createContext();

export const InputDataProvider = ({ children }) => {

  const [formData, setFormData] = useState({});

  return (
    <InputDataContext.Provider value={{ formData, setFormData }} >
      {children}
    </InputDataContext.Provider>
  );
};