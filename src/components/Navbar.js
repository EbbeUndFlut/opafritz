import NavItem from "./NavItem"

const Navbar = () => {
    const handleNavbarClick = (e) => {
        const menu = document.getElementById("itemContainer")
        menu.classList.toggle("hidden")
    }
    return (
        <nav className="w-full flex py-2 px-4 justify-between flex-row">
            <p className="text-xl">Opa Fritz</p>
            <div className="w-6 z-10" onClick={handleNavbarClick}>
                <div className="w-full h-1 my-1 bg-black"></div>
                <div className="w-full h-1 my-1 bg-black"></div>
                <div className="w-full h-1 my-1 bg-black"></div>
            </div>
            <div className="absolute top-0 left-0 w-screen h-screen hidden  bg-indigo-500 flex flex-col justify-center" id="itemContainer">
                <NavItem text="Home"></NavItem>
                <NavItem text="About"></NavItem>
                <NavItem text="Blog"></NavItem>
            </div>
        </nav>
    )
}

export default Navbar
