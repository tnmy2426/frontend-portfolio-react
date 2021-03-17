import React from "react";

const Skills = (props) => {
  return (
    <>
      <div className='skills_container'>
        <h5>{props.skillTitle}</h5>
        <div className='skills_bar'>
          <p>{props.skillProgress}</p>
          <div className='skills_progress'>
            <div className='progress'>
              <div
                className='inner_progress'
                style={{ width: props.width }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
