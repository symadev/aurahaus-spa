import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext"; // তোমার path অনুযায়ী adjust করবে

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
