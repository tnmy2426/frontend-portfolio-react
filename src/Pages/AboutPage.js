import React from "react";
import WebDesign from "../img/webDesign.svg";
import WebDevelopment from "../img/development.svg";
import APIDevelopment from "../img/apiDevelopment.svg";

// Components
import PersonalInfo from "../Components/PersonalInfo";
import Services from "../Components/Services";
import Skills from "../Components/Skills";
import Title from "../Components/Title";

const AboutPage = () => {
  return (
    <section className='aboutPage'>
      <Title pageTitle='About Me' />
      <PersonalInfo />
      <Title pageTitle='My Skills' />
      <div className='skillSection'>
        <Skills skillTitle='Python' width='75%' skillProgress='75%' />
        <Skills skillTitle='Django' width='80%' skillProgress='80%' />
        <Skills skillTitle='JavaScript' width='50%' skillProgress='50%' />
        <Skills skillTitle='React JS' width='70%' skillProgress='70%' />
        <Skills skillTitle='HTML5' width='99%' skillProgress='99%' />
        <Skills skillTitle='CSS3' width='85%' skillProgress='85%' />
        <Skills skillTitle='SASS / SCSS' width='80%' skillProgress='80%' />
      </div>
      <Title pageTitle='Services' />
      <div className='service_container'>
        <Services
          image={WebDesign}
          title='Web Design'
          text='Front-end Development using React JS and pure HTML, CSS & SASS / SCSS'
        />
        <Services
          image={WebDevelopment}
          title='Backend Development'
          text='Backend Development using Python & Django'
        />
        <Services
          image={APIDevelopment}
          title='API Development'
          text='API Development using Python & Django-Rest-Framework'
        />
      </div>
    </section>
  );
};

export default AboutPage;
