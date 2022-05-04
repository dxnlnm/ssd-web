import profile_pic from "../../../assets/images/fam4.png";
import {
  FaKaggle,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <div className="profile-img">
        <img className="profile-pic" src={profile_pic} alt="fam4"/>
      </div>
      <div className="families">
        <h1>Takahashi</h1>
        <br />
        <p className="profile-description">
        <ul>
<li>The Takahashi family is in charge of resource extraction in different satellites of the Solar System...</li>
<li>Europa is home to the most prominent black market, and it's said some Takahashis are involved in it.</li>
<li>The Yamamoto family authorized the Takahashi family to keep their citizens in Europa to work as laborers.</li>
<li>The Takahashi family is in charge of producing R.E.T.R.O. machines, weapons, and military ships for all the families.</li>
<li>The Takahashi family maintains a good relationship with the Yamamoto. They even collab on secret projects...</li>
</ul>
        </p>
        <br />
      </div>
      
    </div>
  );
};

export default Info;
