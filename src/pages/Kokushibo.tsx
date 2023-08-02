import React from "react";
import VideoKokushibo from "../assets/uppermoon/video/Kokushibo.mp4";

export const Kokushibo = () => {
  return (
    <div className="w-full h-screen flex flex-col snap-y snap-mandatory overflow-auto">
      <section className="snap-center relative">
        <div className="absolute bg-black/70 w-full h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex flex-col justify-center items-center">
              <div className="md:text-9xl text-6xl uppermoon-font text-white font-bold">
                Kokushibo
              </div>
              <div className="md:text-6xl text-4xl uppermoon-font text-white font-bold">
                Upper Moon #1
              </div>
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="w-full min-h-screen object-cover -z-10"
        >
          <source src={VideoKokushibo} type="video/mp4" />
        </video>
      </section>

      <section className="bg-white min-h-screen flex justify-center items-center snap-center">
        <div className="flex md:flex-row flex-col-reverse items-center text-black w-full">
          {/* right side */}
          <div className="w-1/2 flex flex-col md:px-52 md:items-baseline items-center">
            <h1 className="uppermoon-font md:text-6xl text-3xl mb-5">
              Kokushibo
            </h1>
            <p className="md:text-left text-justify text-md">
              Kokushibo adalah iblis kuat yang menduduki posisi pertama di
              antara iblis bulan atas. Dia merupakan tangan kanan dari Raja
              Iblis Kibutsuji Muzan.
              <br />
              <br />
              Dia merupakan kakak dari Yoriichi Tsugikuni, seorang pemburu iblis
              terkenal yang pertama kali menciptakan Teknik Pernapasan, yaitu
              Teknik Pernapasan Matahari.
            </p>
          </div>
          {/* left side */}
          <div className="md:w-1/2 flex flex-col px-20 justify-center items-center">
            <img
              src={require("../assets/uppermoon/Kokushibo-2.webp")}
              alt="Kokushibo"
              loading="lazy"
              width={"50%"}
            />
          </div>
        </div>
      </section>

      <section className="bg-black min-h-screen flex justify-center items-center snap-center">
        <div className="flex flex-col items-center justify-center text-white w-full">
          <img
            src={require("../assets/uppermoon/Kokushibo-3.webp")}
            alt="Kokushibo"
            loading="lazy"
            className="md:w-1/2"
          />

          <div className="text-center md:w-1/2 px-20">
            <h1 className="uppermoon-font md:text-6xl text-3xl mb-5">
              Blood Demon Art
            </h1>
            <p className="md:text-center text-justify text-md">
              Kokushibo merupakan iblis pertama yang mampu menguasai Teknik
              Pernapasan, yiatu Teknik Pernapasan Bulan. Dia memiliki Seni Darah
              Iblis <span className="italic">Crescent Moon Blades</span>
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
