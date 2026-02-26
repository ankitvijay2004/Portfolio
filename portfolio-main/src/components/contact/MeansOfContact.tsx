import { useContext } from "react";
import {
  GithubIcon,
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import { ThemeContext } from "../../App";
// import { motion } from "framer-motion";

interface MeansOfContactProps {}

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      icon: theme.isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      appText: "Email",
      description: "Send me a message",
      appDetails: (
        <a href="mailto:ankitvijay100@gmail.com" className="hover:underline">
          ankitvijay100@gmail.com
        </a>
      ),
    },
    {
      icon: <GithubIcon />,
      appText: "GitHub",
      description: "Check out my code",
      appDetails: (
        <a
          href="https://github.com/ankitvijay2004"
          target="_blank"
          rel="noreferrer"
          aria-label="follow Ankit on GitHub"
          className="hover:underline"
        >
          @ankitvijay2004
        </a>
      ),
    },
    {
      icon: <LinkedInContactIcon />,
      appText: "LinkedIn",
      description: "Let's connect",
      appDetails: (
        <a
          href="http://www.linkedin.com/in/ankit-kumar-vijay-276924285"
          target="_blank"
          rel="noreferrer"
          aria-label="connect with Ankit on Linkedin"
          className="hover:underline"
        >
          Ankit Kumar Vijay
        </a>
      ),
    },
  ];

  return (
    <div className={`w-full py-20 px-4 ${theme.isDarkmode ? "bg-slate-900" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <ContactCard
              key={contact.appText}
              icon={contact.icon}
              title={contact.appText}
              description={contact.description}
              details={contact.appDetails}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeansOfContact;
