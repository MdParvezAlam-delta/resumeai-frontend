import { useContext,useEffect} from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context                                                  // context destructring from the AuthContext.Context.jsx

    // handling login and loading state:---------------->
    const handleLogin = async ({ email, password }) => {
        setLoading(true)                                                                                   // to start and keep loading state until data.user recived
        try {
            const data = await login({ email, password })                                                // here we store the login info which recives from database into data
            setUser(data.user)                                                                           // we use data.user ---> we have done .user as we recives the user as respond in auth.cotroller.js(Backend Folder)
            return true
        } catch (err) { 
            setUser(null)
            return false
        } finally {
            setLoading(false)                                                                       // after receiving the data stop the loading state
        }
    }

    // handling register and loading state:------------------------->
    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            setUser(data.user)
        return true
        } catch (err) {
        setUser(null)
        return false
        } finally {
            setLoading(false)
        }
    }

    // handling logout and loading state:---------------->
    const handleLogout = async () => {
        setLoading(true)
        try {
            const data = await logout()
            setUser(null)
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }


    // handling getMe and loading state:---------------->
//  it will check that user is truly logged by checking the backend based on the check the token of cookies

useEffect(() => {
  const getAndSetUser = async () => {
    if (user) {
      setLoading(false);
      return;
    }
    try {
      const data = await getMe();
      if (data?.user) setUser(data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  getAndSetUser();
}, []);


    return { user, loading, handleRegister, handleLogin, handleLogout }
}

