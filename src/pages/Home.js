import Navbar from "../components/Navbar"
import Navball from "../components/navball/NavballContainer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TechStack from "./Techstack"
const Home = () => {
    return (
        <div className="bg-primary h-screen p-5 flex flex-row">
            <Router>
                <Navball />
                <Routes>
                    <Route path="/" element={<TechStack />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Home
