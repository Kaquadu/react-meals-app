import { useState, useEffect } from "react";
import axios from "axios";

export default function useApiPost(url, body) {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('idle')
  
  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'x-app-id': process.env.REACT_APP_NUTRI_API_APP_ID,
      'x-app-key': process.env.REACT_APP_NUTRI_API_APP_SECRET
    }

    if (!body || body.query === "") return;

    setStatus('fetching');
    axios.post(url, body, {headers: headers})
      .then((response) => {
        setStatus('fetched');
        setData(response.data.foods);
      })
      .catch((error) => {
        console.log(error);
        setStatus('fetch_error');
      });
  }, [url, body]);

  return {data, status};
}
