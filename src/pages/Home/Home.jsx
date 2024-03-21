import React from "react";
import { useState } from "react";
import "./Home.css";
const imageList = require.context("../../img", true);

const Home = () => {
  const _imageList = imageList.keys().map((img) => imageList(img));
  const [level, setLevel] = useState(1);
  const [levelImg, setLevelImg] = useState(_imageList[0]);

  const setPrevLevel = () => {
    let _level = level - 1;

    if (_level < 1) {
      setLevel(5);
      console.log("click2");
      console.log("setPrevLevel:", _level);
      setLevelImg(_imageList[_imageList.length - 1]);
    } else {
      setLevel(_level);
      console.log("click1");
      console.log("setPrevLevel:", _level);
      setLevelImg(_level - 1);
    }
  };

  const setNextLevel = () => {
    let _level = level + 1;
    if (_level > 5) {
      setLevel(1);
      console.log("click2");
      console.log("setNextLevel:", _level);
      setLevelImg(_imageList[0]);
    } else {
      setLevel(_level);
      console.log("click1");
      console.log("setNextLevel:", _level);
      setLevelImg(_level + 1);
    }
  };

  return (
    <section className="homeContainer p-4">
      <section className="container">
        <section className="homeWrapper py-3">
          <section className="levelChessbroad">
            <img src={levelImg} />
          </section>
          <section className="levelSelection d-flex justify-content-between align-items-center font-monospace  my-4">
            <i
              className="levelArrow -ap icon-chevron-left22"
              onClick={setPrevLevel}
            ></i>
            <span className="fs-1">3x3</span>
            <i
              className="levelArrow -ap icon-chevron-right22"
              onClick={setNextLevel}
            ></i>
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