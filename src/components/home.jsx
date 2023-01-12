import React, { useState, useEffect } from "react";
import maindishes from "../main-dishes.jpg";
import appetizers from "../appetizers.jpg";
import soups from "../soups.jpg";
import desserts from "../desserts.jpg";
import drinks from "../drinks.jpg";

const Home = (props) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: "GET",
    heders: myHeaders,
  };

  useEffect(() => {}, []);

  return (
    <>
      <div class="flex justify-center">
        <a href="#!">
          <img
            src={maindishes}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
        </a>
        <h5 class="text-xl font-medium leading-tight mb-2">Main dishes</h5>

        <a href="#!">
          <img
            src={appetizers}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
        </a>
        <h5 class="text-xl font-medium leading-tight mb-2">Appetizers</h5>

        <a href="#!">
          <img
            src={soups}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
        </a>
        <h5 class="text-xl font-medium leading-tight mb-2">Soups</h5>

        <a href="#!">
          <img
            src={desserts}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
        </a>
        <h5 class="text-xl font-medium leading-tight mb-2">Desserts</h5>

        <a href="#!">
          <img
            src={drinks}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
        </a>
        <h5 class="text-xl font-medium leading-tight mb-2">Drinks</h5>
      </div>

      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
