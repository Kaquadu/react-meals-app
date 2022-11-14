import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, body, headers) {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('idle')
  
  useEffect(() => {
    let cancelRequest = false;
    console.log(body)
    if (!body || body.query === "") return;

    if (cancelRequest) return;
    setStatus('fetching');
    axios.post(url, body, {headers: headers})
      .then((response) => {
        setStatus('fetched');
        setData(response.data.foods);
      })
      .catch((error) => {
        console.log(error);
        cancelRequest = true;
        setStatus('fetch_error');
      });

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url, body, headers]);

  return {data, status};
}
