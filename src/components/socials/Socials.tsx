import {
  
  FreelancerIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  
} from "../../assets/icons/icons";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/ankitvijay2004"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Ankit's github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.instagram.com/ankit_k_vijay/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Ankit's instagram account"
      >
        <InstagramIcon />
      </a>
      
      <a
        className="socialIcons"
        href="http://www.linkedin.com/in/ankit-kumar-vijay-276924285"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Ankit's linkedin account"
      >
        <LinkedInIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.freelancer.in/u/Ankitvijay004"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Ankit's Freelancer profile"
      >
        <FreelancerIcon />
      </a>
      
      <a
        className="socialIcons"
        href="mailto:ankitvijay100@gmail.com"
        aria-label="send Ankit an email"
      >
        <MailIcon />
      </a>
    </div>
  );
};

export default Socials;
