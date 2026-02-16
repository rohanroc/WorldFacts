import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;

    return (
        <li className="group list-none">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0f1115] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(34,211,238,0.1)]">

                <div className="aspect-video w-full overflow-hidden border-b border-white/5">
                    <img
                        src={flags.svg}
                        alt={flags.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="p-6">
                    <h2 className="mb-4 text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                        {name.common.length > 15
                            ? name.common.slice(0, 15) + "..."
                            : name.common}
                    </h2>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b border-white/5 pb-1">
                            <span className="font-bold uppercase tracking-widest text-cyan-500/60 text-[10px]">Population</span>
                            <span className="text-gray-300">{population.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1">
                            <span className="font-bold uppercase tracking-widest text-cyan-500/60 text-[10px]">Region</span>
                            <span className="text-gray-300">{region}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold uppercase tracking-widest text-cyan-500/60 text-[10px]">Capital</span>
                            <span className="text-gray-300 truncate max-w-[120px] text-right">{capital?.[0] || "N/A"}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <NavLink to={`/country/${name.common}`}>
                            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-cyan-500 hover:text-[#0a0a0c] hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                                Read More
                                <FaArrowRight className="text-[10px]" />
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div className="absolute top-2 right-2 rounded-full bg-[#0a0a0c]/60 px-3 py-1 text-[10px] font-bold text-cyan-400 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    {region}
                </div>
            </div>
        </li>
    );
};

export default CountryCard;