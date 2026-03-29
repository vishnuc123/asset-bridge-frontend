import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LogRocket from "logrocket";

const queryClient = new QueryClient

// LogRocket.init(import.meta.env.VITE_LOGROCKET_APPID, {
//   dom: {
//     inputSanitizer: true,
//   },
// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
