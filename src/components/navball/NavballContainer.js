import { useState, useEffect, useRef } from "react"

import NavballItem from "./NavBallItem"
const NavballContainer = () => {
    const element = useRef()
    // useEffect(() => {})
    return (
        <div ref={element} className="w-[32rem] h-[32rem] rounded-full bg-secondary relative">
            <NavballItem active="true"></NavballItem>
            <NavballItem active="false"></NavballItem>
            <NavballItem active="false"></NavballItem>
        </div>
    )
}

export default NavballContainer
