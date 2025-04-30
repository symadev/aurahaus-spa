import { useEffect, useState } from "react";
import useAuth from "../Provider/UseAuth"; // যদি আলাদা useAuth বানানো থাকে
import axios from "axios";

const UseAdmin = () => {
  const { user } = useAuth(); // current logged in user
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (user) {
        axios.get(`http://localhost:5000/users/admin/${user.email}`)

        .then(res => {
          setIsAdmin(res.data.admin);
          setIsAdminLoading(false);
        });
    }
  }, [user]);

  return [isAdmin, isAdminLoading];
};

export default UseAdmin;

// এখানে /users/admin/:email এই API বানাতে হবে Backend-এ। এটা বলবে এই email এর ইউজার admin কিনা।