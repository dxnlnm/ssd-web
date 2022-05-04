import profile_pic from "../../../assets/images/fam1.png";
import {
  FaKaggle,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <div className="profile-img">
        <img className="profile-pic" src={profile_pic} alt="fam1"/>
      </div>
      <div className="families">
        <h1>Yamamoto</h1>
        <br />
        <p className="profile-description">
        <ul>
<li>They are the first, oldest, and most powerful Family.</li>
<li>The Yamamoto Family loves the Ishikawa, considering them their best creation.</li>
<li>The Yamamoto family always shows diplomacy and mercy, but in reality, they just manipulate all the other Families. It's said that they have a plan to eliminate all the families in case of any betrayal.</li>
</ul>
        </p>
        <br />
      </div>
      
    </div>
  );
};

export default Info;
