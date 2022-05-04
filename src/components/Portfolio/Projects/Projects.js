import Project from "./Project";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";

const Projects = ({openMenu}) => {
  const [projects] = useState([
    {
      id: 1,
      title: "MACO",
      description:
        "Project Leader, Main Artist & Writer. Proud member of ANIFAM and the ShroomChan Community. Maco started his NFT artist career since the end of March 2021, building a name and a brand on Opensea & Foundation. He’s a big fan of the 80s and 90s anime aesthetics, romantic comedies, indie rock, (J)RPG video games and loves to chit chat (maybe too much).",
      link: "https://github.com/iamyajat/Smart-Bookmark-API",
      show: true,
    },
    {
      id: 2,
      title: "VANGLOG",
      description:
        "Community Manager and MACO’s right hand. Vanglog comes from the crypto space, where he has been around since 2017. He came across the NFT world in December of 2020, and since then, he has been interacting with the NFT community: trying to learn as much as he can, exchanging ideas and making new friends every day, while also helping out across various communities in this space.",
      link: "https://play.google.com/store/apps/details?id=com.dscvit.wt21",
      show: true,
    },
    {
      id: 3,
      title: "JUNSHI",
      description:
        "Marketing Advisor. Junshi started creating NFTs in March 2021. He founded Fang Gang back in August. He's an artist, advisor and long time community manager. He's been building connections with fellow Web3 citizens since entering the metaverse.",
      link: "https://yazafit.iamyajat.co/",
      show: true,
    },
    {
      id: 4,
      title: "VELVET BUNNY",
      description:
        "Art Assistant. Velvet Bunny began her career as an NFT artist in March 2021, introducing her imaginary world known as The Lavender Fields, and her colorful and sweet characters. Big fan of Wes Anderson movies, horror movies and emo music. Fashion designer and animal lover.",
      link: "https://spaceweight.iamyajat.co/",
      show: true,
    },
    {
      id: 5,
      title: "NFT FORGE",
      description: "Developers. NFT Forge is a developer collective based in Germany, helping artists immortalizing their work on the blockchain. They have been working on many successful collections like Hunnys, CleverGirls, FangGang and more from behind the scenes since 2021. As a team of mostly 90s kids and sci-fi / anime fans, the Forge is very excited to be part of Super Space Defenders, reliving the nostalgia of their childhood.",
      link: "",
      show: true,
    },
    {
      id: 6,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
    },
  ]);

  return (
    <>
      <div className={`portfolio-section opened-menu-${openMenu}`}>
        <div className="card-view">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="github-card github-icons">
        <a
          className="github-icon"
          href="https://twitter.com/ArchverseNFT"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </>
  );
};

export default Projects;
