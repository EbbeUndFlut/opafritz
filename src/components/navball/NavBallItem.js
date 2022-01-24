import { useState, useEffect, useRef } from "react"
const NavballItem = (props) => {
    const [active, setActive] = useState(false)
    const [rotation, setRotation] = useState(0)
    const elementRef = useRef()

    const handleWheelAction = (event) => {
        const element = elementRef.current
        if (active) {
            element.style.transform = "rotate(" + rotation + "deg)"
            setRotation(rotation + 90)
        }
    }
    useEffect(() => {
        setActive(props.active)

        window.addEventListener("wheel", handleWheelAction)
        return () => {
            window.removeEventListener("wheel", handleWheelAction)
        }
    }, [handleWheelAction])

    return (
        <div ref={elementRef} className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full transition-transform duration-700">
            <div className="absolute -right-6 top-[45%] rounded-full border-4 border-highlight w-14 h-14"></div>
        </div>
    )
}

export default NavballItem
