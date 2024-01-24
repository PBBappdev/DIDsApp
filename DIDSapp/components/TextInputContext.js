import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TextInputContext = createContext();

export const TextInputProvider = ({ children }) => {
    const [textInputs, setTextInputs] = useState({
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      country: '',
      postcode: '',
      gender: '',
      ethnicity: '',
      mobileNum: '',
      dOb: '',
      language: '',
      secLanguage: '',
    });
  
    useEffect(() => {
      const loadTextInputs = async () => {
        try {
          const storedTextInputs = await AsyncStorage.getItem('textInputs');
          if (storedTextInputs) {
            setTextInputs(JSON.parse(storedTextInputs));
          }
        } catch (error) {
          console.error('Error loading text inputs from AsyncStorage:', error);
        }
      };
  
      loadTextInputs();
    }, []);
  
    const setTextInput = (name, value) => {
      setTextInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
  
      // Save the updated textInputs immediately after updating state
      saveTextInputs();
    };
  
    const saveTextInputs = async () => {
      try {
        await AsyncStorage.setItem('textInputs', JSON.stringify(textInputs));
      } catch (error) {
        console.error('Error saving text inputs to AsyncStorage:', error);
      }
    };
  
    return (
      <TextInputContext.Provider value={{ textInputs, setTextInput }}>
        {children}
      </TextInputContext.Provider>
    );
  };

export const useTextInputContext = () => {
  return useContext(TextInputContext);
};
