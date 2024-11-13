import { useEffect, useState } from "react";

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
          <button className="btn" key={category.category_id}>{category.category_name}</button>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
