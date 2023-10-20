import { useEffect, useState } from "react";
import React from "react"; // Import useState if you need it

const Translation = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement
    ({
      pageLanguage: "en",
      autoDisplay: false
    }, 'google_translate_element');
  };

  useEffect(() => {
    if (!window.google) {
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      addScript.addEventListener("load", googleTranslateElementInit);
    } else {
      googleTranslateElementInit();
    }
  }, []);

  const handleLanguageChange = (lang) => {
    const checkForTranslationWidget = setInterval(() => {
      const languageSelect = document.querySelector("select.goog-te-combo");
      if (languageSelect) {
        languageSelect.value = lang;
      languageSelect.dispatchEvent(new Event("change"));
      clearInterval(checkForTranslationWidget); // Stop checking
    }
  }, 100);
  };


  return (
    <div className="flag">
      <a href="#" className="flag_link eng" onClick={() => handleLanguageChange("en")} data-lang="en">
        Eng
      </a>
      <a href="" className="flag_link taj" onClick={() => handleLanguageChange("es")} data-lang="es">
        Hindi
      </a>
      <a href="#" className="flag_link rus" onClick={() => handleLanguageChange("ru")} data-lang="ru">
        Kannada
      </a>
    </div>
  );
};

export default Translation;
