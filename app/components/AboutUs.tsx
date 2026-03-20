import { Play } from "lucide-react";
import { motion } from "motion/react";

export const AboutUs = () => (
  <section className="max-w-[1400px] mx-auto py-14 sm:py-20 lg:py-32 px-4 sm:px-6 border-t border-stone-100">
    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-10 sm:mb-16">
      <span className="uppercase-tracking text-stone-500 font-semibold">
        About Us
      </span>
      <span className="uppercase-tracking text-stone-400">Est. 1974</span>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">
      <div className="bg-stone-200 aspect-video relative group overflow-hidden shadow-lg">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOuhPl5njgHyxUVDFNWTln4kWgt5E3l3eawCXBmeXTEOlRHC0G9Bws5AoH7BdP5kZeFzhL_n7n40vbG5pHrUgauiIedMHFWuA9KedDW9hf9tVXgvhHeF7FFqoJvUKju9A5mE7SjxyMG4_i14zPUcZcFXPqRnaZuuRz-fjXTZ9EXdJeqRYXOEcdwpCPytJ6yZPwT0sAWhIwhUmLbE9w7_lpJRSYXnSPUnNJPgb25Tl2_1_epjwqiHY55IFJ9FikW0UnceId7aIJO7BQ"
          alt="Craftsmanship"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 sm:w-20 sm:h-20 border border-white rounded-full flex items-center justify-center text-white cursor-pointer bg-black/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <Play size={20} fill="currentColor" className="ml-1 sm:size-6" />
          </motion.div>
        </div>
      </div>
      <div className="space-y-8 sm:space-y-12">
        <p className="text-sm leading-relaxed text-stone-600 max-w-lg">
          From the renowned tailoring atelier of Vilmo Martini in Carrara to the
          international Mason's brand: discover how, in 1974, his son Giorgio
          transformed his father's craftsmanship into an entrepreneurial journey
          that still today blends artisanal tradition and innovation in the
          world of fashion.
        </p>
        <button className="px-10 py-3 border border-black text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-black hover:text-white transition-all duration-300">
          About Us
        </button>
        <div className="pt-6 sm:pt-12">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGFctGSnnFUa2fpINpecVaLnsusQeqoewLM7WLz3mYJqpsO-k0D7jO1-oVjxqk8qOZXC99B-Ny136KzeznM2QKQ-777uzClQatgv3xb-SRNsEh_hwEavD1N_6MsvlhI17ZiMSs9gMbRQLnd3rlCXJYz5o-C-LjeR1J7g4uobyLPiIh9gS2-QfCUhzWCPy76FxZd-vd1y-cRd0O8SRS6FowUMwWcyjM9pyporxIppNC51SkNBV1eNP9siAJkhgFJU5mzRxKEwpkwPH8"
            alt="Handwritten Quote"
            className="w-56 sm:w-72 lg:w-80 opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);
