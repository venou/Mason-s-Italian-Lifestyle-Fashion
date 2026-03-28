

export const MilanoFeature = () => (
  <section className="bg-stone-50 py-14 sm:py-20 lg:py-32 px-4 sm:px-6">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
      <div className="lg:col-span-3">
        <div className="uppercase-tracking text-stone-400 mb-8 font-medium">
          Models
        </div>
        <h2 className="text-4xl sm:text-5xl serif mb-6 sm:mb-8">MILANO</h2>
        <p className="text-[13px] leading-relaxed text-stone-600 mb-10">
          The <strong>Milano</strong> is Mason's <strong>extra slim</strong>{" "}
          chino, featuring a tapered line, a more comfortable hip and a narrow
          hem. In <strong>SS26</strong> it comes in{" "}
          <strong>gabardine, sartorial denim</strong> and in the{" "}
          <strong>Jogger</strong> versions in <strong>linen and cotton</strong>{" "}
          or <strong>Travel & Dynamic</strong> fabrics. A model designed for
          those seeking modern proportions and sartorial rigour in the summer
          season.
        </p>
        <button className="px-8 py-3 border border-black text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-black hover:text-white transition-all duration-300">
          Discover the model
        </button>
      </div>

      <div className="lg:col-span-6 relative group order-first lg:order-none">
        <div className="aspect-square bg-white shadow-sm overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoKGYz_JBxcdVouoGJ4wrhe9BDARGzhBUp_7kesmK6WHiLD39gQBAtCxnsqO3ykWMYbFmoL9r6Sn4Y1VUPYkchqpqwhrD3BJPbRmv9Y3xUP7_vCJCEmEabgwSsgAGoR-7l4Na8usdgSrw2yA2eWFfAvEDLzj3oP11p-0rzoYd_5XuISZJlbuWlLw_Hk1X95lNbQJuyFwDw9XxTgpuLffeHcSyYy0fyMVN_4Y2_Dv9HWBNiojPjIRX-O3LoUheQAOPcsa5_kQCCJf58"
            alt="Milano Chino Detail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center pointer-events-none">
          <p className="uppercase tracking-[0.3em] text-[10px] mb-2 font-medium">
            Milano
          </p>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl serif italic">Extra-Slim fit</h3>
        </div>
      </div>

      <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-y-8 sm:gap-y-10 lg:gap-y-12 gap-x-4">
        <div className="col-span-2 flex justify-between uppercase-tracking border-b border-stone-200 pb-3 mb-4 font-semibold">
          <span>Men</span>
          <span className="text-stone-300">Donna</span>
        </div>
        {[
          {
            name: "Milano",
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzcwXhss1lQvR8SKrqjTK1TTWclguLd3ZMzPnkONE-fUcZYBK6tqeeHu9rnbmww-fxdfv_LMxeCdzpAbnwLNiANq9tfp367PnlX2z8qYwo5cFOyJCusb1I91g0d7PN9HsGTvmfBpjyOmCLNFGoWAWMDFCDS35xdde-cNQnTrsaro9lIzGNFU0E_nugxdDIjN__jB0DbLnbaE7Rg_2qDQW-2MidSH4dP5v65ESPAwTy5GzraZV1eI7U7ktU-2XhdRNO9txRXgGLXng-",
          },
          {
            name: "New York Carrot",
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo-Dpcr_FYYftEQSWI8I7vr4mcX_K4__Q5fVliRiKldxTl90jSTQKaMbe6kJvyU_QtPHyHVwkvCurNvLZxWb6W8CcWfDV0jhD0budN8sLsfWg3DjeQ_j4PyAy-VOyR3dSb-Vj_N-QZjCI95ysorLHcL-OWBeUwJ9gQXkmtUQMzFGx181DZGWZv6KMfyF517JF7vsBcbZvJl5YrXg2WhGeIARrJQZ7rYjokXs99WtCkbqi62HKDtWxAtx6cPl2LxlzQStY0fEs_NScm",
          },
          {
            name: "New York",
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPJWyIV5RXveDDIjxnYmQgLvD_wjcIhpu2rSiDkKD3RBhCtOgbh8oAKM0s19bgEB3IjTp7k-kWnlHLTIfMKMOGimzIH4ID8K7VaPpSLyh8gJwyikoBD3UalljOBNrFE2lrm8wdZjlDitRFKISFVz4sQLc_7eBVfN5CQQiSNIiPc8MfF9UjcSXIkdB5yn72k4eSPWHC4MvGHifG0xAYyP4Vw2BL3RALAnR0lq5HWGUCK_YOHmuFcQRYzpY1u3wJaweXZtpKzgKrFVlb",
          },
          {
            name: "Torino",
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPWZVoR6EIUi7EvUDunM8gVB0EgvOJmwobFNYAVviZC5fRH2IU8wVGec70iTX1jkyY43XXcW-v3NamnCDGSTk6Hl5lc5_meulyEdm8G4s4k5D0fW-s6X_PFDgYVjf4CfLZmyq9dAKSuC1F7eo_L4fESaMZiHj_WWa5PXXZyXTUbJHZ5zhNMWiqNqNudLeC7o79kCWGq9SsK8nP0co*MSZP25jABNkUiM5gEDYjgX-zuwVsBRUDGeXKF2AnkSlSRginj9FFADWfDy8a",
          },
        ].map((fit, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-300"
          >
            <img
              src={fit.src}
              alt={fit.name}
              className="mb-4 h-20 sm:h-24 lg:h-32 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-[9px] uppercase tracking-[0.2em] font-medium">
              {fit.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
