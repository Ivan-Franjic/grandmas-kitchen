import React, { useState, useEffect } from "react";
import maindishes from "../main-dishes.jpg";
import appetizers from "../appetizers.jpg";
import soups from "../soups.jpg";
import desserts from "../desserts.jpg";
import drinks from "../drinks.jpg";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Home = (props) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "favourites"));
    onSnapshot(q, (querySnapshot) => {
      setFavourites(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <>
      <div class="flex justify-center space-x-5 mb-20">
        <a href="/main_dishes" class="avatar">
          <img
            src={maindishes}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Main dishes</h5>
        </a>

        <a href="/appetizers" class="avatar">
          <img
            src={appetizers}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Appetizers</h5>
        </a>

        <a href="/soupes" class="avatar">
          <img
            src={soups}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Soups</h5>
        </a>

        <a href="/desserts" class="avatar">
          <img
            src={desserts}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Desserts</h5>
        </a>

        <a href="/drinks" class="avatar">
          <img
            src={drinks}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Drinks</h5>
        </a>
      </div>

      <div class="flex flex-wrap justify-center space-x-10">
        {favourites.map((favourite) => (
          <div class="rounded-lg shadow-lg bg-white max-w-xs  mb-10">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium">
                {favourite.data.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
