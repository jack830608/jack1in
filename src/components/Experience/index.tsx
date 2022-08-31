import React, { useEffect } from "react";
import { css } from "@emotion/css";
import useIntersection from "../../hooks/useIntersection";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../store";

const timelineBlock = (
  dir: "left" | "right" = "left"
) => `relative ml-[45px] mr-[10px] lg:ml-[5%] lg:mr-[5%] bg-[#272727] rounded-[5px] p-4 lg:p-6 text-[#ecf5ff] lg:p-[22px] lg:w-[40%] lg:my-[5%]
${dir === "right" ? "lg:ml-auto" : ""} 
${css`
  :before {
    content: "";
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right-color: #272727;
  }
  @media only screen and (min-width: 1024px) {
    :before {
      top: 20px;
      ${dir}: 100%;
      border: 10px solid transparent;
      border-color: ${dir === "left"
        ? "transparent transparent transparent #272727"
        : "transparent #272727 transparent transparent"};
    }
  }
`}`;
const timelineCompany = "text-[hsla(0,0%,100%,.9)] text-lg mb-[5px] font-semibold";
const timelinePeriod = "text-[hsla(0,0%,100%,.9)] text-sm font-light mb-4";
const timelineInfo = "text-[hsla(0,0%,100%,.7)] text-sm font-light leading-[22px] list-disc";
const timelineSpot =
  "border-[5px] border-[#151515] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] left-[12px] lg:left-[50%] translate-x-[-15px] lg:translate-x-[-20px] top-2 rounded-full absolute bg-[#e7b266]";

