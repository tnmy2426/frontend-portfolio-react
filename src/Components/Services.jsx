import React from "react";

const Services = (props) => {
  return (
    <>
      <div className='service'>
        <div className='service_content'>
          <img src={props.image} alt='Design Logo' />
          <h5 className='service_title'>{props.title}</h5>
          <p className='service_text'>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Services;
