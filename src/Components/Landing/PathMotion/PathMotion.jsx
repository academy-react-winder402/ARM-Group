/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useRef } from "react";

const PathMotion = ({
  children,
  progressObject = [
    { percent: 25, line: 5, flow: 10 },
    { percent: 50, line: 1, flow: 14 },
    // { percent: 50, line: 50, flow: 50 },
  ],
  transitionDuration = "0.2s",
  height,
  width,
}) => {
  const [drawValue, setDrawValue] = useState({
    set: 0,
    offset: 1000,
  });
  const [throPercent, sethroPercent] = useState(0);
  const [pathLength, setPathLength] = useState(1000);

  const svgRef = useRef();
  const pathRef = useRef();

  const calculateScrollPosition = () => {
    const pathLength =
      (pathRef.current?.getTotalLength() *
        pathRef.current?.getBoundingClientRect().width) /
      pathRef.current?.getBBox().width;
    setPathLength(pathLength);
    const height = svgRef.current.offsetHeight;
    const top = svgRef.current.getBoundingClientRect().top;
    const screen = window.innerHeight;
    const throPercent = ((screen / 2 - top) / height) * 100;
    sethroPercent(throPercent);

    const result = caculateDashArray(progressObject, throPercent);

    setDrawValue({
      set: percent(pathLength, result.line),
      offset: percent(pathLength, result.flow),
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", calculateScrollPosition);
    calculateScrollPosition();
    return () => {
      window.removeEventListener("scroll", calculateScrollPosition);
    };
  }, []);
  const renderedSvg = { ...children.render("", "") };
  const path = { ...renderedSvg.props.children[1].props };
  const viewBoxValue = renderedSvg.props.viewBox;

  return (
    <div ref={svgRef} className=" relative">
      <span className=" fixed top-30 left-10">{throPercent}</span>
      <span className=" fixed top-36 left-10">
        {((drawValue.set + drawValue.offset) / pathLength) * 100}
      </span>
      {/* <span>test</span> */}
      <svg
        className=" w-full"
        width={width}
        height={height}
        viewBox={viewBoxValue}
      >
        <path
          {...path}
          ref={pathRef}
          // strokeDasharray={`${drawValue.set} ${drawValue.offset}`}
          style={{
            stroke: "rgb(150 150 150)",
            strokeWidth: "3px",
            strokeDasharray:
              drawValue.set + drawValue.offset + " " + pathLength,
            pathLength: pathLength,
            vectorEffect: "non-scaling-stroke",
            transitionDuration: transitionDuration,
          }}
        />
        <path
          {...path}
          style={{
            stroke: "rgb(74 74 74)",
            strokeWidth: "3px",
            strokeDasharray: drawValue.set + " " + pathLength,
            pathLength: pathLength,
            strokeDashoffset: -drawValue.offset,
            vectorEffect: "non-scaling-stroke",
            transitionDuration: transitionDuration,
          }}
        />
        <path
          {...path}
          strokeDashoffset={-(drawValue.set + drawValue.offset)}
          style={{
            stroke: "rgb(255, 0, 131)",
            strokeWidth: "20px",
            strokeDasharray: "0 " + (pathLength + 1),
            pathLength: pathLength,
            vectorEffect: "non-scaling-stroke",
            transitionDuration: transitionDuration,
          }}
        />
      </svg>
    </div>
  );
};

export { PathMotion };

const caculateDashArray = (progressObject, throPercent) => {
  let linePercent = 0;
  let progressPercent = 0;
  for (let i = 0; i < progressObject.length; i++) {
    if (throPercent < progressObject[i].percent) {
      if (i === 0) {
        linePercent = progressObject[i].line;
        progressPercent = progressObject[i].flow;
        break;
      }
      const distans = progressObject[i].percent - progressObject[i - 1].percent;
      const currentPosDist = throPercent - progressObject[i - 1].percent;
      const percentCalculator = currentPosDist / distans;
      linePercent =
        progressObject[i - 1].line +
        (progressObject[i].line - progressObject[i - 1].line) *
          percentCalculator;
      progressPercent =
        progressObject[i - 1].flow +
        (progressObject[i].flow - progressObject[i - 1].flow) *
          percentCalculator;
      break;
    }
    if (i === progressObject.length - 1) {
      linePercent = progressObject[i].line;
      progressPercent = progressObject[i].flow;
      break;
    }
  }
  return { line: linePercent, flow: progressPercent };
};

const percent = (number, per) => {
  return (number / 100) * per;
};