type ExperienceProps = {};
const Experience: React.FC<ExperienceProps> = () => {
  const section = useSelector((state: State) => state.section);
  const dispatch = useDispatch();
  const [ref, isInView] = useIntersection(false);
  useEffect(() => {
    if (isInView) {
      dispatch({ type: "ADD_SECTION", payload: "Experience" });
    } else {
      dispatch({ type: "REMOVE_SECTION", payload: "Experience" });
    }
  }, [dispatch, isInView]);
  return (
    <section
      ref={ref}
      id="Experience"
      className={`${
        section.includes("Experience") ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 ease-in-out bg-[#151515]`}
    >
      <div
        className={`px-[5%] py-[35px] lg:px-[10%] lg:py-[70px] relative max-w-[1600px] mx-auto ${css`
          :before {
            content: "Experience";
            color: #ecf5ff;
            font-weight: 500;
            position: absolute;
            font-size: 5em;
            left: 4%;
            opacity: 0.1;
          }
          @media only screen and (min-width: 1024px) {
            :before {
              font-size: 9em;
              left: 10%;
            }
          }
        `}`}
      >
        <div>
          <h1
            className={`font-bold z-10 text-[48px] lg:text-[70px] absolute top-[80px] left-[10%] lg:top-[160px] lg:left-[17%] tracking-[2px] cursor-default text-transparent font-[Kanit] bg-clip-text bg-no-repeat lg:bg-fixed ${css`
              background-image: url(/images/Experience.jpg);
              background-position: 20%;
              background-size: 100%;
            `}`}
          >
            Experience
          </h1>
        </div>
        <div className="mt-[150px] lg:mt-[250px]">
          <div
            className={`relative pt-[10px] max-w-[1600px] m-auto ${css`
              :before {
                content: "";
                position: absolute;
                top: 0;
                left: 10px;
                height: 100%;
                width: 5px;
                background-image: url(/images/Experience.jpg);
                background-position: 50%;
                background-size: auto 200%;
                background-repeat: no-repeat;
              }
              :after {
                content: "";
                display: table;
                clear: both;
              }
              @media only screen and (min-width: 1024px) {
                :before {
                  background-attachment: fixed;
                  left: 50%;
                  margin-left: -3px;
                  width: 7px;
                }
              }
            `}`}
          >
            <div className="my-[32px] lg:my-[64px] relative">
              <div className={timelineSpot} />
              <div className={timelineBlock("left")}>
                <h2 className={timelineCompany}>Positive Grid</h2>
                <div className={timelinePeriod}>
                  <span className="mr-[10px]">Senior Front-end Developer</span>
                  <i>2020-08 ~ Now</i>
                </div>
                <ul className={`${timelineInfo} pl-4`}>
                  <li>Improve e-commerce site faster and stabler</li>
                  <li>Implement e-commerce's new feature</li>
                  <li>Rebuild user-center</li>
                  <li>Lead junior developers to complete tasks</li>
                  <li>Build F2E toolbox to help marketing colleagues easier to operate e-commerce site</li>
                  <li>Integrate Lighthouse CI in our CI/CD</li>
                </ul>
                <br />
                <p>
                  <span className="text-white font-light">Skills：</span>
                  <span className={`${timelineInfo} italic`}>
                    HTML5、CSS3、JavaScript、TypeScript、Tailwind、emotion、Node.js、Express、React、Next.js、Jest、Playwright
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[32px] lg:my-[64px] relative">
              <div className={timelineSpot} />
              <div className={timelineBlock("right")}>
                <h2 className={timelineCompany}>Vpon - 威朋大數據集團</h2>
                <div className={timelinePeriod}>
                  <span className="mr-[10px]">Software Engineer</span>
                  <i>2019-11 ~ 2020-08</i>
                </div>
                <ul className={`${timelineInfo} pl-4`}>
                  <li>
                    Build a platform of AD demo that the user needs to upload the images and select the template to see
                    the result, it helps our sales to show customers what AD looks like on the web or APP
                  </li>
                  <li>Develop the AD template</li>
                  <li>Embed tracking code to customer's websites</li>
                </ul>
                <br />
                <p>
                  <span className="text-white font-light">Skills：</span>
                  <span className={`${timelineInfo} italic`}>
                    HTML5、CSS3、JavaScript、jQuery、Node.js、Express、React、MySQL、Docker、GTM、GA、ShellScript
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[32px] lg:my-[64px] relative">
              <div className={timelineSpot} />
              <div className={timelineBlock("left")}>
                <h2 className={timelineCompany}>Tripmoment - 時刻旅行</h2>
                <div className={timelinePeriod}>
                  <span className="mr-[10px]">Front-end Developer</span>
                  <i>2019-08 ~ 2020-06</i>
                </div>
                <ul className={timelineInfo}>
                  <li>Develop new posts UI</li>
                  <li>Refactor codebase and improve site faster and stabler</li>
                  <li>Develop the AD template</li>
                  <li>Embed third-party ADs</li>
                  <li>Connect third-party payment</li>
                </ul>
                <br />
                <p>
                  <span className="text-white font-light">Skills：</span>
                  <span className={`${timelineInfo} italic`}>
                    HTML5、CSS3、JavaScript、Node.js、Express、React、Redux、ejs、postgreSQL、GCP
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[32px] lg:my-[64px] relative">
              <div className={timelineSpot} />
              <div className={timelineBlock("right")}>
                <h2 className={timelineCompany}>MemePR - 潮語傳媒股份有限公司</h2>
                <div className={timelinePeriod}>
                  <span className="mr-[10px]">Front-end Developer</span>
                  <i>2018-06 ~ 2019-08</i>
                </div>
                <p className={timelineInfo}>
                  Since the love of AI had entered MemePR, there is no difference in seniority here, As long as what is
                  done is right, it can be played. Finally, with the efforts of everyone, we have successfully created
                  our first chatbot
                  <a href="https://www.sbot.ai" className="link" target="blank" style={{ marginLeft: "5px" }}>
                    Sbot
                  </a>
                  .
                </p>
                <br />
                <p>
                  <span className="text-white font-light">Skills：</span>
                  <span className={`${timelineInfo} italic`}>
                    HTML5、CSS3、JavaScript、Node.js、Express、React、Redux、Styled Components、Next.js、AWS、postgreSQL
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[32px] lg:my-[64px] relative">
              <div className={timelineSpot} />
              <div className={timelineBlock("left")}>
                <h2 className={timelineCompany}>
                  結音股份有限公司
                  <a
                    href="https://www.injiaoyun.com/jack.html"
                    className="underline text-sm ml-[5px] font-light"
                    target="blank"
                  >
                    Recommendation Letter
                  </a>
                </h2>
                <div className={timelinePeriod}>
                  <span className="mr-[10px]">Back-end Developer</span>
                  <i>2017-09 ~ 2018-06</i>
                </div>
                <p className={timelineInfo}>
                  I have experienced a completely different corporate culture and agile spirit than the previous company
                  and always thinks about the balance between efficiency and quality. It can quickly bring products to
                  the market while ensuring the replacement of product value. The process of verifying whether it meets
                  the needs of customers is essentially a baptism of flames, giving me a new understanding of teamwork,
                  and making me more accountable.
                </p>
                <br />
                <p>
                  <span className="text-white font-light">Skills：</span>
                  <span className={`${timelineInfo} italic`}>
                    HTML5、CSS3、JavaScript、Node.js、Express、MongoDB、Mongoose、Angular.js (1.x)、LineBot
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
