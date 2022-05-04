import profile_pic from "../../../assets/images/fam3.png";
import {
  FaKaggle,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <div className="profile-img">
        <img className="profile-pic" src={profile_pic} alt="fam3"/>
      </div>
      <div className="families">
        <h1>Kobayashi</h1>
        <br />
        <p className="profile-description">
        <ul>
<li>They are in charge of the food production in all the colonies...</li>
<li>The Kobayashi family is known to be distant and very serious, but they tend to help the Citizens under their command and defend them from any social injustices. Their lawyers are the most respected and feared in the galaxy.</li>
<li>The Kobayashi family is the only one that confronts the Yamamoto in the Conclave of Families.</li>
</ul>
        </p>
        <br />
      </div>
      
    </div>
  );
};

export default Info;
