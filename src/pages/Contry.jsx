import { useEffect, useState, useTransition } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { getCountryData } from "../api/postApi";

const Contry = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        startTransition(async () => {
            try {
                const response = await getCountryData();
                setCountries(response.data);
            } catch (err) {
                setError("System Breach: Unable to sync with global database.");
                console.error(err);
            }
        });
    }, []);

    if (isPending) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-[#0a0a0c]">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-500/10 border-t-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.2)]"></div>
                <p className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500 animate-pulse">
                    Decrypting Map Data...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0a0a0c] px-6">
                <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center backdrop-blur-xl">
                    <h2 className="text-sm font-black uppercase tracking-widest text-red-500">{error}</h2>
                </div>
            </div>
        );
    }

    return (
        <section className="bg-[#0a0a0c] py-12 lg:py-24">
            <div className="container mx-auto px-6">

                <div className="mb-16 flex flex-col items-end justify-between gap-6 border-b border-white/5 pb-8 md:flex-row">
                    <div className="w-full text-left">
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
                            Global <span className="text-cyan-500 italic">Inventory</span>
                        </h2>
                        <p className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            Live Connection: {countries.length} Territories Identified
                        </p>
                    </div>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {countries.map((country, index) => {
                        const { flags, name, population, region, capital } = country;
                        return (
                            <li key={index} className="group list-none">
                                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0f1115] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(34,211,238,0.1)]">

                                    <div className="aspect-video w-full overflow-hidden border-b border-white/5">
                                        <img
                                            src={flags.png}
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

                                        <div className="space-y-2 text-sm text-gray-400">
                                            <p className="flex justify-between border-b border-white/5 pb-1">
                                                <span className="font-bold uppercase tracking-widest text-cyan-500/60 text-[10px]">Population:</span>
                                                <span className="text-gray-300">{population.toLocaleString()}</span>
                                            </p>
                                            <p className="flex justify-between border-b border-white/5 pb-1">
                                                <span className="font-bold uppercase tracking-widest text-cyan-500/60 text-[10px]">Region:</span>
                                                <span className="text-gray-300">{region}</span>
                                            </p>
                                            <p className="flex justify-between">
                                                <span className="font-bold uppercase tracking-widest text-cyan-500/60 text-[10px]">Capital:</span>
                                                <span className="text-gray-300 truncate max-w-[120px] text-right">{capital?.[0] || "Unknown"}</span>
                                            </p>
                                        </div>

                                        <div className="mt-6">
                                            <NavLink to={`/country/${name.common}`}>
                                                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-cyan-500 hover:text-[#0a0a0c] hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:cursor-pointer">
                                                    Read More
                                                    <FaArrowRight className="text-[10px]" />
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Contry;