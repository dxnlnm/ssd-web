import Faq from "./Faq";

const About = ({openMenu}) => {
  return (
    <div className={`portfolio-section opened-menu-${openMenu}`}>
      <Faq />
    </div>
  );
};

export default About;
