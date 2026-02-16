import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => setShow(!show);

    const navLinkClasses = ({ isActive }) =>
        `relative px-3 py-2 text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:text-cyan-400 ${isActive ? "text-cyan-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:shadow-[0_0_8px_#22d3ee]" : "text-gray-400"
        }`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0c]/90 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-20 items-center justify-between">

                    <div className="flex items-center">
                        <NavLink to="/" className="group flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-br-2xl rounded-tl-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-transform group-hover:scale-110">
                                <span className="text-xl font-bold text-white">W</span>
                            </div>
                            <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-2xl font-black italic tracking-tighter text-transparent">
                                WORLD<span className="text-cyan-500 underline decoration-cyan-500/30">Facts</span>
                            </h1>
                        </NavLink>
                    </div>

                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-8">
                            <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
                            <li><NavLink to="/about" className={navLinkClasses}>About</NavLink></li>
                            <li><NavLink to="/country" className={navLinkClasses}>Country</NavLink></li>
                            <li><NavLink to="/contact" className={navLinkClasses}>Contact</NavLink></li>
                        </ul>
                    </nav>

                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={handleButtonToggle}
                            className="group relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-all hover:bg-white/10"
                        >
                            <GiHamburgerMenu className={`mx-auto text-xl transition-transform duration-300 ${show ? 'rotate-90 text-cyan-400' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-500 lg:hidden ${show ? "max-h-80 border-t border-white/5 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-[#0a0a0c] px-6 py-8">
                    <ul className="flex flex-col gap-4">
                        {["Home", "About", "Country", "Contact"].map((item) => (
                            <li key={item}>
                                <NavLink
                                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    onClick={() => setShow(false)}
                                    className="block text-lg font-medium text-gray-400 transition-colors hover:text-cyan-400"
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;