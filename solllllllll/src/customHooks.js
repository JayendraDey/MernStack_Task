import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchData, setFetchData] = useState();
  const [someError, setSomeError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const finalData = await response.json();
        setFetchData(finalData);
      } catch (error) {
        console.error("Fetching error:", error);
        setSomeError(true);
      }
    };

    getData();
  }, [url]);

  return [fetchData, someError];
};

export default useFetch;