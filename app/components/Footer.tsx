import {
  Search,
  ShoppingBag,
  X,
  Play,
  Instagram,
  Facebook,
  Youtube,
  Pin as Pinterest,
} from "lucide-react";

export const Footer = () => (
  <footer className="bg-stone-100 py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-10 sm:gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <h4 className="text-2xl sm:text-3xl font-bold tracking-[0.2em] sm:tracking-[0.25em] mb-6 sm:mb-8">MASON'S</h4>
          <p className="text-[10px] text-stone-500 leading-relaxed mb-8 uppercase tracking-widest">
            © 2026 Mason's - P.IVA IT00156900458
            <br />
            Powered by Made in Evolve
          </p>
          <div className="flex gap-6 text-stone-400">
            <Facebook
              size={18}
              className="cursor-pointer hover:text-black transition-colors"
            />
            <Instagram
              size={18}
              className="cursor-pointer hover:text-black transition-colors"
            />
            <Youtube
              size={18}
              className="cursor-pointer hover:text-black transition-colors"
            />
            <Pinterest
              size={18}
              className="cursor-pointer hover:text-black transition-colors"
            />
          </div>
        </div>
        <div>
          <h5 className="uppercase-tracking mb-6 font-bold">Agency</h5>
          <ul className="text-[11px] space-y-4 text-stone-500 uppercase tracking-widest">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                History
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase-tracking mb-6 font-bold">Support</h5>
          <ul className="text-[11px] space-y-4 text-stone-500 uppercase tracking-widest">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Returns
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="uppercase-tracking mb-6 font-bold">Stay Updated</h5>
          <p className="text-[11px] text-stone-500 mb-6 uppercase tracking-widest">
            Sign up for the newsletter and get 10% off your first order
          </p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center border-b border-stone-300 pb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-none text-[11px] py-2 px-0 w-full focus:ring-0 uppercase tracking-widest placeholder:text-stone-300"
            />
            <button
              type="submit"
              className="uppercase-tracking text-[10px] font-bold hover:text-stone-600 transition-colors text-left sm:text-right"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-stone-200 mt-14 sm:mt-20 lg:mt-24 pt-10 sm:pt-12 flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDADe7Cx-rBDlCdCJpyB7KNRjDT6MK_GOW4DOnioF-vy3PAi9Yr8Bs8vxI3X1T7vMULcMwCTYwrIzlv89e_n1NM7Z9JlLITN-Sl47RQ-2191pM3Pz0Mmm6lc813IKbYVdM-xPnUs6qyQaWo1gDRuu5jGR8V_WTn_-FieCzHK_LEsVYtxjnPryfggtWrTqSWcXGVNnTLizsnDDKpCw3jJf4gmey-u8cJpRo17dJ0oEZy1klM_MSvhg9HCJ1m8rveqC7vW_OBBk-CXMJh"
            alt="Visa"
            className="h-4"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBixSwLw5y2aF9Qu3CtaH4mGJCXaUWWJUAmUJgovKMU0bgYfS8neoGYEDwI56BrSw_XkTcETgtSy5HBAh51zDNB_OCJpJokmXDiVXsUlu0COKVeLnbg5PyG102A3v3AEIsEYjD7Wow3pp01ZHQNvmsCnCr4_BNDAw9spMzHys7wdQBPvZe3RO6Hk1qbMbazpRSHEcm9Pk6diFNOZi8ZdNN8QdDv9BTLjaikQB5DpAr8wy1drOkewCllVvCg-Y5I1exLSI2YceA--nn"
            alt="Mastercard"
            className="h-4"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEyqeRzHgm61SCMizAnzlKTEJBVECniwUIaoetNxabZZlHmXnE9w-ygZ3QaEVgIc-HDWD_GoUt5uiDTQrIxKKWuCliHONwjEQxWFdjlHRZwKFZFbuGS4HsEjNkV_w5iwKYdN6gFlddT6Nc3eBiPkupWLwLIZkxYppQ53HtyTAtTdJU20VKMX8wkWIfAfHFx5lgTEU5uf7hhERPPrVtpajTukox7pVug93J0cZvxpKlDKDVYhR0nfZapJAeCo0NhR8rzFiVJMiH4Ls1"
            alt="Amex"
            className="h-4"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd1QRVFA5JfyRewfCr_7G1rR4iuUxOTSQuYJLu_UaAzfi6GvByzUTR0bk278el1EH69qnyq46PGO6EeevKzLHCe2uIK7UVoA26NC2tW7r_ysYSteT6eeslDrycDdl7Gy9y5OKBxpRKLnczW90MDX3uri8_RVTyrN8E8dyUMmTCpiQxusLLpTmHqGgD2ArvQnNTQJqgXJvoM7JaYXY5AIJ-MGvmP941Qo5ujERpsjrnjlAzSBT908OaV4cuxo80q6bNuSO8pjpuE8qW"
            alt="Paypal"
            className="h-4"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlDWwdpLpLweHzTswl71IAp89aZ08QE40dGcrCWnypAkbYKbW2k1Q6PrVlWOxy187GmD4VF6VPiD3E9fGQln23iHFXAgjdwyzo9_0PVKijnb2MXHmOQAao12d9XstQfV9UjOt9ynx61fogBatXIbGwK_OjcNQTVxM-V7z5Rc_cVNLbJxOfjgYRhe-Us68p7upiI3LoCO3Ym70r-KnDaDDQAfZ4myfM541Y_hYkapp9FGggHac5kdSTtJ06F2utfPN_wGBS-edYtY8M"
            alt="Apple Pay"
            className="h-4"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-[9px] text-stone-400 uppercase tracking-widest flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a href="#" className="hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Cookie Settings
          </a>
        </div>
      </div>
    </div>
  </footer>
);
