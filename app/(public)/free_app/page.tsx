export default function GTSSApplicationForm() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-gradient-to-br from-[#050816] via-[#07142b] to-black border border-cyan-500/30 rounded-[32px] shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* LEFT PANEL */}
          <div className="relative p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-cyan-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,191,255,0.2),_transparent_45%)]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 px-4 py-2 rounded-full text-cyan-300 text-sm font-semibold tracking-wide mb-6">
                🚀 GTSS BUSINESS MAKEOVER APPLICATION
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-none mb-6 uppercase">
                Your Hustle <span className="text-cyan-400">Deserves</span> To
                Look Like A Million Bucks.
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We’re selecting{" "}
                <span className="text-cyan-400 font-bold">
                  10 hungry businesses
                </span>{" "}
                for a complete digital transformation — website, branding, promo
                designs, and online exposure.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  "Premium high-converting website",
                  "Professional brand visuals & promo posters",
                  "More credibility, more attention, more customers",
                  "100% FREE — no hidden fees",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                      ✓
                    </div>
                    <p className="text-gray-200 font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
                <p className="text-red-400 font-black text-lg uppercase tracking-wide">
                  Only 10 Businesses Will Be Selected.
                </p>
                <p className="text-gray-300 mt-2">
                  The most aggressive and serious hustles get picked first.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-10 lg:p-14 bg-[#02050f]">
            <div className="mb-8">
              <h2 className="text-4xl font-black uppercase mb-3">Apply Now</h2>
              <p className="text-gray-400 text-lg">
                Fill this form properly so we can review your business.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-cyan-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your business name"
                  className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide text-cyan-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide text-cyan-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +234..."
                    className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-cyan-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-cyan-300 mb-2">
                  What Type Of Business Do You Run?
                </label>
                <select className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none text-white transition">
                  <option className="bg-black">Fashion / Boutique</option>
                  <option className="bg-black">Food / Restaurant</option>
                  <option className="bg-black">Barbing / Beauty</option>
                  <option className="bg-black">Tech / Gadgets</option>
                  <option className="bg-black">Freelance Services</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-cyan-300 mb-2">
                  Instagram / Social Media Handle
                </label>
                <input
                  type="text"
                  placeholder="@yourbusiness"
                  className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-cyan-300 mb-2">
                  Why Should GTSS Pick Your Business?
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your hustle, goals, and why your business deserves this makeover..."
                  className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 transition resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-cyan-300 mb-2">
                  What Do You Need Most Right Now?
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Website",
                    "Branding",
                    "Promo Designs",
                    "More Customers",
                  ].map((item, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-4 cursor-pointer hover:border-cyan-400 transition"
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-cyan-400"
                      />
                      <span className="text-gray-200 font-medium">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-cyan-400 hover:bg-cyan-300 text-black font-black uppercase tracking-wider text-lg py-5 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-[1.02]"
              >
                🚀 Secure My Spot
              </button>

              <p className="text-center text-sm text-gray-500 leading-relaxed">
                By submitting this form, your application will be reviewed by
                the GTSS team. Selected businesses will be contacted directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
