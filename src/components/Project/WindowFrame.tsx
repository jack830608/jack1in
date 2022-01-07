import React from "react";

type WindowFrameProps = {
  device: "mobile" | "desktop";
  url: string;
  image: string;
  content: string;
};
const WindowFrame: React.FC<WindowFrameProps> = ({
  device,
  url,
  image,
  content,
}) => {
  return (
    <div className="flex items-center flex-col lg:px-[10%]">
      {device !== "mobile" ? (
        <div
          className="w-full mx-[2.5%] cursor-pointer"
          onClick={() => window.open(url, "_blank")}
        >
          <div className="flex items-center pt-[7px] pr-[25px] pb-[5px] pl-[15px] lg:pt-[15px] lg:pr-[30px] lg:pb-[10px] lg:pl-[20px] justify-between bg-[#484848] rounded-t-xl">
            <div className="flex items-center">
              <div className="w-[6px] h-[6px] lg:w-[10px] lg:h-[10px] rounded-full m-1 bg-[#EF7A97]" />
              <div className="w-[6px] h-[6px] lg:w-[10px] lg:h-[10px] rounded-full m-1 bg-[#878787]" />
              <div className="w-[6px] h-[6px] lg:w-[10px] lg:h-[10px] rounded-full m-1 bg-[#2047CC]" />
            </div>
            <div className="w-[70%] bg-[#202124] text-xs py-1 px-4 rounded-md text-[#ecf5ff]">
              {url}
            </div>
          </div>
          <div className="flex items-center border-2 border-[#484848] rounded-b-md overflow-hidden">
            <img src={`/images/project/${image}`} width="100%" alt="project" />
          </div>
        </div>
      ) : (
        <div
          className="w-full mx-[2.5%] cursor-pointer"
          onClick={() => window.open(url, "_blank")}
        >
          <img src={`/images/project/${image}`} width="100%" alt="project" />
        </div>
      )}
      <div className="font-light text-sm px-[10%] py-[30px] w-full tracking-[2px] leading-6 text-[#ecf5ff] text-center mb-6">
        {content}
      </div>
    </div>
  );
};
export default WindowFrame;
