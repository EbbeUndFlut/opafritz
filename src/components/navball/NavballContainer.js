import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

import NavballItem from "./NavBallItem"

const Items = [
    { path: "/" },
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
    let active = useRef(0)

    const handleWheelAction = (event) => {
        console.log(event)
        if (event.wheelDelta < 0) {
            active.current += 1
            if (childs.length > 0 && event.wheelDelta < 0) {
                childs[active.current].style.transform = "rotate(90deg)"
                navigate(Items[active.current].path)
            }
        } else {
            if (active.current == 0) {
                active.current = 0
            } else {
                active.current -= 1
            }
            childs[active.current].style.transform = "rotate(0deg)"
            navigate(Items[active.current].path)
        }
    }

    useEffect(() => {
        Items.forEach((item) => setItems((oldItems) => [...oldItems, item]))
    }, [])
    useEffect(() => {
        window.addEventListener("wheel", handleWheelAction)
        setChilds(document.getElementById("navContainer").children)
        return () => {
            window.removeEventListener("wheel", handleWheelAction)
        }
    }, [handleWheelAction])
    return (
        <div id="navContainer" className="w-[50rem] h-[50rem] -translate-x-3/4 rounded-full bg-secondary relative">
            {items.map((item, key) => (
                <NavballItem key={key} link={item.path}></NavballItem>
            ))}
        </div>
    )
}

export default NavballContainer
