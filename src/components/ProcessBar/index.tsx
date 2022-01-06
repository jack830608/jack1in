import { css } from "@emotion/css";
import { useEffect, useState } from "react";

const ProcessBar: React.FC = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPercent(
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
          100
      );
    });
  }, []);
  return (
    <div
      className={`fixed bottom-0 left-0 opacity-70 h-1 z-50 rounded-xs transition-all duration-100 ease-linear ${css`
        background-image: linear-gradient(
          139deg,
          #fb8817,
          #ff4b01,
          #c12127,
          #e02aff
        );
      `}`}
      style={{
        width: `${percent}%`,
      }}
    />
  );
};

export default ProcessBar;
