import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'

import App from './app/App'

import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { SidebarProvider } from '@/app/providers/SidebarProvider'
import '@/shared/config/i18n/i18n'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <SidebarProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </SidebarProvider>
)
