const Education = () => {
  return (
    <div className="education-card">
      <h1 className="education-heading">Education</h1>
      <br />
        <p className="profile-description">
        The human species is only a memory in the history books. The solar system is now inhabited by the Aurora Sapiens, biological duplicates with synthetic additives from Subject #8,888 Aurora, the only human whose genetic code managed to be replicated.
        In control of the system are THE ELITES, a group of noble families who control the technology to generate the duplicates and, therefore, Venus and Mars’ workforce as well as the destiny of the population spread in Jupiter’s satellites.
        </p>
        <br />
      <div className="education-info">
        <div className="school-info">
          <h2>VELLORE INSTITUTE OF TECHNOLOGY</h2>
          <p>Vellore, India</p>
          <br />
          <p style={{ "font-weight": "900" }}>
            Computer Science & Engineering
          </p>
          <p>Batch of 2024</p>
          {/* <p>CGPA: </p> */}
        </div>
        <div className="school-info">
          <h2>Greenwood High International School</h2>
          <p>Bangalore, India</p>
          <br />
          <p>Batch of 2020</p>
          <p>12th ISC</p>
          <p>10th ICSE</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
