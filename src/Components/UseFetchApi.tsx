import { useEffect, useState } from "react";

const useFetchApi = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const date = [
    "11/03/22",
    "03/19/23",
    "07/21/24",
    "06/12/23",
    "09/09/22",
    "02/14/24",
    "10/29/23",
    "12/07/23",
    "04/25/23",
    "11/29/22",
    "08/06/23",
    "01/25/24",
    "12/22/22",
    "04/07/23",
    "05/19/24",
    "08/14/22",
    "10/05/22",
    "09/30/22",
    "06/08/22",
    "02/21/23",
    "01/11/22",
    "12/01/22",
  ];

  useEffect(() => {
    const getCoinsData = async () => {
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
            limit: 22,
            meta: false,
          }),
        }
      );
      const result = await data.json();
      const historyWithLocalDates = result.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any, index: any) => ({
          ...item,
          localDate: date[index],
        })
      );
      setData1(historyWithLocalDates);
    };

    const getCoinHistory = async () => {
      const data = await fetch(
        new Request("https://api.livecoinwatch.com/coins/single/history"),
        {
          method: "POST",
          headers: new Headers({
            "content-type": "application/json",
            "x-api-key": "670ca4f5-b5c2-42f2-8ac6-7894c2828ea2",
          }),
          body: JSON.stringify({
            currency: "USD",
            code: "BTC",
            start: 1741172173088,
            end: 1741258573088,
          }),
        }
      );
      const result1 = await data.json();

      const historyWithLocalDates = result1.history.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: { date: string | number | Date }, index: any) => ({
          ...item,
          localDate: date[index],
        })
      );

      setData2(historyWithLocalDates);
    };

    getCoinsData();
    getCoinHistory();
  }, []);

  return { data1, data2 };
};

export default useFetchApi;
