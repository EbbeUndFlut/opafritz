import { useState, useEffect, useRef } from "react"

import NavballItem from "./NavBallItem"

const NavballContainer = () => {
    const [childs, setChilds] = useState([])
    const handleWheelAction = (event) => {
        console.log(childs)
        if (childs.length > 0) {
            childs[0].style.transform = "rotate(90deg)"
        }
    }
    useEffect(() => {
        console.log("im ersten")
    }, [])
    useEffect(() => {
        window.addEventListener("wheel", handleWheelAction)
        setChilds(document.getElementById("navContainer").children)
        console.log("im zweiten")
    }, [childs])
    return (
        <div id="navContainer" className="w-[32rem] h-[32rem] rounded-full bg-secondary relative">
            <NavballItem></NavballItem>
            <NavballItem></NavballItem>
            <NavballItem></NavballItem>
        </div>
    )
}

export default NavballContainer
