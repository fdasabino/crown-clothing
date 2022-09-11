import { Link, Outlet } from "react-router-dom";
import CategoryItem from "../../components/category-item/CategoryItem";
import Button from "../../components/button/Button";

const Home = () => {
  return (
    <div>
      {/* <!-- HERO SECTION--> */}
      <div className="container">
        <section className="hero pb-3 bg-cover bg-center d-flex align-items-center">
          <div className="container py-5">
            <div className="row px-4 px-lg-5">
              <div className="col-lg-6">
                <p className="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
                <h1 className="h2 text-uppercase mb-3">20% off on new season</h1>
                <div className="link-width">
                  <Link to="/shop">
                    <Button>Browse collections</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- CATEGORIES SECTION--> */}
        <section className="pt-5">
          <header className="text-center">
            <p className="small text-muted small text-uppercase mb-1">
              Carefully created collections
            </p>
            <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
          </header>
          <div className="row">
            <div className="col">
              <CategoryItem />
            </div>
          </div>
        </section>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
