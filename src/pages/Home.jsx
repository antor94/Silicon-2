import React from "react";
import Banner from "../components/Banner";
import Connected from "../components/Connected";
import Manage from "../components/Manage";
import Project from "../components/Project";
import Email from "../components/Email";
import Integrate from "../components/Integrate";
import Transparent from "../components/Transparent";
import Review from "../components/Review";

const Home = () => {
  return (
    <>
      <Banner />
      <Connected />
      <Manage />
      <Project />
      <Transparent />
      <Review />
      <Integrate />
      <Email />
    </>
  );
};

export default Home;
