import { useEffect } from "react";

const Translator = () => {
  useEffect(() => {
    // Define the function for initializing Google Translate API
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
    };

    // Check if the Google Translate API script is already loaded
    if (!window.google || !window.google.translate) {
      // If not loaded, create a script element to load the API
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // Assign the googleTranslateElementInit function to the global scope
      window.googleTranslateElementInit = googleTranslateElementInit;
    } else {
      // If the script is already loaded, directly initialize the translation element
      googleTranslateElementInit();
    }
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
      <h4></h4>
    </>
  );
};

export default Translator;
