import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import footerContact from "../../api/footerData.json";

const Footer = () => {
    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />,
    };

    return (
        <footer className="border-t border-white/10 bg-[#0a0a0c] pt-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {footerContact.map((curData, index) => {
                        const { icon, title, details } = curData;
                        return (
                            <div key={index} className="group flex items-center gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:bg-white/10">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:bg-cyan-500 group-hover:text-[#0a0a0c]">
                                    {footerIcon[icon]}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{title}</p>
                                    <p className="font-medium text-white">{details}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 border-t border-white/5 py-8">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-500">
                                Copyright &copy; 2026, All Rights Reserved{" "}
                                <NavLink to="/" className="font-bold text-white hover:text-cyan-400">
                                    WorldFacts
                                </NavLink>
                            </p>
                        </div>

                        <nav>
                            <ul className="flex flex-wrap justify-center gap-8">
                                <li>
                                    <NavLink to="/" className="text-sm font-semibold uppercase tracking-tighter text-gray-400 transition-colors hover:text-cyan-400">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="https://www.instagram.com/arijitsahah/"
                                        target="_blank"
                                        className="text-sm font-semibold uppercase tracking-tighter text-gray-400 transition-colors hover:text-cyan-400"
                                    >
                                        Social
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="text-sm font-semibold uppercase tracking-tighter text-gray-400 transition-colors hover:text-cyan-400">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;