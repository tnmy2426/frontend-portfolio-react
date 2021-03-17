import React from "react";
import PersonalInfo from "../Components/PersonalInfo";
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
    </section>
  );
};

export default AboutPage;
