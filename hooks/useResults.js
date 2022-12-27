import { useState, useEffect } from "react";
import yelp from "../src/api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getResults = async (search) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: search,
          location: "Lisboa",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg("Something went wrong!");
      console.log(err);
    }
  };

  useEffect(() => {
    // if (!searchQuery)
    getResults("vegan");
  }, []);

  return [getResults, results, errorMsg];
};
