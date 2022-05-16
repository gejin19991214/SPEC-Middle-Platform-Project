import React from "react";
import { TagCloud } from "react-tagcloud";
import "./Support.css";

const data = [
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "MySQL", count: 18 },
  { value: "CSS3", count: 20 },
  { value: "Python", count: 34 },
];

const Support = () => {
  return (
    <div className="support">
      {/* <h6 className="shit">Technology we choose to build this application:</h6> */}
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={data}
        onClick={(tag) => alert(`'${tag.value}' was selected!`)}
      />
    </div>
  );
};

export default Support;
