import { useState, useEffect, useRef } from "react"
const NavballItem = () => {
    return (
        <div className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full transition-transform duration-700">
            <div className="absolute -right-6 top-[45%] rounded-full border-4 border-highlight w-14 h-14"></div>
        </div>
    )
}

export default NavballItem
