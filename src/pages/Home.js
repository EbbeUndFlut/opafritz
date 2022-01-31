import Navball from "../components/navball/NavballContainer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TechStack from "./Techstack"
import Projects from "./Projects"
import About from "./About"
const Home = () => {
    return (
        <div className="bg-primary h-screen p-5 flex flex-row">
            <Router>
                <Navball />
                <Routes>
                    <Route path="/" element={<TechStack />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tech" element={<Projects />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Home
