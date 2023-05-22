import App from './App'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Provider } from 'react-redux'
import { store } from 'store'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider {...{ store }}>
    <RouterProvider {...{ router }} >
      <App />
    </RouterProvider>
  </Provider>
)
