import React from "react";
import CommonHead from "./common/CommonHead";
import projectimg from "../assets/images/Projectimage.png";
import { CiStar } from "react-icons/ci";
import { BiRocket } from "react-icons/bi";
import { PiRanking } from "react-icons/pi";
import { MdOutlineWorkHistory } from "react-icons/md";

const Project = () => {
  return (
    <>
      <section id="project">
        <div className="container">
          <div className="flex justify-center">
            <CommonHead comh2={"One Tool — Endless Use Cases"} />
          </div>
          <div id="project-row">
            {/* ------------------ button */}
            <div className="py-[40px] flex justify-center gap-[16px]">
              <button className="w-[218px] bg-[#EFF2FC] text-[16px] flex gap-[8px] items-center font-semibold font-main text-primary hover:text-[#fff] hover:bg-[#6366F1] rounded-[6px] py-[8px] px-[16px]">
                <CiStar />
                Project Management
              </button>
              <button className="w-[160px] bg-[#EFF2FC] text-[16px] flex gap-[8px] items-center font-semibold font-main text-primary hover:text-[#fff] hover:bg-[#6366F1] rounded-[6px] py-[8px] px-[16px]">
                <MdOutlineWorkHistory />
                Remote Work
              </button>
              <button className="w-[184px] bg-[#EFF2FC] text-[16px] flex gap-[8px] items-center font-semibold font-main text-primary hover:text-[#fff] hover:bg-[#6366F1] rounded-[6px] py-[8px] px-[16px]">
                <BiRocket />
                Product Release
              </button>
              <button className="w-[206px] bg-[#EFF2FC] text-[16px] flex gap-[8px] items-center font-semibold font-main text-primary hover:text-[#fff] hover:bg-[#6366F1] rounded-[6px] py-[8px] px-[16px]">
                <PiRanking />
                Campaign Planning
              </button>
            </div>

            <div className="bg-[#F3F6FF] flex justify-center gap-[24px] py-[48px] items-center">
              {/* -------------- left-side */}
              <div>
                <h2 className="text-[28px] font-extrabold font-main text-main">
                  Project management
                </h2>
                <div className="w-[416px] pt-[24px]">
                  <p className="text-[16px] font-normal font-main text-primary">
                    Vestibulum nunc lectus auctor quis. Natoque lectus tortor
                    lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi.
                    Vitae, donec facilisis sed nunc netus. Venenatis posuere
                    faucibus enim est. Vel dignissim morbi blandit morbi tellus.
                    Arcu ullamcorper quis enim.
                  </p>
                </div>
              </div>
              {/* -------------- right-side */}
              <div>
                <img src={projectimg} alt="project-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
