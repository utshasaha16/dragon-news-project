import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightSide from "../components/layout-components/RightSide";

const MoreDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
        <section className="col-span-9">
          <h2 className="font-semibold">Dragon News</h2>
          <div className="card bg-base-100 rounded-none shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="news img"
                className="rounded-md"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn btn-primary"
                >
                  Back to category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default MoreDetails;
