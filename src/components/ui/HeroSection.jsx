import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
    return (
        <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0a0a0c] py-12 lg:py-24">
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Global Discovery Portal
                        </div>

                        <h1 className="text-5xl font-black leading-tight tracking-tighter text-white sm:text-6xl lg:text-6xl">
                            Explore the World, <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                                One Country
                            </span> at a Time.
                        </h1>

                        <p className="max-w-xl text-lg leading-relaxed text-gray-400 mx-auto lg:mx-0">
                            Discover the history, culture, and beauty of every nation.
                            Sort, search, and filter through countries to find the
                            precise details you need in our high-tech atlas.
                        </p>

                        <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                            <button className="group flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0a0a0c] transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:cursor-pointer">
                                Start Exploring
                                <FaLongArrowAltRight className="transition-transform group-hover:translate-x-2" />
                            </button>

                            {/* <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10">
                                View Map
                            </button> */}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-cyan-500/10 blur-3xl"></div>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
                            <img
                                src="https://images.unsplash.com/photo-1706823871410-ed8b01faef7e?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="world is beauty"
                                className="rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-[#161b22]/90 p-6 backdrop-blur-md sm:block">
                            <div className="flex items-center gap-4">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-500"></div>
                                <p className="text-sm font-medium text-gray-300">Live Data: 249+ Territories</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default HeroSection;