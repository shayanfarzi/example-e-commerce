import React from "react";
import { useParams } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const HomePage = () => {
  function useTest() {
    let { category } = useParams();
    console.log(category);
  }
  useTest();
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
export default HomePage;
