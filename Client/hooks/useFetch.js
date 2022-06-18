import { useState, useEffect } from "react";

import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) return;

    let mounted = true;

    const fetchData = () => {
      axios
        .get(url)
        .then((res) => {
          if (mounted) {
            setData(res?.data);
          }
        })
        .catch((err) => console.log(err));
    };
    fetchData();

    return () => (mounted = false);
  }, [url]);

  return { data, setData };
}
