import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet
} from 'wagmi/chains';
import { AppContextProvider } from './context/AppContext.tsx'

const config = getDefaultConfig({
  appName: 'LiFi Test App',
  projectId: import.meta.env.VITE_RAINBOWKIT_PROJECT_ID,
  chains: [mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Theme appearance='dark' accentColor='pink'>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </Theme>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>

  </StrictMode>,
)
