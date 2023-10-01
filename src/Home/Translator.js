import React, { useEffect } from "react";

const Translator = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
    script.onload = googleTranslateElementInit;
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
      <h4>Start building your app. Happy Coding!</h4>
    </>
  );
};

export default Translator;
