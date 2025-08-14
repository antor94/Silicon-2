import React from "react";
import CommonHead from "./common/CommonHead";
import ConnectedCommon from "./common/ConnectedCommon";
import { GiConversation } from "react-icons/gi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdNotificationsActive } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbUsersPlus } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { RiTaskFill } from "react-icons/ri";
import { VscChecklist } from "react-icons/vsc";

const Connected = () => {
  return (
    <>
      <section id="connected" className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          {/* --------------- heading */}
          <div className="flex justify-center mb-8 md:mb-12">
            <CommonHead comh2={"Stay Organized & Connected"} />
          </div>
          <div
            id="connected-row"
            className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 pt-8 md:pt-16"
          >
            <ConnectedCommon
              conectlogo={<GiConversation />}
              conecth2={"Task Comments"}
              conectp={
                "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
              }
            />
            <ConnectedCommon
              conectlogo={<TbDeviceAnalytics />}
              conecth2={"Task Comments"}
              conectp={
                "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
              }
            />
            <ConnectedCommon
              conectlogo={<MdNotificationsActive />}
              conecth2={"Task Comments"}
              conectp={
                "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
              }
            />
            <ConnectedCommon
              conectlogo={<VscChecklist />}
              conecth2={"Task Comments"}
              conectp={
                "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
              }
            />
            <ConnectedCommon
              conectlogo={<RiTaskFill />}
              conecth2={"Task Comments"}
              conectp={
                "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
              }
            />
            <ConnectedCommon
              conectlogo={<TbUsersPlus />}
              conecth2={"Task Comments"}
              conectp={
                "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
              }
            />
            <ConnectedCommon
              conectlogo={<BiSupport />}
              conecth2={"Task Comments"}
              conectp={
                "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
              }
            />
            <ConnectedCommon
              conectlogo={<MdSecurity />}
              conecth2={"Task Comments"}
              conectp={
                "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Connected;
