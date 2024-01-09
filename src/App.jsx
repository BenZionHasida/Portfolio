import { RouterProvider } from "react-router-dom"
import router from "./router.jsx"
import styles from "./app.module.scss"

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
