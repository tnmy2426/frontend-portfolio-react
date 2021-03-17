import React from "react";

const Title = (props) => {
  return (
    <div className='title'>
      <h2>
        <span>{props.pageTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
