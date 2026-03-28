import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const NewsletterPopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-stone-400 hover:text-black transition-colors z-10"
          >
            <X size={24} />
          </button>
          <div className="p-8 sm:p-10 lg:p-16 flex flex-col justify-center text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl serif mb-4 sm:mb-6 uppercase tracking-[0.08em] sm:tracking-[0.1em] leading-tight">
              SIGN UP AND JOIN MASON'S
            </h2>
            <p className="text-[11px] sm:text-xs text-stone-500 mb-6 sm:mb-10 uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-loose">
              Sign up for early access to promotions, new products and more
            </p>
            <div className="space-y-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-stone-200 focus:border-black focus:ring-0 py-3 sm:py-4 text-sm uppercase tracking-widest px-4"
              />
              <button className="w-full bg-black text-white py-4 sm:py-5 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-stone-800 transition-all duration-300">
                Continue
              </button>
            </div>
            <p className="text-[9px] text-stone-400 mt-6 sm:mt-8 px-2 sm:px-10 uppercase tracking-widest leading-relaxed">
              By subscribing, you agree to receive marketing e-mails
            </p>
          </div>
          <div className="hidden md:block relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByJbLwwTZRFiTCk9tnG3_6mFNZOLPn0Mwmafshk7TohBMEZNmgFWZGrww-0H4X4xroRdWRFPmkFRBhbB-KeteNJhbXOgBvbuoWdpdWyRRc-SG0kn9BK_uuglwAW164LpkPv9QBhxR9m1mCJ8SEmF09KD1_HJB3Tsv6HjXQmsXaZkOHQTWryonO3tOrQjCrpDRSr_lp-9I77QsBCOpq7tudemv2SU7r8a9-vp7QkclE26VhDO0tLxoLKDmpvKQwa401cVdNvtKD1h-8"
              alt="Mason's Lifestyle"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
