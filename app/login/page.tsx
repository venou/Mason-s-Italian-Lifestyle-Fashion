import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const accountBenefits = [
  "Priority access to new seasonal drops",
  "Saved preferences for your personal shopper",
  "Faster checkout with your delivery details ready",
];

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfc]">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <section className="border-b border-stone-200 bg-[linear-gradient(180deg,#f5f2ed_0%,#fcfcfc_62%,#ffffff_100%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-20">
            <div className="uppercase tracking-[0.18em] text-[10px] sm:text-[11px] text-stone-500 mb-5">
              Account Atelier
            </div>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-stretch">
              <div className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[640px]">
                <img
                  src="https://us.masons.it/cdn/shop/files/MG_0789.jpg?v=1771845353&width=1400"
                  alt="Mason's seasonal campaign"
                  className="absolute inset-0 h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,17,17,0.06)_0%,rgba(17,17,17,0.38)_100%)]" />

                <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10 text-white">
                  <div className="max-w-xl">
                    <p className="uppercase tracking-[0.22em] text-[10px] sm:text-[11px] mb-4 text-stone-100/85">
                      Mason&apos;s Members
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] font-light serif">
                      Enter your wardrobe, the Italian way.
                    </h1>
                  </div>

                  <div className="max-w-md space-y-4">
                    <p className="text-sm sm:text-base leading-relaxed text-stone-100/90">
                      Sign in to revisit your curated picks, follow seasonal
                      arrivals, and move through checkout with effortless ease.
                    </p>
                    <div className="flex items-center gap-3 uppercase tracking-[0.16em] text-[10px] sm:text-[11px]">
                      <ShieldCheck size={16} />
                      Secure access for your Mason&apos;s account
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-stone-200 shadow-[0_20px_70px_rgba(28,25,23,0.08)]">
                <div className="grid sm:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-10 border-b sm:border-b-0 sm:border-r border-stone-200">
                    <p className="uppercase tracking-[0.18em] text-[10px] sm:text-[11px] text-stone-500 mb-3">
                      Sign In
                    </p>
                    <h2 className="text-3xl sm:text-4xl leading-tight mb-4">
                      Welcome back.
                    </h2>
                    <p className="text-sm text-stone-500 leading-relaxed mb-8">
                      Access your orders, favourites, and personal style
                      journey.
                    </p>

                    <form className="space-y-5">
                      <label className="block">
                        <span className="block uppercase tracking-[0.16em] text-[10px] text-stone-500 mb-3">
                          Email Address
                        </span>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          className="w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-stone-300 focus:border-black"
                        />
                      </label>

                      <label className="block">
                        <span className="block uppercase tracking-[0.16em] text-[10px] text-stone-500 mb-3">
                          Password
                        </span>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-stone-300 focus:border-black"
                        />
                      </label>

                      <div className="flex items-center justify-between gap-4 pt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em]">
                        <label className="flex items-center gap-3 text-stone-500">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded-none border-stone-300 accent-black"
                          />
                          Keep me signed in
                        </label>
                        <Link
                          href="#"
                          className="text-stone-500 hover:text-black"
                        >
                          Forgot password
                        </Link>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-4 inline-flex items-center justify-center gap-3 bg-black px-6 py-4 text-white uppercase tracking-[0.18em] text-[10px] sm:text-[11px] transition hover:bg-stone-800"
                      >
                        Enter Account
                        <ArrowRight size={15} />
                      </button>
                    </form>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10 bg-stone-50/80">
                    <p className="uppercase tracking-[0.18em] text-[10px] sm:text-[11px] text-stone-500 mb-3">
                      Create Account
                    </p>
                    <h2 className="text-3xl sm:text-4xl leading-tight mb-4">
                      Join Mason&apos;s.
                    </h2>
                    <p className="text-sm text-stone-500 leading-relaxed mb-8">
                      Build your profile to save your essentials and receive a
                      more tailored experience.
                    </p>

                    <ul className="space-y-4 mb-8">
                      {accountBenefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-sm text-stone-700"
                        >
                          <Check size={16} className="mt-0.5 text-stone-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="w-full border border-stone-900 px-6 py-4 uppercase tracking-[0.18em] text-[10px] sm:text-[11px] transition hover:bg-stone-900 hover:text-white"
                    >
                      Create Your Profile
                    </button>

                    <div className="mt-10 border-t border-stone-200 pt-6">
                      <p className="uppercase tracking-[0.16em] text-[10px] text-stone-500 mb-3">
                        Private Styling
                      </p>
                      <p className="text-sm text-stone-500 leading-relaxed">
                        Need guidance before signing in? Discover our editorial
                        collections or speak with a Mason&apos;s personal
                        shopper.
                      </p>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 mt-5 uppercase tracking-[0.18em] text-[10px] sm:text-[11px] hover:text-stone-500"
                      >
                        Explore the home collection
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
