import { useEffect, useState } from "react";

const useFetchApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        new Request("https://api.livecoinwatch.com/coins/list"),
        {
          method: "POST",
          headers: new Headers({
            "content-type": "application/json",
            "x-api-key": "670ca4f5-b5c2-42f2-8ac6-7894c2828ea2",
          }),
          body: JSON.stringify({
            currency: "USD",
            sort: "rank",
            order: "ascending",
            offset: 0,
            limit: 8,
            meta: false,
          }),
        }
      );
      const result = await data.json();
      setData(result);
    };
    getData();
  }, []);
  return { data };
};

export default useFetchApi;
