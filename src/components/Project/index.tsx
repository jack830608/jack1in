import { useEffect } from "react";
import { css } from "@emotion/css";
import useIntersection from "../../hooks/useIntersection";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../store";
import WindowFrame from "./WindowFrame";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";

SwiperCore.use([Pagination, Autoplay]);

type ProjectProps = {};
const projectList: {
  url?: string;
  image: string;
  content: string;
  device: "mobile" | "desktop";
}[] = [
  {
    url: "https://www.injiaoyun.com",
    image: "injiaoyun.png",
    content:
      "This is my first project in the software industry, Mainly responsible for the small-scale function development, front-end UI adjustment, and connect the third-party API.",
    device: "desktop",
  },
  {
    image: "line_bot.png",
    content:
      "This is my independent project, It's the reservation system for the beauty nail industry, stores can set branch info, opening hours, and store closure dates in the dashboard, then customers can use the Line App to book and check the status of the order.",
    device: "mobile",
  },
  {
    url: "https://www.sbot.ai",
    image: "sbot.png",
    content:
      "Sbot is a chatbot, which easily allows people without a programming background to create their chatbot. This is the biggest project I had participated in, mainly responsible for front-end UI development, API development, and payment system connection.",
    device: "desktop",
  },
  {
    url: "https://www.memepr.com",
    image: "memepr.png",
    content:
      "MemePR is a marketing matching platform, lets customers with marketing needs match with marketing companies through an automatic system. I'm mainly responsible for front-end UI development.",
    device: "desktop",
  },
  {
    image: "jojo.png",
    content:
      "JoJo is my first side project, which can easily match everybody's free time and send the result to every participant.",
    device: "desktop",
  },
  {
    url: "https://tripmoment.com",
    image: "tripmoment.png",
    content:
      "Tripmoment is a travel media that provide the latest travel information. In Tripmoment I learned how to set up various AD on website to increase revenue and due to the high traffic, I have to spend more time handling back-end APIs than front-end UI.",
    device: "desktop",
  },
  {
    image: "koko.png",
    content:
      "This is  a game on the web, I'm responsible for front-end UI and animation effects, using pure javascript, HTML, and CSS, without using any front-end framework.",
    device: "mobile",
  },
  {
    url: "https://demo.vpon.com",
    image: "ad-demo.png",
    content:
      "This is an advertising demo platform. Since every customer wants to see what their ads look like, so I made this platform only need uploading the image and selecting the format to produce a demo link to provide to the customer.",
    device: "mobile",
  },
  {
    url: "https://apps.apple.com/tw/app/encoredays/id1517658643",
    image: "encoredays.png",
    content:
      "This app is a dating app for women, Customer can join or create activities easily, I am responsible for the entire app front-end and back-end.",
    device: "mobile",
  },
];
const Project: React.FC<ProjectProps> = () => {
  const section = useSelector((state: State) => state.section);
  const dispatch = useDispatch();
  const [ref, isInView] = useIntersection(false);
  useEffect(() => {
    if (isInView) {
      dispatch({ type: "ADD_SECTION", payload: "Project" });
    } else {
      dispatch({ type: "REMOVE_SECTION", payload: "Project" });
    }
  }, [dispatch, isInView]);
  return (
    <section
      id="Project"
      ref={ref}
      className={`${
        section.includes("Project") ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 ease-in-out bg-[#151515]`}
    >
      <div
        className={`px-[5%] py-[35px] lg:px-[10%] lg:py-[70px] relative max-w-[1600px] mx-auto ${css`
          :before {
            content: "Project";
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
            className={`font-bold z-10 text-[48px] lg:text-[70px] absolute top-[80px] left-[10%] lg:top-[160px] lg:left-[17%] tracking-[2px] cursor-default text-transparent font-[Kanit] bg-clip-text bg-no-repeat lg:bg-fixed ${css`
              background-image: url(/images/Skills.jpg);
              background-position: 50%;
              background-size: 100%;
            `}`}
          >
            Project
          </h1>
          <div className="mt-[150px] lg:mt-[250px]">
            <Swiper
              slidesPerView={1}
              loop
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
            >
              {projectList.map((i) => (
                <SwiperSlide key={i.image}>
                  <WindowFrame
                    url={i.url}
                    image={i.image}
                    content={i.content}
                    device={i.device}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
