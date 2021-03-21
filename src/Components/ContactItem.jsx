import React from "react";

const ContactItem = (props) => {
  return (
    <div className='contactItem'>
      <div className='contact'>
        <img src={props.icon} alt='' />
        <div className='right_items'>
          <h6>{props.title}</h6>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
