import axios from "axios"


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
    withCredentials: true                                                                             // Axios by default doesn't give access to cookies. If we set this to true, the server can read and set cookies from the backend response.
})

// Create the register Api for interaction frontend to backend
export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })

        return response.data

    } catch (err) {

        console.log(err)
        throw err
    }

}

// Create the login Api for interaction frontend to backend

export async function login({ email, password }) {
  try {
    const response = await api.post("/api/auth/login", { email, password });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// Create the logout Api for interaction frontend to backend
export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")

        return response.data

    } catch (err) {

    }
}


// Create the getme Api for interaction frontend to backend
export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        console.log(err)
    }

}