import React, { useState, useEffect } from "react";

const Desserts = (props) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: "GET",
    heders: myHeaders,
  };

  useEffect(() => {}, []);

  return (
    <>
      <div class="flex justify-center space-x-10">
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
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
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
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
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
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

export default Desserts;
