import { GoldRects, GreenRects, PurpleRects } from "../../assets/icons/icons";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";
import React from "react";

interface PageHeroProps {
  topIcon: React.ReactNode;
  topText: string;
  pageHeading: string;
  extraText: string;
  /** Use a real page h1 for the animated heading (accessibility). */
  pageHeadingAsH1?: boolean;
}

const PageHero: React.FunctionComponent<PageHeroProps> = ({
  topIcon,
  topText,
  pageHeading,
  extraText,
  pageHeadingAsH1 = false,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={theme.isDarkmode ? "pageHeroWrapperDark" : "pageHeroWrapper"}
    >
      {theme.isDarkmode ? (
        <img
          src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1701866485/phero_lnil62.png"
          alt=""
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="low"
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700577159/Vectorbg_q6nt9c.png"
          alt=""
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="low"
        />
      )}

      <div className="pageHeroContainer">
        <div className={theme.isDarkmode ? "topTextDark" : "topText"}>
          <span>{topIcon}</span>
          <p>{topText}</p>
        </div>

        <AnimatedText
          text={pageHeading}
          className={theme.isDarkmode ? "headingDark" : "heading"}
          once
          as={pageHeadingAsH1 ? "h1" : "p"}
        />

        <div className="extraTextCont">
          <p className={theme.isDarkmode ? "extraTextDark" : "extraText"}>
            {extraText}
          </p>
        </div>

        <div className="purpleRects">
          <PurpleRects />
        </div>
        <div className="greenRects">
          <GreenRects />
        </div>
        <div className="goldRects">
          <GoldRects />
        </div>
      </div>
    </div>
  );
};

export default PageHero;