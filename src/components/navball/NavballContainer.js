import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

import NavballItem from "./NavBallItem"

const Items = [
    {
        path: "/tech",
        name: "Unser Techstack",
    },
    {
        path: "/about",
        name: "Wir sind Opa Fritz",
    },
]
const NavballContainer = () => {
    const navigate = useNavigate()
    const [childs, setChilds] = useState([])
    const [items, setItems] = useState([])
    // const [active, setActive] = useState(0)
    let active = useRef(0)
    let aRef = useRef(null)

    const handleWheelAction = (event) => {
        console.log(active)
        if (childs.length > 0) {
            console.log("in der if abfrage")
            childs[active.current].style.transform = "rotate(270deg)"
            navigate(Items[active.current].path)
            active.current = 1
        }
    }
    useEffect(() => {
        Items.forEach((item) => setItems((oldItems) => [...oldItems, item]))
    }, [])
    useEffect(() => {
        window.addEventListener("wheel", handleWheelAction)
        setChilds(document.getElementById("navContainer").children)
        console.log("im zweiten")
    }, [childs])
    return (
        <div id="navContainer" className="w-[32rem] h-[32rem] rounded-full bg-secondary relative">
            {items.map((item, key) => (
                <NavballItem key={key} link={item.path}></NavballItem>
            ))}
        </div>
    )
}

export default NavballContainer
