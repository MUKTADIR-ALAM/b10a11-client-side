import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext)
  const navigate = useNavigate()
  // interceptor

  //   Response Interceptor
  axiosSecure.interceptors.response.use(
    res => {
      return res
    },
    async error => {
      // console.log('Error from axios interceptor', error.response)
      if (error.response.status === 401 || error.response.status === 403) {
        await signOutUser()
        navigate('/login')
      }
      return Promise.reject(error)
    }
  )

  //   Request Interceptor
  //   axios.interceptors.request

  return axiosSecure
}

export default useAxiosSecure
