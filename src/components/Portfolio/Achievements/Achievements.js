import Fam1 from "./Fam1";
import Fam2 from "./Fam2";
import Fam3 from "./Fam3";
import Fam4 from "./Fam4";

const About = ({openMenu}) => {
  return (
    <div className={`portfolio-section opened-menu-${openMenu}`}>
      <Fam1 />
      <Fam2 />
      <Fam3 />
      <Fam4 />
    </div>
  );
};

export default About;
