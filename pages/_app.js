import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import axios from "axios"
import { ToastProvider } from 'react-toast-notifications'
import { WagmiConfig, createClient } from 'wagmi'
import { MarketplaceProvider } from '../context/MarketplaceContext'
import { PropertyProvider } from '../context/PropertyContext'

const client = createClient();

axios.defaults.baseURL = "http://localhost:5000/api/v1";

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session}>
        <MarketplaceProvider>
          <PropertyProvider>
            <ToastProvider>
              <Component {...pageProps} />
            </ToastProvider>
          </PropertyProvider>
        </MarketplaceProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}

export default MyApp
