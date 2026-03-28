import { motion, AnimatePresence } from "motion/react";

export const Categories = () => (
  <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-8 sm:mb-12">
      <span className="uppercase-tracking text-stone-500 font-semibold">
        Categories
      </span>
      <span className="uppercase-tracking text-stone-500 underline cursor-pointer hover:text-black transition-colors">
        Most Wanted
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
      >
        <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-6 relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVz-AObec54sLDwRSvcorGFiIOe0mai2QQSszN5i-gvzMMtZDaY_N_vIBtynBNQ1ruwAM_fd91DKRGyG6bUPSLfXw7zFswUIJuDnkq0rQhz-Sr9wUcP5uaGmG4cwhHI-FN8QJCVgjmBuYFT7-JHNq1mMvrOWWRQefcNKWujSZrBIfUuG6BIR2aSPU9mQSoFu-hJkgBZq33cEqInwslpDbtyndChECVDQOsgu1SqkUiaYuZkYNJqOUjelEcaaiiqiUG-Y7GfDK9xUQ6"
            alt="Sale FW25"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 px-1 sm:px-2">
          <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">
            SALE FW25
          </h3>
          <div className="text-[10px] uppercase tracking-[0.2em] space-x-4 sm:space-x-6">
            <a href="#" className="hover:underline underline-offset-4">
              Men
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Women
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="group cursor-pointer"
      >
        <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-6 relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnhO86l_95U6aszxbcaqncdjDBddW-27X0fc7KPDq1RMc6gcCLfZrt-_su7k12LdgWgN3tTVuRuIw0jQC8PJ9GPut2TmyS3ySJ-t77GhdzI7Rpzxz1ZHT27SxJOCqL9n2hooHZ_s96PJlhPBdHOXjdrcYQS6pccgExww6RWvNVKo3eD-gOnFTjWJKxCZYSzNmTzwn5mbFCeUpuAqpAVFnErnqAJQd74pXwLs06URksM6K-W1P1xSPYQhvrgvAuDg7ug8acjjhMUV1s"
            alt="New SS26"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 px-1 sm:px-2">
          <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">
            NEW SS26
          </h3>
          <div className="text-[10px] uppercase tracking-[0.2em] space-x-4 sm:space-x-6">
            <a href="#" className="hover:underline underline-offset-4">
              Men
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Women
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
