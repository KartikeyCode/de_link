"use client"
import '@rainbow-me/rainbowkit/styles.css';
import { shardeumdevnet } from './shardeumchain';

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';

import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const config = getDefaultConfig({
  appName: 'de_link',
  projectId: 'YOUR_PROJECT_ID',
  chains: [shardeumdevnet,mainnet, polygon, optimism, arbitrum, base, zora],
  ssr: false, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider  theme={darkTheme({
      accentColor: '#FF4FD8',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })}>
        {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
        </body>
    </html>
  );
}
