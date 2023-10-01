import React, { useState } from 'react';
import axios from 'axios';

function LanguageTranslator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default: optionish

  const translateText = async () => {
    try {
      const response = await axios.post(
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
        null,
        {
          params: {
            q: text,
            target: targetLanguage,
            key: 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
          },
        }
      );

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <div>
      {/* <h1>Language Translator</h1> */}
      {/* <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      ></textarea> */}
      <br />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es" style={{cursor:"pointer"}}>spanish |</option>
        <option value="fr">French |</option>
        <option value="de">German |</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={translateText}>Translate</button>
      <div>
        <h2>Translation:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}

export default LanguageTranslator;
