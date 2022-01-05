import { css } from "@emotion/css";

const timelineBlock = (dir:'left' | 'right' = 'left') => (`${dir === 'right' ? 'ml-auto' : ''} relative ml-[55px] mr-[10px] bg-[#272727] rounded-[5px] p-16 text-[#ecf5ff] lg:p-[22px] lg:w-[36%] lg:my-[5%] ${css`
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
    top: 24px;
    ${dir}: 100%;
    border-color: ${dir === 'left' ? 'transparent transparent transparent #272727' : 'transparent #272727 transparent transparent'};
  }
}
`}`);

const Experience: React.FC = () => {
  return (
    <div className="bg-[#151515]">
      <div
        id="AboutMe"
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
            className={`font-bold z-10 text-[48px] lg:text-[70px] absolute top-[80px] left-[10%] lg:top-[160px] lg:left-[17%] tracking-[2px] cursor-default text-transparent font-[Kanit] bg-clip-text bg-no-repeat bg-fixed ${css`
              background-image: url(/images/Experience.jpg);
              background-position: 50%;
              background-size: 100%;
            `}`}
          >
            Experience
          </h1>
        </div>
        <div className="mt-[150px] lg:mt-[250px]">
          <section
            className={`relative pt-[10px] ${css`
              :before {
                content: "";
                position: absolute;
                top: 0;
                left: 25px;
                height: 100%;
                width: 7px;
                background: #272727;
              }
              :after {
                content: "";
                display: table;
                clear: both;
              }
              @media only screen and (min-width: 1024px) {
                :before {
                  left: 50%;
                  margin-left: -3px;
                }
              }
            `}`}
          >
            <div className="my-[32px] lg:my-[64px] relative">
              <div className="border-[6px] border-[#272727] w-[30px] h-[30px] left-[50%] translate-x-[-15px] top-2 rounded-full absolute bg-[#151515] flex justify-center items-center">
                <img
                  src="/images/pg.png"
                  alt="pg"
                  className="rounded-full w-full h-full border border-white"
                />
              </div>
              <div className={timelineBlock('left')}>
                <h2>Positive Grid</h2>
                <div className="timeline-content-info">
                  <span
                    className="timeline-content-info-title"
                    style={{ marginRight: "10px" }}
                  >
                    Senior Front-end Developer
                  </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true">
                      2020-08 ~ Now
                    </i>
                  </span>
                </div>
                <p>
                  In Positive Grid my responsibility is to help our e-commerce
                  site faster and stabler, at the same time I need to lead two
                  junior developers to complete tasks from the marketing team.
                </p>
                <br />
                <p>
                  <span style={{ color: "#FFF", fontSize: "16px" }}>
                    Skill：
                  </span>
                  <span style={{ fontStyle: "italic" }}>
                    HTML5、CSS3、JavaScript、TypeScript、Tailwind、emotion、Node.js、Express、React、Next.js
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[32px] lg:my-[64px] relative">
              <div className="border-[6px] border-[#272727] w-[30px] h-[30px] left-[50%] translate-x-[-15px] top-2 rounded-full absolute bg-[#151515] flex justify-center items-center">
                <img
                  src="/images/vpon.png"
                  alt="vpon"
                  className="rounded-full w-full h-full border border-white"
                />
              </div>
              <div className={timelineBlock('right')}>
                <h2>Vpon - 威朋大數據集團</h2>
                <div className="timeline-content-info">
                  <span
                    className="timeline-content-info-title"
                    style={{ marginRight: "10px" }}
                  >
                    Software Engineer
                  </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true">
                      2019-11 ~ 2020-08
                    </i>
                  </span>
                </div>
                <p>
                  Vpon is an advertising company combining big data, for me it's
                  completely different from my previous job. There are more than
                  70 engineers in Vpon so we can exchange skills with each other
                  and exposed to many new skills not limited to the front-end.
                </p>
                <br />
                <p>
                  <span style={{ color: "#FFF", fontSize: "16px" }}>
                    Skill：
                  </span>
                  <span style={{ fontStyle: "italic" }}>
                    HTML5、CSS3、JavaScript、jQuery、Node.js、Express、React、MySQL、Docker、GTM、GA、ShellScript
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[32px] lg:my-[64px] relative">
              <div className="border-[6px] border-[#272727] w-[30px] h-[30px] left-[50%] translate-x-[-15px] top-2 rounded-full absolute bg-[#151515] flex justify-center items-center">
                <img
                  src="/images/tripmoment.jpeg"
                  alt="tripmoment"
                  className="rounded-full w-full h-full border border-white"
                />
              </div>

              <div className={timelineBlock('left')}>
                <h2>Tripmoment - 時刻旅行</h2>
                <div className="timeline-content-info">
                  <span
                    className="timeline-content-info-title"
                    style={{ marginRight: "10px" }}
                  >
                    Front-end Developer
                  </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true">
                      2019-08 ~ 2020-06
                    </i>
                  </span>
                </div>
                <p>
                  During the time at the Tripmoment, I have been responsible for
                  more things ,including Front-end and Back-end. It also let me
                  learn more skill and continue to help the company develop new
                  products. Although I only worked here for three months, until
                  now I have been maintaining Tripmoment part-time.
                </p>
                <br />
                <p>
                  <span style={{ color: "#FFF", fontSize: "16px" }}>
                    Skill：
                  </span>
                  <span style={{ fontStyle: "italic" }}>
                    HTML5、CSS3、JavaScript、Node.js、Express、React、Redux、ejs、postgreSQL、GCP
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[32px] lg:my-[64px] relative">
              <div className="border-[6px] border-[#272727] w-[30px] h-[30px] left-[50%] translate-x-[-15px] top-2 rounded-full absolute bg-[#151515] flex justify-center items-center">
                <img
                  src="/images/memepr.png"
                  alt="memepr"
                  className="rounded-full w-full h-full border border-white"
                />
              </div>

              <div className={timelineBlock('right')}>
                <h2>MemePR - 潮語傳媒股份有限公司</h2>
                <div className="timeline-content-info">
                  <span
                    className="timeline-content-info-title"
                    style={{ marginRight: "10px" }}
                  >
                    Front-end Developer
                  </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true">
                      2018-06 ~ 2019-08
                    </i>
                  </span>
                </div>
                <p>
                  Since the love of AI had entered MemePR, there is no
                  difference in seniority here, As long as what is done is
                  right, it can be played. Finally, with the efforts of
                  everyone, we have successfully created our first chatbot
                  <a
                    href="https://www.sbot.ai"
                    className="link"
                    target="blank"
                    style={{ marginLeft: "5px" }}
                  >
                    Sbot
                  </a>
                  .
                </p>
                <br />
                <p>
                  <span style={{ color: "#FFF", fontSize: "16px" }}>
                    Skill：
                  </span>
                  <span style={{ fontStyle: "italic" }}>
                    HTML5、CSS3、JavaScript、Node.js、Express、React、Redux、Styled
                    Components、Next.js、AWS、postgreSQL
                  </span>
                </p>
              </div>
            </div>
            <div className="my-[32px] lg:my-[64px] relative">
              <div className="border-[6px] border-[#272727] w-[30px] h-[30px] left-[50%] translate-x-[-15px] top-2 rounded-full absolute bg-[#151515] flex justify-center items-center">
                <img
                  src="/images/injiaoyun.png"
                  alt="injiaoyun"
                  className="rounded-full w-full h-full border border-white"
                />
              </div>
              <div className={timelineBlock('left')}>
                <h2>
                  結音股份有限公司
                  <a
                    href="https://www.injiaoyun.com/jack.html"
                    className="link"
                    style={{ marginLeft: "5px" }}
                    target="blank"
                  >
                    Recommendation Letter
                  </a>
                </h2>
                <div className="timeline-content-info">
                  <span
                    className="timeline-content-info-title"
                    style={{ marginRight: "10px" }}
                  >
                    Back-end Developer
                  </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true">
                      2017-09 ~ 2018-06
                    </i>
                  </span>
                </div>
                <p>
                  I have experienced a completely different corporate culture
                  and agile spirit than the previous company and always thinks
                  about the balance between efficiency and quality. It can
                  quickly bring products to the market while ensuring the
                  replacement of product value. The process of verifying whether
                  it meets the needs of customers is essentially a baptism of
                  flames, giving me a new understanding of teamwork, and making
                  me more accountable.
                </p>
                <br />
                <p>
                  <span style={{ color: "#FFF", fontSize: "16px" }}>
                    Skill：
                  </span>
                  <span style={{ fontStyle: "italic" }}>
                    HTML5、CSS3、JavaScript、Node.js、Express、MongoDB、Mongoose、Angular.js
                    (1.x)、LineBot
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
