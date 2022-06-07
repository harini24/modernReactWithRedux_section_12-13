import axios from "axios";
import { useEffect, useState } from "react";

const Convert = ({ language, text }) => {
  const [translatedText, setTransaledText] = useState("");
  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM",
          },
        }
      );
      setTransaledText(data.data.translations[0].translatedText);
    };
    if (text) {
      translate();
    }
  }, [language, text]);
  return <div><h1 className="ui header">{translatedText}</h1></div>;
};

export default Convert;
