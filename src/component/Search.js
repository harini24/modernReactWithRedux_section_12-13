import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          list: "search",
          format: "json",
          action: "query",
          origin: "*",
          srsearch: term,
        },
      });

      setResult(data.query.search);
    };
    if (term) {
      search();
    }
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            vlaue={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
