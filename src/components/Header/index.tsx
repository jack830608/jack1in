import { css } from "@emotion/css";
import { useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";

const headerDesktopLinkActive = css`
  color: #ef7a97;
  :after {
    left: 0 !important;
    width: 100% !important;
  }
`;
const headerDesktopLink = `text-[#ecf5ff] py-1 mx-4 tracking-[4px] text-xs font-[Kanit] relative ${css`
  transition: all 0.3s ease;
  :after {
    content: "";
    bottom: 0;
    display: block;
    height: 1px;
    position: absolute;
    background: #ef7a97;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    left: 50%;
    width: 0;
  }
  :hover {
    color: #ef7a97;
    :after {
      left: 0;
      width: 100%;
    }
  }
`}`;
const headerMobileLink = `text-sm block font-light text-center py-[10px] tracking-[4px] text-[#ecf5ff] font-[Raleway,sans-serif] transition rounded-[5px] my-[25px] mx-[20%]`;
const Header: React.FC = () => {
  const section = useSelector((state: State) => state.section);
  const [open, setOpen] = useState(false);
  const isInView = useCallback(
    (s: string) => {
      return section[section.length - 1] === s;
    },
    [section]
  );
  const isInBanner = useMemo(() => section.includes("Banner"), [section]);
  const tab = [
    {
      name: "INTRODUCTION",
      id: "AboutMe",
    },
    {
      name: "EXPERIENCE",
      id: "Experience",
    },
    {
      name: "PROJECT",
      id: "Project",
    },
  ];
  return (
    <div
      className={`z-[50] pt-[10px] lg:pt-[20px] pb-[10px] px-[15px] lg:px-[2vw] w-full fixed top-0 left-0 z-100 transition flex items-center justify-between ${css`
        background: ${open ? "rgba(21, 21, 21, 0.97)" : "rgba(0, 0, 0, 0)"};
        @media only screen and (min-width: 1024px) {
          background: transparent;
        }
      `}`}
    >
      <a
        href="#Banner"
        onClick={() => setOpen(false)}
        className={`transition-all duration-300 ease-linear	${
          isInBanner
            ? "lg:opacity-60 lg:scale-90"
            : "lg:opacity-100 lg:scale-100"
        }`}
      >
        <img
          src="images/icon_nobackground.png"
          alt="logo"
          className="h-[45px] lg:mx-5 transition"
        />
      </a>
      <div
        className={`items-center justify-center hidden lg:flex transition-all duration-300 ease-linear ${
          isInBanner
            ? "lg:opacity-60 lg:scale-90"
            : "lg:opacity-100 lg:scale-100"
        }`}
      >
        {tab.map((i) => (
          <a
            className={`${headerDesktopLink} ${
              isInView(i.id) ? headerDesktopLinkActive : ""
            }`}
            href={`#${i.id}`}
            key={i.id}
          >
            {i.name}
          </a>
        ))}
      </div>
      <div
        className="lg:hidden w-[30px] h-[20px] relative transition cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span
          className={`absolute top-0 h-[3px] w-full rounded-[9px] transition bg-[#ef7a97] origin-left ${
            open ? "rotate-45	left-[8px]" : "rotate-0 left-0"
          }`}
        />
        <span
          className={`absolute left-0 top-[10px] h-[3px] rounded-[9px] transition bg-[#2047cc] origin-left ${
            open ? "w-0 opacity-0" : "w-full opacity-100"
          }`}
        />
        <span
          className="absolute left-0 top-[20px] h-[3px] w-full rounded-[9px] transition bg-[#ef7a97] origin-left"
          style={{
            left: open ? "8px" : "0",
            transform: open ? "rotate(-45deg)" : "rotate(0)",
            background: open ? "#2047cc" : "#ef7a97",
          }}
        />
      </div>
      <div
        className={`lg:hidden absolute left-0 top-[65px] w-full transition-all overflow-hidden ${css`
          height: ${open ? "calc(100vh - 65px)" : 0};
          background: ${open ? "rgba(21, 21, 21, 0.97)" : "rgba(0, 0, 0, 0)"};
        `}`}
      >
        {tab.map((i) => (
          <a
            className={`${headerMobileLink} ${css`
              background: ${isInView(i.id)
                ? "rgba(255, 255, 255, 0.1)"
                : "transparent"};
            `}`}
            href={`#${i.id}`}
            onClick={() => setOpen(false)}
            key={i.id}
          >
            {i.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
