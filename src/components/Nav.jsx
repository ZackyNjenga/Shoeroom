import {headerLogo} from "../assets/images/index.js";
// import { hamburger} from "../assets/icons";
import {navLinks} from "../constants/index.js";
import {hamburger} from "../assets/icons/index.js";


const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between max-container items-center">
                <a href="/">
                    <img src={headerLogo}
                         alt="Logo"
                         width={130}
                         height={29}
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                               className="font-montserrat leading-normal text-lg text-green-500">
                                {item.label}
                            </a>

                        </li>
                    ))}
                </ul>

                <div className="hidden max-lg:block">
                    <img src={hamburger}
                         alt="HAmburger"
                         width={27}
                         height={27}
                    />

                </div>
            </nav>
        </header>
    )
}
export default Nav