import React,{useState} from 'react'
import "../auth.form.scss";
import { useNavigate, Link } from 'react-router'                                                         // for navigate to login
import { useAuth } from '../hooks/useAuth'

const Register = () => {
const navigate = useNavigate()                                                                      //   To navigate  home page                                                              
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ showPassword, setShowPassword ] = useState(false)


    const {loading,handleRegister} = useAuth()

  const handleSubmit = async (e) => {
        e.preventDefault()
      const registered = await handleRegister({username,email,password})
      if (registered) navigate("/")
    }

     if(loading){
        return (<main><h1>Loading.......</h1></main>)                                                 // if loading then we will return it from here  not goona go through that below return function
    }


  return (
           <main>
            <div className="form-container">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => { setUsername(e.target.value) }}
                            // using onChange for two way binding
                            type="text" id="username" name='username' placeholder='Enter username' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' placeholder='Enter email address' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input">
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type={showPassword ? "text" : "password"} id="password" name='password' placeholder='Enter password' />
                            <button type="button" className="password-toggle" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>
                                👁
                            </button>
                        </div>
                    </div>

                    <button className='button primary-button' >Register</button>

                </form>


                <p>Already have an account? <Link to={"/login"} >Login</Link> </p>                 {/* // for navigate to login */}

            </div>
        </main>
  )
}

export default Register
