import { Link } from "react-router-dom";

const Categories = () => {
  
  return (
    <section className="container">
      <h2 className="sectionTitle">Categories</h2>
      <Link to={"/main-dishes"} className="recipeCardCategory">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/orange-marmalade-glazed-roast-duck-72f108f.jpg?quality=90&webp=true&resize=300,272"
          alt=""
        />
        <h4 className="recipeTitleCategoryTitle">Main Dishes</h4>
      </Link>
      <Link to={"/soups"} className="recipeCardCategory">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-22858_12-a8c9d53.jpg?quality=90&webp=true&resize=300,272"
          alt=""
        />
        <h4 className="recipeTitleCategoryTitle">Soups</h4>
      </Link>
      <Link to={"/salads"} className="recipeCardCategory">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/epic-summer-salad-000aded.jpg?quality=90&webp=true&resize=300,272"
          alt=""
        />
        <h4 className="recipeTitleCategoryTitle">Salads</h4>
      </Link>
      <Link to={"/desserts"} className="recipeCardCategory">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bbcgfo-1119_familychristmas-jammydodgers_33579-01f5b8f.jpg?quality=90&webp=true&resize=300,272"
          alt=""
        />
        <h4 className="recipeTitleCategoryTitle">Desserts</h4>
      </Link>
    </section>
  );
};
export default Categories;
