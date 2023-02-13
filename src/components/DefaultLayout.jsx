import React from "react";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-[#030117] via-[#01195F]  to-[#030117]">
      <div className="flex flex-col mx-auto justify-center items-center p-4 md:max-w-[800px]  text-white">
        <Link to="/" className="flex justify-center  items-center  mb-8 ">
          <img src="../../../bg.png" alt="" className="w-40 h-auto" />
          <h1 className="text-3xl font-bold">Lung Cancer Detection System</h1>
        </Link>

        <p className="text-white text-center max-w-[90%] md:max-w-[80%] lg:md:max-w-[60%] mx-auto my-0 font-bold text-xl pt-2 pb-4">
        Cancer is a disease in which some of the body's cells grow uncontrollably and spread to other parts of the body. Cancer can start almost anywhere in the human body, which is made up of trillions of cells.
      </p>
        {children}
      </div>
      
    </div>
  );
};

export default DefaultLayout;
