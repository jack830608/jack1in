import { useEffect } from "react";
import { css } from "@emotion/css";
import useIntersection from "../../hooks/useIntersection";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../store";

type AboutMeProps = {};

const AboutMe: React.FC<AboutMeProps> = () => {
  const section = useSelector((state: State) => state.section);
  const dispatch = useDispatch();
  const [ref, isInView] = useIntersection(false);
  useEffect(() => {
    if (isInView) {
      dispatch({ type: "ADD_SECTION", payload: 'AboutMe' });
    } else {
      dispatch({ type: "REMOVE_SECTION", payload: 'AboutMe' });
    }
  }, [dispatch, isInView]);
  return (
    <section
      ref={ref}
      className={`${section.includes("AboutMe") ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out ${css`
        background: linear-gradient(180deg, #130f15 50%, #151515);
      `}`}
    >
      <div
        id="AboutMe"
        className={`px-[5%] py-[35px] lg:px-[10%] lg:py-[70px] relative max-w-[1600px] mx-auto ${css`
          :before {
            content: "About Me";
            color: #ecf5ff;
            font-weight: 500;
            position: absolute;
            font-size: 5em;
            left: 4%;
            opacity: 0.1;
            white-space: nowrap;
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
            className={`font-bold z-10 text-[48px] lg:text-[70px] absolute top-[80px] left-[10%] lg:top-[160px] lg:left-[17%] tracking-[2px] cursor-default text-transparent font-[Kanit] bg-clip-text bg-no-repeat bg-fixed ${css`
              background-image: url(/images/Introduction.jpg);
              background-position: 50%;
              background-size: 100%;
            `}`}
          >
            About Me
          </h1>
        </div>
        <div className="flex flex-col mt-[150px] relative lg:flex-row lg:mt-[250px] lg:justify-start">
          <div className="w-[100%] lg:w-[55%]">
            <div className="text-[#ECF5FF] text-lg space-y-[10px]">
              <p>
                My name is Jack Lin, have five years of experience in developing
                back-end and front-end.
              </p>
              <p>
                I am passionate about pursuing new knowledge, new skills and
                enjoying the sense of accomplishment of software development.
              </p>
              <p>
                For me , coding is to make life more convenient & solve problems
                in life, so I am happy to challenge new things and learn many
                new skills.
              </p>
            </div>
            <div
              className={`flex items-center justify-start lg:justify-end mt-[40px] z-10 text-transparent font-[Kanit] tracking-[1px] bg-clip-text bg-no-repeat bg-fixed ${css`
                background-image: url(/images/Introduction.jpg);
                background-position: 50%;
                background-size: 100%;
              `}`}
            >
              <i className="fas fa-map-marker-alt text-3xl" />
              <div className="text-lg ml-3">Taipei, Taiwan</div>
            </div>
            <a
              className="block bg-[#ecf5ff] py-[10px] px-[20px] font-[Kanit] rounded-md max-w-fit mt-[50px] lg:mt-[100px] font-bold hover:-translate-y-1 transition-transform"
              href="mailto:jack830608@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </div>
          <div className="w-[100%] lg:w-[45%]">
            <h1
              className={`text-[48px] lg:text-[160px] text-right z-10 text-transparent font-[Kanit] tracking-[1px] bg-clip-text bg-no-repeat bg-fixed ${css`
                background-image: url(/images/Introduction.jpg);
                background-position: 50%;
                background-size: 100%;
              `}`}
            >
              {"</>"}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
