import countryFacts from '../api/countryData.json'

const About = () => {
    return (
        <section className="bg-[#0a0a0c] py-20">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                        Here are the <span className="text-cyan-500">Interesting Facts</span>
                        <br />
                        we’re proud of
                    </h2>
                    <div className="mt-4 h-1 w-24 bg-linear-to-r from-cyan-500 to-indigo-600 rounded-full mx-auto lg:mx-0"></div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {countryFacts.map((country) => {
                        const { id, countryName, capital, population, interestingFact } = country;
                        return (
                            <div
                                key={id}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-px transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                            >
                                <div className="relative h-full rounded-[23px] bg-[#0f1115] p-8">
                                    <p className="mb-4 text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                        {countryName}
                                    </p>

                                    <div className="space-y-3">
                                        <p className="flex items-center gap-2 text-sm text-gray-400">
                                            <span className="font-bold uppercase tracking-wider text-cyan-500/80 text-[10px]">Capital:</span>
                                            <span className="text-gray-200">{capital}</span>
                                        </p>

                                        <p className="flex items-center gap-2 text-sm text-gray-400">
                                            <span className="font-bold uppercase tracking-wider text-cyan-500/80 text-[10px]">Population:</span>
                                            <span className="text-gray-200">{population.toLocaleString()}</span>
                                        </p>

                                        <div className="mt-6 border-t border-white/5 pt-4">
                                            <span className="block mb-2 font-bold uppercase tracking-wider text-cyan-500/80 text-[10px]">
                                                Interesting Fact:
                                            </span>
                                            <p className="text-sm leading-relaxed text-gray-400 italic">
                                                "{interestingFact}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-colors"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default About