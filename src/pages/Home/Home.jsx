import React from "react";
import "./Home.css";

const Home = () => {
  const renderChessbroad = (lever) => {
    return <div className="container"></div>;
  };

  return (
    <section className="homeContainer p-4">
      <section className="container">
        <section className="homeWrapper py-3">
          <section className="leverChessbroad">Lever Chessbroad</section>
          <section className="leverSelection d-flex justify-content-between align-items-center font-monospace  my-5">
            <i class="leverArrow -ap icon-chevron-left22"></i>
            <span className="fs-1">3x3</span>
            <i class="leverArrow -ap icon-chevron-right22"></i>
          </section>
          <section className="d-grid gap-2">
            <button className="btn btn-warning txt-white text-white fs-1">
              Game Start
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Home;
