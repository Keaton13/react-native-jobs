import { useState, useEffect } from "react";
import axios from "axios";
import exampleData from "./data.json";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "d0e363c176msh9a18a58bc3ae484p1b2c17jsnbfef6d5f8950",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      // const response = await axios.request(options);
      // setData(response.data.data);
      setData(exampleData.data)
      setIsLoading(false);
    } catch (error) {
      console.log(error)
      setError(error);
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchData();

  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch }

};

export default useFetch;
