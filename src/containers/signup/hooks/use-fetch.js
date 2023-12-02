import axios from "axios";
import { useState } from "react";

const useHandler = (setShow) => {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (data) => {
    delete data.confirmPassword;
    setIsLoading(true);
    const response = await axios
      .post(
        "https://react-http-93828-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        data
      )
      .then(() => setShow(true))
      .catch((error) => {
        if (error.response) {
          alert(error.message);
          alert(error.response.status);
          alert(error.response.headers);
        } else if (error.request) {
          alert("request failed");
        } else {
          alert("Error", error.message);
        }
      });
    setIsLoading(false);
  };
  return {
    isLoading,
    submitHandler,
  };
};

export default useHandler;
