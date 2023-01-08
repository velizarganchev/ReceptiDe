import { Link } from "react-router-dom";
import useGetCategories from "../../../hooks/useGetCategories";

const Categories = () => {
  const [categories] = useGetCategories();

  return (
    <section className="container">
      <h2 className="sectionTitle">Categories</h2>
      {
        categories.map((x) => (
          <Link to={"/" + x.name.toLowerCase().replace(" ", "-")} className="recipeCardCategory">
            <img
              src={x.imgUrl}
              alt=""
            />
            <h4 className="recipeTitleCategoryTitle">{x.name}</h4>
          </Link>
        ))
      }
    </section>
  );
};
export default Categories;
