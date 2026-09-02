import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const authorizationToken = token ? `Bearer ${token}` : "";
  const [user,setUser]=useState('')
  const [service,setService] = useState("")
  const storetokenInLs = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
      setToken(newToken);
    }
    return newToken;
  };
const isLoggedIn = !!token;
  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  

  //jwt authorized - to get the currently loggedin user data
  
  const userAuthentication = async () => {
    try{
      if (!token) {
        setUser(null);
        return;
      }

      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization:  authorizationToken,
        },
      });

      if (response.status === 401) {
        // token invalid or expired
        logoutUser();
        setUser(null);
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    }catch(error){
      console.log(error)
    }
  }

  //to fetch service
  const getServices = async() =>{
    try{
      const response = await fetch("http://localhost:3000/api/admin/services", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }

      const data = await response.json();
      const servicesList = Array.isArray(data) ? data : data.msg || data.services || [];
      setService(servicesList);
    } catch(error){
      console.log("Get Services Error:", error);
      setService([]);
    }
  }

 useEffect(() => {
  getServices();
    userAuthentication();
  }, [token]);

    return (
      <AuthContext.Provider value={{ storetokenInLs, logoutUser, isLoggedIn,user ,service,authorizationToken }}>
        {children}
      </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};