import React from "react";
import personalPic from "../img/personalphoto.jpg";

const PersonalInfo = () => {
  return (
    <div className='personalInfo'>
      <div className='personal_pic'>
        <img src={personalPic} alt='' />
      </div>
      <div className='personal_details'>
        <div className='left_section'>
          <p>Name</p>
          <p>Age</p>
          <p>Nationality</p>
          <p>Languages Known</p>
          <p>Address</p>
          <p>Mobile No</p>
          <p>Email Address</p>
          <br />
          <p>Education</p>
        </div>
        <div className='right_section'>
          <p>: Abdullah Al Nahdi</p>
          <p>: 25</p>
          <p>: Bangladeshi</p>
          <p>: Bangla, English, Hindi</p>
          <p>: Dhaka, Bangladesh</p>
          <p>: +880 1312898200</p>
          <p>: al.nahdi.tnmy@gmail.com</p>
          <br />
          <p>: B.Sc in CSE (Running)</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
