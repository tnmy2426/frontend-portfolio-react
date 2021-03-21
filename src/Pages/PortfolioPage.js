import React, { useState } from "react";
import Categories from "../Components/Categories";
import MenuItem from "../Components/MenuItem";
import Title from "../Components/Title";
import portfolios from "../Components/allPortfolios";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];
console.log(allCategories);

const PortfolioPage = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItem, setMenuItem] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItem(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItem(filteredData);
  };

  return (
    <section className='portfolioPage'>
      <Title pageTitle='Portfolios' />
      <div className='portfolios_data'>
        <Categories filter={filter} categories={categories} />
        <MenuItem menuItem={menuItem} />
      </div>
    </section>
  );
};

export default PortfolioPage;
