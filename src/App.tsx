import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
