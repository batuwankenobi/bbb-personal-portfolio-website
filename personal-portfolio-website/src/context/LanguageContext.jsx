import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
	var lang = navigator.language || navigator.userLanguage;
  if(lang.includes("tr")){
    lang="en"
  }
  else{
    lang="tr"
  }

  const [language, setLanguage] = useState(lang);
  const [translations,setTranslations]=useState({...languagesData});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.post('https://reqres.in/api/workintech', languagesData[language]);
        setTranslations(response.data);
        if(!loading){
          if(language==="tr"){
            toast.success("Dil değişti.")
          }else{
            toast.success("Language changed.")
          }
        }      