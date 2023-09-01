import { useEffect, useState } from "react";

const useAsync = (requestFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    requestFunc()
      .then((data) => {
        setData(data);
        setStatus("successful");
      })
      .catch((error) => {
        setStatus("error");
        setError(error.message);
      });
  }, [requestFunc]);

  return {
    data,
    isLoading: status === "pending",
    isSuccess: status === "successful",
    isError: status === "error",
    error,
  };
};

export default useAsync;
