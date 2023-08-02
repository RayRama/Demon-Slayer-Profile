import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { uppermoons } from "../data/uppermoons";
// import useLazyLoadBackgroundImages from "../hooks/useLazyLoadBackgroundImages";

export const Uppermoon = () => {
  const navigate = useNavigate();
  /**
   * TODO: Fix this
   *
   * loadedImages is not working properly, it causes console.log always re-render
   * even though the images are already loaded. I don't know why.
   */
  // const imageArray = uppermoons.map((uppermoon) => uppermoon.image);
  // const loadedImages = useLazyLoadBackgroundImages(imageArray);
  // console.log("Hello");

  const location = useLocation();

  return (
    <>
      {location.pathname === "/uppermoon" ? ( // this method is to replace page with nested route
        <div
          className="snap-y snap-mandatory w-full flex md:flex-row flex-col h-screen md:overflow-hidden overflow-auto bg-cover bg-center bg-black"
          // style={{ backgroundImage: `url(${wall})` }}
        >
          {uppermoons.map((uppermoon) => (
            <div
              className={`h-screen flex w-full md:my-0 my-5 first:justify-start last:justify-end first:my-0 last:my-0 justify-center items-center bg-cover bg-center`}
              key={uppermoon.name}
            >
              <div
                className={`snap-center flex flex-col justify-center items-center bg-cover bg-center ${uppermoon.width} h-screen hover:bg-blend-normal bg-blend-multiply group ${uppermoon.transform} cursor-pointer`}
                style={{
                  // backgroundImage: `url(${
                  //   loadedImages.includes(uppermoon.image) ? uppermoon.image : ""
                  // })`,
                  backgroundImage: `url(${uppermoon.image})`,
                  backgroundColor: "rgba(0,0,0,0.8)",
                }}
                onClick={() => navigate(`${uppermoon.name.toLowerCase()}`)}
                id="uppermoon"
                data-src={uppermoon.image}
              >
                <p className="md:opacity-0 uppermoon-name group-hover:opacity-100 transition-all delay-200 outline-black">
                  {uppermoon.name}
                </p>
                <p className="md:opacity-0 uppermoon-title group-hover:opacity-100 transition-all delay-200 outline-black">
                  {uppermoon.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Outlet /> // Nested route will be rendered here
      )}
    </>
  );
};
