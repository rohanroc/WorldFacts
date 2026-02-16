import React from 'react'
const Contact = () => {
    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    };

    const inputClasses = "w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-gray-500 transition-all focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/20";

    return (
        <section className="relative min-h-screen bg-[#0a0a0c] py-24 overflow-hidden">
            {/* Background Grid Decoration */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
                        Contact <span className="text-cyan-500">Us</span>
                    </h2>
                    <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600"></div>
                    <p className="mt-6 text-gray-400">Have questions about a specific territory? Reach out to our global team.</p>
                </div>

                <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-md md:p-12">
                    <form action={handleFormSubmit} className="space-y-6">
                        <div className="group relative">
                            <input
                                type="text"
                                className={inputClasses}
                                placeholder="Enter your name"
                                name="username"
                                required
                                autoComplete="off"
                            />
                        </div>

                        <div className="group relative">
                            <input
                                type="email"
                                className={inputClasses}
                                placeholder="Enter your email"
                                name="email"
                                required
                                autoComplete="off"
                            />
                        </div>

                        <div className="group relative">
                            <textarea
                                className={`${inputClasses} resize-none`}
                                rows="6"
                                placeholder="Enter your message"
                                name="message"
                                required
                                autoComplete="off"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-cyan-500 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#0a0a0c] transition-all hover:scale-[1.02] hover:bg-white hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95 hover:cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Ambient Glows */}
            <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[120px]"></div>
            <div className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-600/5 blur-[120px]"></div>
        </section>
    )
}

export default Contact