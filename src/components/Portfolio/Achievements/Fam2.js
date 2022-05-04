import profile_pic from "../../../assets/images/fam2.png";
import {
  FaKaggle,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <div className="profile-img">
        <img className="profile-pic" src={profile_pic} alt="fam2"/>
      </div>
      <div className="families">
        <h1>Ishikawa</h1>
        <br />
        <p className="profile-description">
        <ul>
<li>They are in charge of the arts & diplomacy in the Solar System. Their main goal is to make Callisto a paradise for the arts...</li>
<li>They maintain a good relationship with the Yamamoto... but don't be fooled... they secretly want to overthrow them...</li>
<li>Commander Minerva Bellatrix has experienced how bloodthirsty and treacherous the Ishikawa Family is.</li>
</ul>
        </p>
        <br />
      </div>
      
    </div>
  );
};

export default Info;
