import { Outlet } from "react-router-dom";
import CategoryItem from "../../components/category-item/CategoryItem";

const Home = () => {
  return (
    <div>
      <CategoryItem />
      <Outlet />
    </div>
  );
};

export default Home;
