import { motion, AnimatePresence } from "motion/react";

export const Hero = () => (
  <section className="relative h-[78vh] sm:h-[84vh] lg:h-[90vh] overflow-hidden">
    <img
      src="https://us.masons.it/cdn/shop/files/MG_0789.jpg?v=1771845353&width=1920"
      alt="Hero Collection"
      className="w-full h-full object-cover object-top"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 hero-overlay flex flex-col justify-center items-center text-white text-center px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 sm:mb-10 serif leading-tight"
      >
        NEW COLLECTION SS26
      </motion.h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto max-w-sm sm:max-w-none">
        <button className="px-6 sm:px-10 py-3 sm:py-4 border border-white text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
          Men
        </button>
        <button className="px-6 sm:px-10 py-3 sm:py-4 border border-white text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
          Women
        </button>
      </div>
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.3em] font-medium opacity-80 whitespace-nowrap">
        Discover the new collection: artisanal passion since 1974
      </div>
    </div>
  </section>
);
