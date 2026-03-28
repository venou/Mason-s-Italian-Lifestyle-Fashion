export const PersonalShopper = () => (
  <section className="bg-stone-50 py-14 sm:py-20 lg:py-32 px-4 sm:px-6">
    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-10 sm:mb-16">
        <span className="uppercase-tracking text-stone-500 font-semibold">
          Personal Shopper
        </span>
        <span className="uppercase-tracking text-stone-500">For You</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-20">
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGL62XG1P_h8wurFLSPsZo04Jp-z7wzj8lpR_LWv3lATFKoGHFDJfDuGdDE9j8iWcTtaaSKsdHLXqsohl8BXCt_FL_4alHMKpfnsa3HoCAMO9r2_HMF5Rvv8t35EK59Xvz8PoH2UiEVmvOJ3CjsBNzQlgZ8l0AHU_m4_I5muWglizJevj884bCaueTMPUB0BCcS-_VVdfei0zYOO0bM-G2POUp8YupjnP20HMzOLge7zRatrtoraStdDi1EJZzN6yW9SL40r5NEhVB"
            alt="Store View 1"
            className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer shadow-md"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuVhUKNsG0TcmPno0jSqEck8DDEKWabWc2LGmXHAV_KhwZBopCUezsgjoB_fKu4qNfYdYXLB64Qc1ckdr5-059-orT3JDS_e_UV3IFIpOze06J-l0EBUhZA1e1P_PqTJI8W0iRPBjRQi3kE1EuMJL-mKrHRz-7YG6U2wHRb9WNUQtBIEO889hYMPH8B6BNcY7b0GpmBKvafAetWGpL8k2l_QGaDHAS2EmJf8PqEvoeUvtEMUvk-DJGAfds3EKeyACE5wF2tIZxbnkT"
            alt="Store View 2"
            className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-10">
          <h2 className="text-3xl sm:text-4xl serif uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Personal Shopper
          </h2>
          <p className="text-sm leading-relaxed text-stone-600">
            With our Personal Shopper service, you can discover the collections
            through a dedicated video call, in Italian or English, receiving
            tailored advice to help you choose the perfect pieces and optimize
            your time. Make your purchase immediately or review the selected
            looks at your own pace and complete the order whenever you prefer.
          </p>
          <button className="w-fit px-10 py-4 bg-black text-white text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-stone-800 transition-all duration-300 shadow-lg">
            Book on WhatsApp
          </button>
        </div>
      </div>
    </div>
  </section>
);
