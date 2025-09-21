import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Pages/Footer"
import Navbar from "./Pages/Header"
import About from "./Pages/About"
import MenuPage from "./Pages/Menu"
import Contact from "./Pages/Contact"


function App() {

    return (
        <Box>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Menu" element={<MenuPage />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Box>

    )
}

export default App;