import { createContext, useState, useContext } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {

  const [formData, setFormData] = useState({});

  return (
    <FormDataContext.Provider value={{ formData, setFormData }} >
      {children}
    </FormDataContext.Provider>
  );
};

export const usePopUp = () => useContext(FormDataContext);