import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);

  return (
    <div>
      <div>
        <h2 className="font-semibold mb-3">All Category</h2>
      </div>
      <div className="flex flex-col gap-2">
        {category.map((category) => (
          <NavLink to={`/category/${category.category_id}`} className="btn bg-base-100 border-none" key={category.category_id}>{category.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
