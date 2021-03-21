import React from "react";

const MenuItem = (props) => {
  return (
    <div className='portfolios'>
      {props.menuItem.map((item) => {
        return (
          <div className='portfolio' key={item.id}>
            <div className='image_data'>
              <img src={item.image} alt='' />
              <ul className='hover_items'>
                <li>
                  <a href={item.link1}>{item.icon1}</a>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItem;
