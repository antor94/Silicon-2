import React from "react";
import { CiMail } from "react-icons/ci";

const Email = () => {
  return (
    <>
      <section id="email" className="pt-16 md:pt-[112px]">
        <div className="container mx-auto px-4">
          <div id="email-row" className="bg-main text-center rounded-[8px]">
            <div className="pt-12 md:pt-[96px]">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-extrabold font-main text-[#fff]">
                Ready to Get Started?{" "}
              </h2>
            </div>
            <div className="pt-6 md:pt-[24px]">
              <p className="text-base md:text-lg font-normal font-main text-[#fff]">
                Organize your tasks with a 14-day free trial
              </p>
            </div>
            {/* -------------- email part */}
            <div className="flex justify-center">
              <div className="w-full max-w-xl bg-[#fff] rounded-[8px] mt-10 mb-4 flex flex-col sm:flex-row justify-between items-center">
                <div className="w-full sm:w-3/5 flex items-center pl-4 py-2">
                  <CiMail className="text-xl md:text-2xl" />
                  <input
                    className="pl-2 text-base md:text-[16px] outline-none font-normal font-main text-[#B4B7C9] w-full bg-transparent"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <button className="w-full sm:w-auto py-3 px-8 bg-[#6366F1] rounded-b-[8px] sm:rounded-b-none sm:rounded-r-[8px] text-base md:text-[16px] font-semibold font-main text-[#fff]">
                  Get started for free
                </button>
              </div>
            </div>
            <div className="pb-12 md:pb-[96px]">
              <p className="text-xs md:text-sm font-normal font-main text-[#fff]">
                No subscriptions. No annual fees. No lock-ins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Email;
