import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './routes/approute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './context/Authcontext'
import { ThemeProvider } from './context/ThemeContext/ThemeContext'   // ← add

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>                                     {/* ← wrap */}
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App