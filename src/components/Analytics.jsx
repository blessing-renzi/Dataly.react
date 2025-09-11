import React from "react";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-2">
      <div className="layout grid md:grid-cols-2 gap-5">
        <img
          src="https://dataly-nine.vercel.app/assets/laptop-BkUviYdN.jpg"
          alt="analytics image"
          className="h-full w-full my-4 mx-auto block object-cover"
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-green-400 ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl py-2 font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis, dignissimos ex fuga officia, laudantium quia
            perspiciatis ducimus exercitationem et at nemo, aut velit libero
            quibusdam delectus. Non quia molestiae, tempora odio, asperiores
            sint dicta suscipit quis est iusto, aperiam expedita nostrum velit
            impedit quas exercitationem voluptatem iste unde. Voluptas, iste.
          </p>

          <Button
            content={"Get Started"}
            type={"button"}
            className={
              "bg-black text-green-400  my-6 hover:bg-green-600 hover:text-white"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
