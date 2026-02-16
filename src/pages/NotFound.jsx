import { NavLink } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const NotFound = () => {
    return (
        <main className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden bg-[#0a0a0c] px-6 text-center h-screen">

            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            ></div>

            <div className="relative z-10">
                <div className="relative inline-block">
                    <h1 className="text-[12rem] font-black leading-none tracking-tighter text-white/5 md:text-[20rem]">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-2xl font-bold uppercase tracking-[0.3em] text-cyan-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] md:text-4xl">
                            Lost in Space
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <h2 className="text-2xl font-bold text-white md:text-4xl">
                        This country isn't on our map yet.
                    </h2>
                    <p className="mx-auto max-w-md text-lg text-gray-400">
                        The coordinates you followed seem to lead to a void.
                        Let's get you back to the known world.
                    </p>
                </div>

                <div className="mt-12">
                    <NavLink
                        to="/"
                        className="group inline-flex items-center gap-3 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-cyan-400 transition-all hover:bg-cyan-500 hover:text-[#0a0a0c] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                    >
                        <FaLongArrowAltLeft className="transition-transform group-hover:-translate-x-2" />
                        Back to Home
                    </NavLink>
                </div>
            </div>

            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-600/10 blur-[100px]"></div>
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-600/10 blur-[100px]"></div>
        </main>
    );
};

export default NotFound;