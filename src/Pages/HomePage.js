import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import React from "react";

const HomePage = () => {
  return (
    <header className='HomePage'>
      <div className='hero'>
        <h1 className='hero_text'>
          Hello, I am <span>Abdullah Al Nahdi</span>
        </h1>
        <h2>Full-Stack Developer</h2>
        <p>React | Python | Django</p>
      </div>
      <div className='social_icons'>
        <Link to='https://www.linkedin.com/in/abdullah-al-nahdi-335a1a12a/'>
          <FontAwesomeIcon icon={faLinkedinIn} className='linkedin icon' />
        </Link>
        <Link to='https://github.com/tnmy2426'>
          <FontAwesomeIcon icon={faGithub} className='github icon' />
        </Link>
        <Link to='https://twitter.com/tnmy2426'>
          <FontAwesomeIcon icon={faTwitter} className='twitter icon' />
        </Link>
        <Link to='https://www.facebook.com/xdxtnmy/'>
          <FontAwesomeIcon icon={faFacebookF} className='facebook icon' />
        </Link>
      </div>
    </header>
  );
};

export default HomePage;
