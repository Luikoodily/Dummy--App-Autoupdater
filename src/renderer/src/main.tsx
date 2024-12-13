import './assets/main.css'
import AutoUpdater from '@renderer/features/auto-updator/components/auto-updator'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a new instance of QueryClient
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <AutoUpdater />
    </QueryClientProvider>
  </React.StrictMode>
)
