import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftSide from "../components/layout-components/LeftSide";
import RightSide from "../components/layout-components/RightSide";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto py-4">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-6">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-10 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftSide></LeftSide>
        </aside>
        <section className="main col-span-6"><Outlet></Outlet></section>
        <aside className="right col-span-3">
            <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
