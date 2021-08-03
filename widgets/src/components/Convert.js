import React, {useState, useEffect} from "react";
import axios from "axios";

const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = (props) => {
  const [translated, setTranslated] = useState("");
  const {language, text} = props;

  useEffect(() => {
    const doTranslation = async () => {
      const {data} = await axios.post(`https://translation.googleapis.com/language/translate/v2`, {}, {
        params: {
          q: text,
          target: language.code,
          key: API_KEY
        }
      });
      setTranslated(data.data.translations[0].translatedText);;
    };

    doTranslation();
  }, [language, text]);

  return (
    <div>
      Convert Component
      <div className="ui header">{translated}</div>
    </div>
  );

}

export default Convert;
