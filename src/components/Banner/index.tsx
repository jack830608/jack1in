import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles";

type BannerProps = {
  show: boolean;
};
const Banner: React.FC<BannerProps> = (props) => {
  const intro = "I'm Jacklin.";
  const [word, setWord] = useState("");
  useEffect(() => {
    if (props.show) {
      const animation = setInterval(() => {
        setWord((prev) => intro.slice(0, prev.length + 1));
      }, 250);
      return () => clearInterval(animation);
    }
  }, [props.show]);
  const animationIsEnd = word === intro;
  return (
    <div
      id="Banner"
      className={`w-screen h-screen relative ${css`
        background: linear-gradient(
          105deg,
          rgb(32, 25, 36) 75%,
          rgba(52, 48, 56, 0.6)
        );
      `}`}
    >
      <div
        className={`bg-no-repeat absolute w-screen h-screen z-10 ${css`
          background-image: url("/images/head.png");
          background-size: auto 50%;
          background-position: bottom -35px right -30px;
          @media only screen and (min-width: 768px) {
            background-size: auto 60%;
          }
          @media only screen and (min-width: 1024px) {
            background-size: auto 90%;
          }
        `}`}
      >
        <div className="flex flex-col justify-center items-center w-screen h-screen absolute bg-[rgba(0,0,0,0.4)] z-10">
          <div className="text-[48px] md:text-[80px] lg:text-[110px] text-center font-bold text-[#ECF5FF] font-[Kanit] cursor-default">
            {word}
            <span
              className={`font-light ${css`
                animation: ${animationIsEnd
                  ? "Line 1s infinite ease-in-out"
                  : "none"};
              `}`}
            >
              ｜
            </span>
          </div>
          <div
            className={`flex justify-center items-center transition-opacity text-[#ECF5FF] text-lg md:text-2xl ${
              animationIsEnd ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="https://www.facebook.com/WEIJIE.LIN7777"
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-1 transition-transform p-3 md:p-5"
            >
              <i className="fab fa-facebook-square" />
            </a>
            <a
              href="https://www.linkedin.com/in/jack1in/"
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-1 transition-transform p-3 md:p-5"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/jack830608"
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-1 transition-transform p-3 md:p-5"
            >
              <i className="fab fa-github-square" />
            </a>
            <a
              href="https://line.me/ti/p/0f4vdsbN3Z"
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-1 transition-transform p-3 md:p-5"
            >
              <i className="fab fa-line" />
            </a>
            <a
              href="mailto:jack830608@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-1 transition-transform p-3 md:p-5"
            >
              <i className="fab fa-google-plus-square" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-0 absolute bottom-10 left-1/2 z-10 flex justify-center">
        <div className="w-[25px] h-[40px] rounded-[40px] border-2 border-white shrink-0 cursor-pointer flex justify-center">
          <div
            className={`w-1 h-2 rounded-[10px] bg-[#ECF5FF] mt-1 ${css`
              animation: Ball linear infinite 1s;
            `}`}
          />
        </div>
      </div>
      <Particles
        options={particlesOptions as ISourceOptions}
      />
    </div>
  );
};
export default Banner;
