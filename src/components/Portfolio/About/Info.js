import profile_pic from "../../../assets/images/profile.jpg";
import {
  FaKaggle,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <div className="profile-img">
        <img className="profile-pic" src={profile_pic} alt="Yajat Malhotra"/>
      </div>
      <div className="about-me">
        <h1>Introduction</h1>
        <br />
        <p className="profile-description">
        The Super Space Defenders is an upcoming NFT Collection consisting on 8,888 cloned individuals with different personalities, political affinities and visuals. They’re mainly divided in two groups: The Elites and The Citizens. The Elites are a group of wealthy Families that govern the galaxy while the Citizens are the workforce of the galaxy, living under the Elite’s rules. But... where is the Rebellion?
        </p>
        <br />
        <div className="social-icons">
          
          <a
            className="social-icon"
            href="https://iamyajat.medium.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/iamyajat"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
