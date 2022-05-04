import Education from "./Education"
import Info from "./Info"
import Unknown from "./Unknown"
import ReactTooltip from "react-tooltip";

const About = ({openMenu}) => {
  return (
    <div className={`portfolio-section opened-menu-${openMenu}`}>
      <Info />
      <Unknown />
      <ReactTooltip place="bottom" className="tooltip" />
    </div>
  );
};

export default About;
