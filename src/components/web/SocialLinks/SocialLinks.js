import React from "react";
import { ReactComponent as YouTubeIcon } from "../../../../src/logo.svg";
import { ReactComponent as TwitterIcon } from "../../../../src/logo.svg";
import { ReactComponent as FacebookIcon } from "../../../../src/logo.svg";
import { ReactComponent as LinkedinIcon } from "../../../../src/logo.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.youtube.com/"
        className="youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </a>
      <a
        href="https://twitter.com/rootKnight"
        className="twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.facebook.com/areyesdev"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://es.linkedin.com/in/areyesdev"
        className="linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}