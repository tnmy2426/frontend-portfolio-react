import React from "react";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";

// Components
import ContactItem from "../Components/ContactItem";
import Title from "../Components/Title";

const ContactPage = () => {
  return (
    <section>
      <div className='title'>
        <Title pageTitle='Contact Me' />
      </div>
      <div className='contactPage'>
        <div className='map_section'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.066638831774!2d90.34264682656185!3d23.746191208898427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf71ee167027%3A0x4f93f9bc959452bc!2sBoshila!5e0!3m2!1sen!2sbd!4v1616274919708!5m2!1sen!2sbd'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
        <div className='contact_section'>
          <ContactItem icon={phone} text='+880 1312898200' title='Phone' />
          <ContactItem
            icon={email}
            text='al.nahdi.tnmy@gmail.com'
            title='Email'
          />
          <ContactItem
            icon={location}
            text='Mohammadpur, Dhaka, Bangladesh'
            title='Address'
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
