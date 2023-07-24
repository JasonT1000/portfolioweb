import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <Link href={"/"}>Home</Link>
            <Link href={"/pigsrus"}>Work</Link>
            <Link href={"personalprojects"}>Personal Projects</Link>
            <Link href={"info"}>Info</Link>
            <Link href={"contact"}>Contact</Link>
        </nav>
     );
}
 
export default Navbar;