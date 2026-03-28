export const AnnouncementBar = () => (
  <div className="bg-white text-[10px] py-2 px-4 border-b border-stone-200 uppercase tracking-widest">
    <div className="grid grid-cols-1 sm:grid-cols-3 items-center text-center sm:text-left gap-2">
      {/* Left */}
      <div className="text-left">
        Sign up for the newsletter - 10% off your first order
      </div>
      {/* Center */}
      <div className="flex justify-center">
        <img
          className="w-12"
          src="https://us.masons.it/cdn/shop/files/masons-clothing-logo-m.png?height=200&v=1768898231"
          alt="M"
        />
      </div>
      {/* Right */}
      <div className="flex justify-end">
        <span className="cursor-pointer">USD / EN</span>
      </div>
    </div>
  </div>
);
