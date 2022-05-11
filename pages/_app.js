import '../styles/globals.css'
import axios from "axios"
import { ToastProvider } from 'react-toast-notifications'



axios.defaults.baseURL = "http://localhost:5000/api/v1";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  )
}

export default MyApp
